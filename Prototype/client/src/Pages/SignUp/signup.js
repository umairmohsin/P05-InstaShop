import logo from '../../images/logo.png'
import './signup.css';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

function SignUp() {
  const navigate = useNavigate()
  const [opt, setopt] = useState("")
  const signup = async(e)=>{
    e.preventDefault()
    if (opt==="Organization"){
      navigate("/signuporg")
    }
    else{
      navigate("/signupend")
    }
  }
  return (
    <div className="signup">
      <img className='logo' src={logo} />
      <div className='signuparea'>
        <p className='signupmsg'>STEP 1 OF 2</p>
        <h1 className='signuptitle'>Sign Up as an</h1>
        <div value={opt} onChange={(e)=>setopt(e.target.value)}>
          <input type="radio" value="Organization" name='mygroup' /> Organization
          <input type="radio" value="Endorser" name='mygroup' /> Endorser
        </div>
        <button onClick={signup} className='signupbuttons'>Confirm Choice</button>
        <p className='signupbottom1'>Already a member? Log In</p>
      </div>
    </div>
  );
}

export default SignUp;
