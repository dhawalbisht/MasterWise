import React from "react";
import Home from "./home";
import Mentors from "./mentors";
import Signup from "./profile"
import Login from "./login"
import Profile from "./userinfo"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/mentors" element={<Mentors/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/userinfo" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;