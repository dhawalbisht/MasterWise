import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { auth, db } from "./firebase-config";
import pict from "./mentorlogo.png";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import previousimg from "./images/previous.png"
import "./login.css"
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers();
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = users.findIndex(user => user.email === email && user.password === password)
    if (result < 0) {
      console.log("not found")
    }
    else {
      localStorage.setItem("userId", users[result].id)
      navigate('/');
    }
  }

  return (
    <div className="login">
      <div className="imglogo">
        <img src={pict} alt="Mentorz Logo" />
      </div>
      <form className="login-form">
        <div className="heading">
          <NavLink className="nav-links" to="/"><img src={previousimg} alt="home-page" height="40rem" /></NavLink>
          <p>Log in</p>
        </div>
        Email:
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
          }}
        />
        Password:
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
        <h4>
          Don't have an account?
          <NavLink className="nav-links" to="/signup">Create account</NavLink>
        </h4>
      </form>
    </div>
  )
}

export default SignIn