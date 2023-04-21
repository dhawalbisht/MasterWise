import React, { useState } from 'react';
import pict from "./mentorlogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./profile.css";
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
    <>
      <div classname="profile">
        <div className="imglogo">
          <img src={pict} alt="Mentorz Logo" />
        </div>

        <form className='profile-form' onSubmit={handleSubmit}>
          <div><h2>Sign up</h2></div>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name"/>
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email"/>
          </label>
          <br />
          <label>
            Phone Number:
            <input type="number" value={phone} onChange={handlePhoneChange} placeholder="Enter your phone number"/>
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Create a password"/>
          </label>
          <br />
          <label>
            Confirm Password:
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Re-enter the password"/>
          </label>
          <br />
          <label>
            Skills:
            <textarea value={skills} onChange={handleSkillsChange} placeholder='Enter your skills'/>
          </label>
          <br />
          <label>
            Aadhar Card:
            <input type="file" id="picture" name="picture" onChange={(event) => setPicture(event.target.files[0])} />
          </label>
          <br />
          <label>
            Message:
            <textarea value={message} onChange={handleMessageChange} placeholder="Write about yourself"/>
          </label>
          <br />
          <button type="submit" onClick={upload}>Submit</button>
          <div className='login-link'>
          <h4>
            Already have an account?
            <NavLink className="nav-links" to="/login">Login</NavLink>
          </h4>
        </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
