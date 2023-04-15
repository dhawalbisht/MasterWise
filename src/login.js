import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { NavLink } from "react-router-dom";
import './login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userid,setUserId] = useState()
  const auth = getAuth();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;
      setUserId(userId)
      localStorage.setItem('userId',userId)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <NavLink to="/"><button type="submit">Login</button></NavLink>
    </form>
  );
};

export default Login;
