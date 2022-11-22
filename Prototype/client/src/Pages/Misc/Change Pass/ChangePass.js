import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './ChangePass.css'
import axios from "axios";
import { useLocation } from "react-router-dom";
const ChangePass = ()=>{

  


  const navigate = useNavigate()
  const {state} = useLocation();
  async function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  }

  axios.defaults.withCredentials = true; 

  const [email, setEmail] = useState("")
  const [oldPass,setOldPass] = React.useState('')
  const [pass1, setPass1] = React.useState('')
  const [pass2, setPass2] = React.useState('')  
  const [msg, setMsg] = React.useState('')

  
  const handleClick = async (ev) => {

    
    ev.preventDefault()
    // navigate('/')
    try{
      if (pass1 === pass2){
      let password = await hash(pass1)
      await axios.post("http://localhost:8000/ChangePass", {role:"admin",email:"bilal.shahid@gmail.com",password:password}, {withCredentials: true});
      
      navigate('/home')
      } 
    } catch(err){
        console.log(err);
    }
  }


  const oldPassword = (ev) =>{
    // ev.preventDefault()
    setOldPass(ev.target.value)
  }

  const changePass1 = (ev) => {
    // ev.preventDefault()
    setPass1(ev.target.value)
  }

  const changePass2 = (ev) => {
    // ev.preventDefault()
    setPass2(ev.target.value)
  }

  const e = (ev) =>{
    // ev.preventDefault()
    setEmail(ev.target.value)
  }



  return (
    <div className="changepass">
      <div className='changepassarea'>
        <p className='changepassmsg'>MAKE SURE YOUR NEW PASSWORD IS STRONG</p>
        <h1 className='changepasstitle'>Change Password</h1>
        <form action='' onSubmit={handleClick} >
        {/* <label>
            <input type="email" placeholder='Enter your email' value={email} onChange={e}className='changepassinput1' required/>
          </label> */}
          <label>
            <input type="password" placeholder='Enter Current Password' value={oldPass} onChange={oldPassword}className='changepassinput1' required/>
          </label>
          <label>
            <input type="password" placeholder='Enter New Password' value={pass1} onChange={changePass1} className='changepassinputmid'  required/>
          </label>
          <label>
            <input type="password" placeholder='Confirm New Password' value={pass2} onChange={changePass2} className='changepassinput2'  required/>
          </label>
          <button className='changepassbuttons' onClick={handleClick}>Change Password</button>
        </form>
        
      </div>
    </div>
  );
}

export default ChangePass;