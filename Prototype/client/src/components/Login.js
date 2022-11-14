import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './Login.css'
// const axios = require('axios')
import axios from 'axios'
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
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setAllentry] = useState([])

    const login = async (e) =>{
        e.preventDefault()
        let pw = await hash(password)
        const newEntry = {role: 'admin',email: email, password:pw}
        // setAllentry([...allEntry, newEntry])
        // console.log(allEntry)
        console.log("hello")
        console.log(newEntry)
        const s = await axios.post('http://localhost:8000/login', newEntry).then(navigate('/announce')).catch(err=>console.log(err))
        
    }
    return(
        <>
            <div className='icon'>
                <h2>COLLEASY</h2>
            </div>
            <div className='card'>
                <div className='signin'>
                    <p>Continue your journey</p>
                    <h2>
                        Sign in
                    </h2>
                </div>
                <div className='main'>
                    <form action='' onSubmit={login}>
                        <div>
                            {/* <label htmlFor='email'>Email</label> */}
                            <input className='un' type='text' name='email' id='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div>
                            {/* <label htmlFor='password'>Password</label> */}
                            <input className='pass' type='password' name='password' id='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <button onClick={login} className='btn' type='submit'>Login</button>
                    </form>
                </div>
                <div className='suggest'>
                    <p>Forgot your password? reset here</p>
                    <p>Don't have an account? Signup</p>
                </div>
            </div>
            {/* <div>
                {
                    allEntry.map((curr)=>{
                        return(
                            <div>
                                <p>{curr.email}</p>
                                <p>{curr.password}</p>
                            </div>
                        )
                    })
                }
            </div> */}
        </>
    )
}
export default Login