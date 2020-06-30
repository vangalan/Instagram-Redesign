/*
import React, { Component, useState } from "react";
import './Home.css';

export default function Home() {
    const [isLogin, setIsLogin] = useState(false);
    const [isSigningUp, setIsSigningUp] = useState(false);

    return (
        <section className={isLogin ? "login" : isSigningUp === true ? "sign-up" : "home"}>
            <div className="main__logo">
                <img src="/images/logo.png" />
            </div>
            <div className={isLogin || isSigningUp ? "whitebox-expanded" : "whitebox"}>
                {isLogin === true ? (

                    <h1>Login</h1>

                ) : isSigningUp === true ? (
                    <h1>Sign Up </h1>

                ) : (
                            <div className="whitebox-btn">
                                <button onClick={() => setIsLogin(true)}>Login</button>
                                <button onClick={() => setIsSigningUp(true)} className="whitebox__signup">Sign Up</button>
                            </div>
                        )}
            </div>


        </section>
    )
}
*/
import React from "react";
import './Home.css';

export default function Home() {
    return (
        <div>
            <div>
                <img src="/images/logo.png" alt=""/>
            </div>
            <div className="button-container">
                <div>
                    <a href="/login" className="btn">LOGIN</a>
                </div>
                <div>
                    <a href="/signup" className="btn sign-up-btn">SIGN UP</a>
                </div>
            </div>
        </div>
    );
}
