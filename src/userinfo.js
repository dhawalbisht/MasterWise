import React, { useState, useEffect } from 'react';
import Navbar from "./navbar";
import "./userinfocss.css";
import pic from "./profimage1.png"
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
} from "firebase/firestore";

const UserInfo = () => {
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers();
  }, [])
  const currentUserId = localStorage.getItem("userId")
  return (
    <>
    <Navbar/>
    <div className='main'>
      <div className="main-img" style={{ borderRadius: "100%", height: "10rem", width: "10rem" }}>
        <img src={pic} alt="" style={{ textAlign: "center", borderRadius: '50%' }} />
      </div>
      <div>
        <form className='main-content' style={{ backgroundColor: 'transparent' }}>

          <label htmlFor="title"><strong>Name:</strong></label>
          <input type="text" name="title" id="title" value={users[users.findIndex(user => user.id === currentUserId)]?.name} readOnly />
          <label htmlFor="email"><strong>Email Id:</strong></label>
          <input name="email" id="email" value={users[users.findIndex(user => user.id === currentUserId)]?.email} />
          <label htmlFor="phonenumber"><strong>phonenumber:</strong></label>
          <input type="number" name="number" id="phone" value={users[users.findIndex(user => user.id === currentUserId)]?.phone} />
          <label htmlFor="password"><strong>Password:</strong></label>
          <input type="password" name="password" id="password" value={users[users.findIndex(user => user.id === currentUserId)]?.password} />

          <label htmlFor="skills"><strong>Skills:</strong></label>
          <input type="skill" name="skill" id="skill" value={users[users.findIndex(user => user.id === currentUserId)]?.skills} />

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default UserInfo;
