import React, { useState } from 'react'
import labels from '../../../data/labels.json'
import SignInStyledComponent from './style'
import { useHistory } from 'react-router-dom';

const SignIn = () => {

    const history = useHistory()
    if(localStorage.getItem('isAuthenticated')) history.push('/productivity')

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
            <div className="signin-wrapper">
                <input type="text" className='signin__username_input' value={userName} onChange={e => setUserName(e.target.value)} />
                <input type="password" className='signin__password_input' value={password} onChange={e => setPassword(e.target.value)} />
                <div className="signin__button" onClick={onSignInClick}>{labels.signIn}</div>
            </div>
        </SignInStyledComponent>
    )
}
export default SignIn