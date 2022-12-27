import logo from '../../images/logo.png'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './login.css'
import axios from 'axios'
import { Link } from "react-router-dom";

async function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
}
const Login = ()=>{
    const navigate = useNavigate()
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setAllentry] = useState([])



    const signup = () =>{
      navigate('/signup', {state:{role:role,email:email,pwd:password}})
     
    }

    const ChangePassword = () => {
      navigate('/ChangePass', {state:{role:role,email:email,pwd:password}})
    }


    const login = async (e) =>{
        e.preventDefault()
        let pw = await hash(password)
        const newEntry = {role: role.toLowerCase(), email: email, password:pw}
        // console.log(newEntry)
        // setAllentry([...allEntry, newEntry])
        // console.log(allEntry)
        // console.log("hello")
        // console.log(newEntry)
        try{
          const res = await axios.post('http://localhost:8000/login', newEntry, {withCredentials: true});
          // console.log("After loggin in, data in req", res)
          navigate('/home', {state:{role:role,email:email,pwd:password}})
        }
        catch (err) {
            console.log("ERROR")
        }
        // const s = await axios.post('http://localhost:8000/login', newEntry).then(navigate('/announce')).catch(err=>console.log("Error"))
        
    }
  return (
    <div className="login">
      {/* <img className='logo' src={logo} /> */}
      <div className='area'>
        <p className='loginmsg'>CONTINUE YOUR JOURNEY</p>
        <h1 className='logintitle'>Sign In As</h1>
        
        <div className='signupOptions' value = {role} onChange={(e)=>setRole(e.target.value)}>
          <input type="radio" value="Client" name='mygroup' /> Client
          <input type="radio" value="Influencer" name='mygroup' /> Influencer
          <input type="radio" value="Admin" name='mygroup' /> Admin
        </div>
        
        <form action='' onSubmit={login}>
          <label>
            <input name='email' id='email' type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='logininput1'/>
          </label>
          <label>
            <input name='password' id='password' type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='logininput2'/>
          </label>
        </form>
        <button onClick={login} className='loginbuttons' type='submit'>Sign In</button>
        <p className='loginbottom1'onClick={ChangePassword}>Change Your Password? Reset Here</p>
        <p className='loginbottom2'onClick={signup}>Don't have an account? 
          <Link to='/signup'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;