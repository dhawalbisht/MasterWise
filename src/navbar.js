import React from "react";
import {NavLink} from "react-router-dom"
import logo from "./images/logo.png"
import { useState , useEffect } from "react";
import { db } from "./firebase-config";
import {
  getDocs,
  collection
} from "firebase/firestore";


export default function Navbar() {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getUsers();
      }, []);

    return (
        <div className="navbar">
            <div className="brand">
                <img src={logo} alt="logo" />
                <h1>MentorWise</h1>
            </div>
            <div>
            <ul className="nav-list">
            <li><NavLink className="nav-links" to="/">Home</NavLink></li>
                <li><NavLink className="nav-links" to="/mentors">Mentors</NavLink></li>
                <li><a className="nav-links" href="https://videocall-951f3.web.app/" target="_blank">Video Call</a></li>
                <li><NavLink className="nav-links" to="/login">Login</NavLink></li>
                {users.name?<li><NavLink className="nav-links" to="/signup">Signup</NavLink></li>:<li><NavLink className="nav-links" to="/signup">Signup</NavLink></li>}
            </ul>
            </div>
        </div>
    )
}