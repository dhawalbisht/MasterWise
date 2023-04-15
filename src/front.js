import React from 'react'
import img from "./images/homeimg.jpg"
function Front() {
    return (
        <div className='front-main'>
            <img src={img} alt="" />
            <div className='front'>
                <p className='main-content'>GET AHEAD,<br /> LEARN FROM THE BEST</p>
                <p className='sub-content'>"Unlock Your Potential with Expert Mentors! Join Us to Learn, Grow, and Excel!"</p>
            </div>
        </div>
    )
}

export default Front
