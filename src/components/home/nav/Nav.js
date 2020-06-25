import React, { useState } from 'react';
import './Nav.css'

export default function NavBar() {

    // State Takes two params.
    const [clicked, hasBeenClickedOn] = useState(false)

    return (
            <div className="container">
                <header>
                    <nav className={`navbar ${clicked ? "change" : ""}`}>
                        <div className={`hamburger--container`} onClick={() => {
                            if (clicked) {
                                hasBeenClickedOn(false);
                            } else {
                                hasBeenClickedOn(true);
                            }
                        }}>
                            <div className="hamburger--line line--1"></div>
                            <div className="hamburger--line line--2"></div>
                            <div className="hamburger--line line--3"></div>
                        </div>
                        <ul className="ul--navlinks">
                            <li><a href="/">Home</a></li>
                            <li><a href="/profile">Profile</a></li>
                            <li><a href="/feed">Feed</a></li>
                            <li><a href="/search">Search</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
    );
}
