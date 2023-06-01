import React, { useState } from 'react';
import pict from "./mentorlogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./profile.css";
import previousimg from "./images/previous.png"
import { db, auth } from "./firebase-config";
import {
  collection,
  addDoc,
} from "firebase/firestore";

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [picture, setPicture] = useState(null);
  const [skills, setSkills] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(0);
  const [userid, setUserId] = useState();
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSkillsChange = (event) => {
    setSkills(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const upload = async () => {
    await addDoc(usersCollectionRef, {
      name: name,
      email: email,
      phone: phone,
      password: password,
      skills: skills,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userid);
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    navigate('/');

  };

  return (
    <div className="profile-main">
      <div className="profile-logo">
        <img src={pict} alt="Mentorz Logo" />
      </div>
      <div className="profile-form">
        <form onSubmit={handleSubmit}>
          <div className='profile-heading'>
            <NavLink className="link-home" to="/"><img src={previousimg} alt="home-page" height="40rem" /></NavLink>
            <p>Sign up</p>
          </div>
          <div className='profile-input'>
            <label>
              Name:
              <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name" required/>
            </label>

            <label>
              Email:
              <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" required/>
            </label>

            <label>
              Phone Number:
              <input type="number" value={phone} onChange={handlePhoneChange} placeholder="Enter your phone number" required/>
            </label>

            <label>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} placeholder="Create a password" required/>
            </label>

            <label>
              Confirm Password:
              <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Re-enter the password" required/>
            </label>

            <button type="submit" onClick={upload}>Sign Up</button>
          </div>
          <h5>
            Already have an account?
            <NavLink className="link-login" to="/login">Login</NavLink>
          </h5>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
