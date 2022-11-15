import React, { useState } from 'react'
import './EditAdmin.css'
const EditAdminProfile = ()=>{
    const [email, setEmail] = useState("23100069@lums.edu.pk")
    const [fName, setFName] = useState("Muhammad Bilal")
    const [lName, setLName] = useState("Shahid")
    const [username, setUserName] = useState("Admin")
    const [allEntry, setAllentry] = useState([])

  return (
    <div className="editap">
      <div className='editaparea'>
        <p className='editapmsg'>YOU CANNOT EDIT DETAILS</p>
        <h1 className='editaptitle'>View Profile</h1>
        <form>
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
            <input value={username} name='username' id='username' value={username} type="text" placeholder='Username' className='editapinput2'/>
          </label>
        </form>
        <button className='editapbuttons' type='submit'>Change Password</button>
      </div>
    </div>
  );
}

export default EditAdminProfile;