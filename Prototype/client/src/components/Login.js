import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './Login.css'
const Login = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setAllentry] = useState([])

    const login = (e) =>{
        e.preventDefault()
        const newEntry = {email: email, password:password}
        setAllentry([...allEntry, newEntry])
        console.log(allEntry)
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
                        <button className='btn' type='submit'>Login</button>
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