import React from "react";
import { useState } from "react";
import Navbar from "./navbar";
import "./mentor.css";
import Card from "./card";
import data from "./mentordata"
import mentorbg from "./images/menbg.jpg"

export default function Mentors() {
    const [skill, setSkill] = useState()

    const handleSelectChange = (event) => {
        setSkill(event.target.value);
    }

    console.log(skill);
    const array = data.filter(
        obj => obj.skills.indexOf(skill) >= 0
    )
    console.log(array)

    const mentorcards = array.map(obj => {
        return <Card
            item={obj}
        />
    })

    return (
        <div className="mentor">
            <Navbar />
            <img src={mentorbg} alt="background" className="mentor-bg" />
            <div className="content">
                <div className="mentor-head">
                    <p className="main-text">LEARN & CONNECT</p>
                    <p className="sub-text">Get your one-to-one mentor now!</p>
                </div>
                <div class="search-bar">
                    <form>
                        <select onChange={handleSelectChange}>
                            <option selected>Choose the field</option>
                            <option>Data Structures</option>
                            <option>javascript</option>
                            <option>python</option>
                            <option>React</option>
                            <option>Web Development</option>
                        </select>
                    </form>
                </div>
            </div>
            <div className="card-div">
                {mentorcards}
            </div>
        </div>
    )
}