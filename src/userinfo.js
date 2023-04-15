import React from 'react';
import "./userinfocss.css";
import pic from "./profimage1.png"
const UserInfo = ({name ,password,email,phone,picture,skills}) => {
    const names = localStorage.getItem('name');
    const em = localStorage.getItem('email');
    const phones = localStorage.getItem('phone');
    const pass = localStorage.getItem('password');
    const skill = localStorage.getItem('skills');
    
                
  return (
  

<div className='main'>
<div className="main-img" style={{borderRadius: "100%", height: "10rem", width: "10rem"}}>
        <img src={pic} alt="" style={{textAlign:"center",borderRadius:'50%'}} />
</div>
<div>
<form className='main-content' style={{backgroundColor:'transparent'}}>

  <label htmlFor="title"><strong>Name:</strong></label>
  <input type="text" name="title" id="title" value={names} readOnly/>
  <label htmlFor="email"><strong>Email Id:</strong></label>
  <input name="email" id="email" value={em}  />
  <label htmlFor="phonenumber"><strong>phonenumber:</strong></label>
  <input type="number" name="number" id="phone" value={phones}  />
  <label htmlFor="password"><strong>Password:</strong></label>
  <input type="password" name="password" id="password" value={pass}  />

  <label htmlFor="skills"><strong>Skills Aquired:</strong></label>
  <input type="skill" name="skill" id="skill" value={skill}  />

  <button type="submit">Explore</button>
</form>
</div>
</div>
  );
};

export default UserInfo;
