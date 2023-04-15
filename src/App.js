import React from "react";
import Home from "./home";
import Mentors from "./mentors";
import Signup from "./profile"
import Login from "./login"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/mentors" element={<Mentors/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;