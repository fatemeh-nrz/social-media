import React from 'react'
import "./register.css"

export default function Register() {
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
                <input type="text" className="loginInput"placeholder='UserName' />
                    <input type="Email" className="loginInput"placeholder='Email' />
                    <input type="Password" className="loginInput" placeholder='Password' />
                    <input type="Password" className="loginInput" placeholder='Password  Again' />
                    <button className='loginButton'>Sign Up</button>
                    <button className='loginRegisterButtun'>
                      Log Into Account
                    </button>
                </div>
            </div>
        </div>
        
    </div>
  )
}
