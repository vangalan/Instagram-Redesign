import React from  "react";
import './login.css';

export default function Login() {
    return (
        <div className="whole-page">
            <div className="main__logo">
                <img src="/images/logo.png" alt="" />
            </div>
            <div className="login-container">
                <h2>Login</h2>
                <i class="fas fa-chevron-left"></i>
                <form className="fields">
                    <input type="text" placeholder=" Username" className="input-fields"/>
                    <input type="password" placeholder=" Password" className="input-fields"/>
                    <input type="submit" value="LOGIN" class="login-button" />
                </form>
            </div>
            
        </div>
    )
}
/*
<div>
  <img src="https://github.com/vangalan/instagram-redesign/blob/master/public/images/logo.png?raw=true" alt="">
  <div class="login-container">
    <h2 class="login">Login</h2>
    <i class="fas fa-chevron-left"></i>
    <div class="fields">
          <input type="text" placeholder="   Username">
    <input type="text" placeholder="   Password">
    <input type="submit" value="LOGIN" class="login-button">
    </div>
  </div>
  
</div>
<script src="https://kit.fontawesome.com/c51b1035ec.js" crossorigin="anonymous"></script>
*/