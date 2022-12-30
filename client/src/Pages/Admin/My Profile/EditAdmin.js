import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import './EditAdmin.css'
const  EditAdminProfile =  ()=>{

  axios.get("http://localhost:8000/adminProfile").then(res => {
    console.log(res)
  }).catch(err=>console.log(err))

    const [email, setEmail] = useState("23100069@lums.edu.pk")
    const [fName, setFName] = useState("Muhammad Bilal")
    const [lName, setLName] = useState("Shahid")
    const [username, setUserName] = useState("Admin")
    const [allEntry, setAllentry] = useState([])
    const navigate = useNavigate()

    const onClickHandler = () => {
      navigate('/ChangePass')
    }

  return (
    <div className="editap">
      <div className='editaparea'>
        <p className='editapmsg'>YOU CANNOT EDIT DETAILS</p>
        <h1 className='editaptitle'>View Profile</h1>
        <form onSubmit={onClickHandler}>
          <label>
            <input name='fname' id='fname' value={fName} type="text" placeholder='First Name' className='editapinput1'/>
          </label>
          <label>
            <input name='lname' id='lname' value={lName} type="text" placeholder='Last Name' className='editapinput2'/>
          </label>
          <label>
            <input name='email' id='email' value={email} type="email" placeholder='Email' className='editapinput1'/>
          </label>
          <label>
            <input value={username} name='username' id='username' type="text" placeholder='Username' className='editapinput2'/>
          </label>
          <button className='editapbuttons' onClick={onClickHandler} >Change Password</button>
        </form>
        
      </div>
    </div>
  );
}

export default EditAdminProfile;