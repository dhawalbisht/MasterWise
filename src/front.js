import React from 'react'
import img from "./images/homeimg.jpg"
function Front() {
    return (
        <div className='front-main'>
            <img src={img} alt="" />
            <div className='front'>
                <p>Get Ahead!<br/>Learn from the best</p>
                <h4>Unlock Your Potential with Expert Mentors! Join Us to Learn, Grow, and Excel!"</h4>
            </div>
        </div>
    )
}

export default Front
