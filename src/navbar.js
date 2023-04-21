import React from "react";
import { NavLink } from "react-router-dom"
import logo from "./images/logo.png"
import Profile from "./userinfo";


export default function Navbar() {
    const userid = localStorage.getItem("userId")
    const handleSignOut = () => {
        localStorage.removeItem("userId");
        window.location.reload();
    }
    return (
        <div className="navbar">
            <div className="navbar-inside">
                <div className="brand">
                    <img src={logo} alt="logo" />
                    <h1>MentorWise</h1>
                </div>
                <div>
                    <ul className="nav-list">
                        <li><NavLink className="nav-links" to="/">Home</NavLink></li>
                        <li><NavLink className="nav-links" to="/mentors">Mentors</NavLink></li>
                        <li><a className="nav-links" href="https://videocall-951f3.web.app/" target="_blank">Video Call</a></li>
                        {
                            userid ?
                                <div style={{ display: "flex" }}>
                                    <li><NavLink className="nav-links" to="/userinfo">Profile</NavLink></li>
                                    <li onClick={handleSignOut}><NavLink className="nav-links" to="/">SignOut</NavLink></li>
                                </div> :
                                <div style={{ display: "flex" }}>
                                    <li><NavLink className="nav-links" to="/login">Login</NavLink></li>
                                </div>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}