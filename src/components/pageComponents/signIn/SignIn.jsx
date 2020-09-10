import React, { useState } from 'react'
import labels from '../../../data/labels.json'
import SignInStyledComponent from './style'
import { useHistory } from 'react-router-dom';
import AppHeader from '../../commonComponents/appheader/AppHeader'

const SignIn = () => {

    const history = useHistory()
    if (localStorage.getItem('isAuthenticated')) history.push('/productivity')

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const logicProp = { prop: 'send logic prop' }
    const themeProp = { theme: 'send theme' }

    const onSignInClick = () => {
        localStorage.setItem('isAuthenticated', true)
        history.push('/productivity')
    }

    return (
        <SignInStyledComponent logicProp={logicProp} themeProp={themeProp} >
            <AppHeader />
            <div className="signin-wrapper">
                <div className="signin-art">
                </div>
                <div className="signin-form">
                    <div className="input-set">
                        <div className="uername-title">Username/email</div>
                        <input type="text" className='username' value={userName} onChange={e => setUserName(e.target.value)} />

                    </div>
                    <div className="input-set">
                        <div className="password-title">Password</div>
                        <input type="password" className='password' value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="button-set">
                        <div className="signin__button" onClick={onSignInClick}>{labels.signIn}</div>
                        <div className="forgot-buttons">
                            <div className="forgot-text">Forgot </div> 
                            <div className="forgot__username link" >Username </div>/
                            <div className="forgot__password link"> Password </div>?
                        </div>
                    </div>

                </div>
            </div>
        </SignInStyledComponent>
    )
}
export default SignIn