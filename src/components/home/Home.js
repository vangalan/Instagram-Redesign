import React from "react";
import './Home.css';

export default function Home() {
   
    return (
        <div className="bg-gradient">
            <div >
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
