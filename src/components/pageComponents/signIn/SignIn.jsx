import React, { useState } from 'react'
import SignInStyledComponent from './style'
import { useHistory } from 'react-router-dom';
import AppHeader from '../../commonComponents/appheader/AppHeader'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';



const SignIn = () => {

    const history = useHistory()
    if (localStorage.getItem('isAuthenticated')) history.push('/productivity')

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [showLoading, setShowLoading] = useState(false)
    const [showSnackbar, setShowSnackbar] = useState(false)

    const logicProp = { prop: 'send logic prop' }
    const themeProp = { theme: 'send theme' }

    const onSignInClick = () => {
        // localStorage.setItem('isAuthenticated', true)
        // history.push('/productivity')
        setShowLoading(true)
        const header = {
            Authorization: 'Basic ' + new Buffer(userName + ':' + password).toString('base64')
        }
        console.log('header', header)

        const requestOptions = {
            method: 'POST',
            headers: header
        };

        fetch('http://fameium-dev.ap-south-1.elasticbeanstalk.com/login/', requestOptions)
            .then((res) => {
                setShowLoading(false)
                if (res.ok) {

                    localStorage.setItem('isAuthenticated', true)
                    history.push('/productivity')
                }
                else {
                    setShowSnackbar(true)


                }
            }
            )
            .catch((error) => {
                setShowLoading(false)
                setShowSnackbar(true)
            })
    }

    const handleClose = () => {
        setShowSnackbar(false)
    }



    return (
        <SignInStyledComponent logicProp={logicProp} themeProp={themeProp} >
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