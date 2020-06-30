import React from  "react";
import './login.css';

export default function Login() {
    return (
        <div className="">
            <div className="main__logo">
                <img src="/images/logo.png" alt="" />
            </div>
            <div className="login-container">
                <h2>Login</h2>
                <a href="/"><i class="fas fa-chevron-left"></i></a>
                <form className="fields">
                    <input type="text" placeholder=" Username" className="input-fields"/>
                    <input type="password" placeholder=" Password" className="input-fields"/>
                    <input type="submit" value="LOGIN" class="login-button" />
                </form>
            </div>
            
        </div>
    )
}