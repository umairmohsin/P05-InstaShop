import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './EditEndorsee.css'
const EditEndorseeProfile = ()=>{
    axios.get("http://localhost:8000/InfluencerProfile").then(res => {
      console.log(res)
    }).catch(err=>console.log("Error"))
    const [email, setEmail] = useState("")
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [DOB, setDOB] = useState("")
    const [LinkTree, setLinkTree] = useState("")
    const [username, setUserName] = useState("")
    const [allEntry, setAllentry] = useState([])

    const EditEndorsee = async (e) =>{
        e.preventDefault()
        const newEntry = {
            fName:fName,
            lName:lName,
            email:email,
            
            LinkTree:LinkTree,
            username:username,
        }
        setAllentry([...allEntry, newEntry])
        console.log(allEntry)
        try{
          await axios.post('http://localhost:8000/InfluencerProfile', allEntry, {withCredentials: true});
          navigate('/')
        }
        catch (err) {
            console.log("ERROR")
        }
    }

    const navigate = useNavigate()
    const onClickHandler = () => {
      navigate('/ChangePass')
    }


  return (
    <div className="editep">
      <div className='editeparea'>
        <p className='editepmsg'>YOU CAN ONLY EDIT SELECTED FIELDS</p>
        <h1 className='editeptitle'>Edit Profile</h1>
        <form >
          <label>
            <input name='fname' id='fname' value={fName}  type="text" placeholder='First Name' className='editepinput1'/>
          </label>
          <label>
            <input name='lname' id='lname' value={lName}  type="text" placeholder='Last Name' className='editepinput2'/>
          </label>
          <label>
            <input name='email' id='email' value={email}  type="email" placeholder='Email' className='editepinput1'/>
          </label>
          <label>
            <input name='DOB' id='DOB' value={DOB}  type="text" placeholder='Date of Birth' className='editepinput2'/>
          </label>
          <label>
            <input value={username} onChange={(e)=>setUserName(e.target.value)} name='username' id='username' type="text" placeholder='Username' className='editepinputfull'/>
          </label>
          <label>
            <input value={LinkTree} onChange={(e)=>setLinkTree(e.target.value)} name='LinkTree' id='LinkTree' type="text" placeholder='LinkTree Link' className='editepinputfull'/>
          </label>
        </form>
        <button className='editepbuttons' onClick = {EditEndorsee}>Confirm Changes</button>
        <button className='editepbuttons' onClick = {onClickHandler}>Change Password</button>
      </div>
    </div>
  );
}

export default EditEndorseeProfile;