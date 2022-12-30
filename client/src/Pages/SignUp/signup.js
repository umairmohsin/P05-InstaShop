import logo from '../../images/logo.png'
import './signup.css';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";

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
  const login = () =>{
    navigate('/login')
  }
  return (
    <div className="signup">
      <div className='signuparea'>
        <p className='signupmsg'>STEP 1 OF 2</p>
        <h1 className='signuptitle'>Sign Up as an</h1>
        <div className='signupOptions' value={opt} onChange={(e)=>setopt(e.target.value)}>
          <input type="radio" value="Organization" name='mygroup' /> Organization
          <input type="radio" value="Endorser" name='mygroup' /> Endorser
        </div>
        <button onClick={signup} className='signupbuttons'>Confirm Choice</button>
        <p className='signupbottom1'onClick={login}>Already a member? 
          <Link to='/login'>Login</Link>
        </p>
      </div>
    </div>
  );
}
export default SignUp;
