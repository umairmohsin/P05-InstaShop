import logo from '../../images/logo.png'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios'
import './esignup.css'

const Endsignup = ()=>{
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [DOB, setDOB] = useState("")
    const [LinkTree, setLinkTree] = useState("")
    const [username, setUserName] = useState("")
    const [allEntry, setAllentry] = useState([])

    const login = () =>{
      navigate('/login')
    }
    const EndorserData = async (e) =>{
        e.preventDefault()
        const newEntry = {
            role: "Influencer",
            fName: fName,
            lName:lName,
            email: email,
            dob: DOB,
            username: username,
            link: LinkTree,
            niche: "Clothes",
            password:password,
        }
        try{
          await axios.post('http://localhost:8000/signup', newEntry, {withCredentials: true});
          navigate('/login')
        }
        catch (err) {
            console.log("ERROR")
        }
    }
  return (
    <div className="esignup">
      <img className='logo' src={logo} />
      <div className='esignuparea'>
        <p className='esignupmsg'>STEP 2 OF 2</p>
        <h1 className='esignuptitle'>Enter Details</h1>
        <form >
          <label>
            <input name='fname' id='fname' value={fName} onChange={(e)=>setFName(e.target.value)} type="text" placeholder='First Name' className='esignupinput1'/>
          </label>
          <label>
            <input name='lname' id='lname' value={lName} onChange={(e)=>setLName(e.target.value)} type="text" placeholder='Last Name' className='esignupinput2'/>
          </label>
          <label>
            <input name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' className='esignupinput1'/>
          </label>
          <label>
            <input name='DOB' id='DOB' value={DOB} onChange={(e)=>setDOB(e.target.value)} type="date" placeholder='Date of Birth' className='esignupinput2'/>
          </label>
          <label>
            <input name='username' id='username' value={username} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder='Username' className='esignupinputfull'/>
          </label>
          <label>
            <input name='LinkTree' id='LinkTree' value={LinkTree} onChange={(e)=>setLinkTree(e.target.value)} type="text" placeholder='LinkTree Link' className='esignupinputfull'/>
          </label>
          <label>
            <input name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' className='esignupinput1'/>
          </label>
          <label>
            <input name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Confirm Password' className='esignupinput2'/>
          </label>
        </form>
        <button  className='esignupbuttons' onClick={EndorserData} >Confirm Details and Create Account</button>
        <p className='esignupbottom1'onClick={login}>Already a member? <Link to='/login'>Login</Link> </p>
      </div>
    </div>
  );
}
export default Endsignup;