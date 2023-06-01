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
      alert("User not found")
    }
    else {
      localStorage.setItem("userId", users[result].id)
      navigate('/');
    }
  }

  return (
    <div className="login">
      <div className="logo-login">
        <img src={pict} alt="Mentorwise Logo" />
      </div>
      <div className="login-form">
        <form>
          <div className="login-heading">
            <NavLink className="link-home" to="/"><img src={previousimg} alt="home-page" height="40rem" /></NavLink>
            <p>Log in</p>
          </div>
          <div className="login-info">
            <label className="login-email">
              <p>Email:</p>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                required
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
            </label>
            <label className="login-password">
              <p>Password:</p>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                required
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </label>
            <button onClick={handleSubmit}>Log In</button>
          </div>
          <h5>
            Don't have an account?
            <NavLink className="link-signup" to="/signup">Create account</NavLink>
          </h5>
        </form>
      </div>
    </div>
  )
}

export default SignIn