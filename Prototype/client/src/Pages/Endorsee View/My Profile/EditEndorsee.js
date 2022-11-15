import React, { useState } from 'react'
import './EditEndorsee.css'
const EditEndorseeProfile = ()=>{
    const [email, setEmail] = useState("23100016@lums.edu.pk")
    const [fName, setFName] = useState("Muhammad Affan")
    const [lName, setLName] = useState("Ashraf")
    const [DOB, setDOB] = useState("25/10/2000")
    const [LinkTree, setLinkTree] = useState("linktr.ee/bruh")
    const [username, setUserName] = useState("jheengains")
    const [allEntry, setAllentry] = useState([])

    const EditEndorseeProfile = (e) =>{
        e.preventDefault()
        const newEntry = {
            LinkTree:LinkTree,
            username:username,
        }
        setAllentry([...allEntry, newEntry])
        console.log(allEntry)
    }

  return (
    <div className="editep">
      <div className='editeparea'>
        <p className='editepmsg'>YOU CAN ONLY EDIT SELECTED FIELDS</p>
        <h1 className='editeptitle'>Edit Profile</h1>
        <form action='' onSubmit={EditEndorseeProfile}>
          <label>
            <input name='fname' id='fname' value={fName} type="text" placeholder='First Name' className='editepinput1'/>
          </label>
          <label>
            <input name='lname' id='lname' value={lName} type="text" placeholder='Last Name' className='editepinput2'/>
          </label>
          <label>
            <input name='email' id='email' value={email} type="email" placeholder='Email' className='editepinput1'/>
          </label>
          <label>
            <input name='DOB' id='DOB' value={DOB} type="text" placeholder='Date of Birth' className='editepinput2'/>
          </label>
          <label>
            <input value={username} onChange={(e)=>setUserName(e.target.value)} name='username' id='username' value={username} type="text" placeholder='Username' className='editepinputfull'/>
          </label>
          <label>
            <input value={LinkTree} onChange={(e)=>setLinkTree(e.target.value)} name='LinkTree' id='LinkTree' value={LinkTree} type="text" placeholder='LinkTree Link' className='editepinputfull'/>
          </label>
        </form>
        <button className='editepbuttons' type='submit'>Confirm Changes</button>
        <button className='editepbuttons' type='submit'>Change Password</button>
      </div>
    </div>
  );
}

export default EditEndorseeProfile;