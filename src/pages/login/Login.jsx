import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">App Sociall</h3>
                <span className="loginDescription">
                    Connect with friends the world around you on AppSocial
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                <input type="Email" className="loginInput"placeholder='Email' />
                <input type="Password" className="loginInput" placeholder='Password' />
                    <button className='loginButton'>LogIn</button>
                    <span className="loginForget">Forget Password?</span>
                    <button className='loginRegisterButtun'>
                        Create New Account
                    </button>
                </div>
            </div>
        </div>
        
    </div>
  )
}
