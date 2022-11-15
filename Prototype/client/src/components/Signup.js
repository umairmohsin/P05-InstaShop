import React, { useState } from 'react'
import './Signup.css'
const SignupInf = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [DOB, setDOB] = useState("")
    const [Insta, setInstaUserName] = useState("")
    const [youtube, setYtLink] = useState("")
    const [facebook, setFbLink] = useState("")

    const [allEntry, setAllentry] = useState([])

    const signup = (e) =>{
        e.preventDefault()
        const newEntry = {
            email: email,
            password:password,
            fName:fName,
            lName:lName,
            DOB:DOB,
            insta:Insta,
            youtube:youtube,
            facebook:facebook,
        }
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
                    <p>Step 2 of 2</p>
                    <h2>
                        Enter Details
                    </h2>
                </div>
                <div className='main'>
                    <form action='' onSubmit={signup} className='allform'>
                        <div className='shapack'>
                            <input className='pass' type='text' name='fname' id='fname' placeholder='Full Name' value={fName} onChange={(e)=>setFName(e.target.value)}/>
                        </div>
                        <div className='shapack'>
                            <input className='pass' type='text' name='lname' id='lname' placeholder='Last Name' value={lName} onChange={(e)=>setLName(e.target.value)}/>
                        </div>
                        <div className='shapack'>
                            <input className='pass' type='text' name='email' id='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className='shapack'>
                            <input className='pass' type='text' name='DOB' id='DOB' placeholder='DOB' value={DOB} onChange={(e)=>setDOB(e.target.value)}/>
                        </div>
                        <div className='hola'>
                            <input className='pass' type='text' name='Insta' id='Insta' placeholder='Instagram UserName' value={Insta} onChange={(e)=>setInstaUserName(e.target.value)}/>
                        </div>
                        <div className='hola'>
                            <input className='pass' type='text' name='youtube' id='youtube' placeholder='Youtube Channel Link' value={youtube} onChange={(e)=>setYtLink(e.target.value)}/>
                        </div>
                        <div className='hola'>
                            <input className='pass' type='text' name='facebook' id='facebook' placeholder='Facebook Profile link' value={facebook} onChange={(e)=>setFbLink(e.target.value)}/>
                        </div>
                        <div className='hola'>
                            <input className='pass' type='password' name='password' id='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        
                        <button className='btnup' type='submit'>Confirm Details and Create Account</button>
                    </form>
                </div>
                <div className='suggest'>
                    <p>Already a member? Log in</p>
                    
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
export default SignupInf