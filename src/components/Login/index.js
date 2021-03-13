import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import Logo from '../../images/fb_logo.png'
import { auth, provider } from '../../firebase'

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {console.log(result);})
        .catch(err => {alert(err)});
    }

    return (
        <div className='login'>
            <img src={Logo} className='logo'/>
            <button onClick={signIn}>Sign In</button>
            <button onClick={signIn}>Skip Sign In</button>
        </div>
    )
}

export default Login
