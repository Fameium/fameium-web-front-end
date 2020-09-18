import React, { useState, useContext } from 'react'
import SignInStyledComponent from './style'
import { useHistory } from 'react-router-dom';
import AppHeader from '../../commonComponents/appheader/AppHeader'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import utilFunctions from '../../../utilityFunctions/localStorage'
import api from './../../../APIs/api'
import apiSupportFunctions from './../../../APIs/apiSupportFunctions'
import { MasterContext } from '../../../context/MasterContext'

const SignIn = () => {

    const history = useHistory()
    if (localStorage.getItem('isAuthenticated')) history.push('/productivity')

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [showLoading, setShowLoading] = useState(false)
    const [showSnackbar, setShowSnackbar] = useState(false)
    const { post } = api()
    const { base64 } = apiSupportFunctions
    const { setItem } = utilFunctions
    const { MasterDispatch } = useContext(MasterContext)

    const onSignInClick = () => {
        // localStorage.setItem('isAuthenticated', true)
        // history.push('/productivity')
        setShowLoading(true)
        const header = {
            Authorization: base64(userName, password)
        }

        // const requestOptions = {
        //     method: 'POST',
        //     headers: header
        // };

        post('login', {}, header, {} )
            .then((res) => {
                console.log('res done', res.data)
                setShowLoading(false)
                if (res.status === 200) {

                    setItem('auth-data',  res.data)
                    MasterDispatch({ type: 'SET_TOKEN', value: res.data.token })
                    MasterDispatch({ type: 'SET_TOKEN_HEADER', value: { Authorization: `token ${res.data.token}` } })
                    MasterDispatch({ type: 'SET_PROFILE', value: res.data.user })
                    MasterDispatch({ type: 'SET_ACTIVE_TENANT', value: res.data.user.tenants[0].id })
                    history.push('/productivity')
                }
                else {
                    setShowSnackbar(true)


                }
            }
            )
            .catch((error) => {
                console.log('err done', error)

                setShowLoading(false)
                setShowSnackbar(true)
            })
    }

    const handleClose = () => {
        setShowSnackbar(false)
    }



    return (
        <SignInStyledComponent  >
            <AppHeader />
            <div className="login-wrapper">
                <div className="col-1"></div>
                <div className="col-2">
                    <TextField fullWidth id="outlined-basic" color="secondary" label="Username" variant="outlined" className='field' value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <TextField fullWidth id="outlined-basic" color="secondary" label="password" variant="outlined" type='password' className='field' value={password} onChange={(e) => setPassword(e.target.value)} />

                    <Button variant="contained" color="secondary" className='login-button field' onClick={onSignInClick} > Login </ Button>
                    {showLoading && <CircularProgress color="secondary" />}
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        open={showSnackbar}
                        onClose={handleClose}
                        message="Oops! Wrong credentials"
                        
                    />
                </div>
            </div>

        </SignInStyledComponent >
    )
}
export default SignIn