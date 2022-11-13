import React, { useState } from 'react'
import './SignupOrg.css'
const SignupOrg = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [orgName, setOrgName] = useState("")
    const [orgCat, setOrgCat] = useState("")
    const [year, setYear] = useState("")
    const [country, setCountry] = useState("")
    const [zCode, setZCode] = useState("")
    const [address, setAdd] = useState("")

    const [allEntry, setAllentry] = useState([])

    const signupOrg = (e) =>{
        e.preventDefault()
        const newEntry = {
            email: email,
            password:password,
            orgName:orgName,
            orgCat:orgCat,
            year:year,
            country:country,
            zCode:zCode,
            address:address,
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
                    <form action='' onSubmit={signupOrg} className='allform'>
                        <div className='orgBlock'>
                            <input className='holders' type='text' name='fname' id='OrgName' placeholder='Org Name' value={orgName} onChange={(e)=>setOrgName(e.target.value)}/>
                        </div>
                        <div className='orgBlock'>
                            <input className='holders' type='text' name='lname' id='OrgCat' placeholder='Org Category' value={orgCat} onChange={(e)=>setOrgCat(e.target.value)}/>
                        </div>
                        <div className='orgBlock'>
                            <input className='holders' type='text' name='email' id='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className='orgBlock'>
                            <input className='holders' type='text' name='DOB' id='year' placeholder='Start year' value={year} onChange={(e)=>setYear(e.target.value)}/>
                        </div>
                        <div className='orgBlock'>
                            <input className='holders' type='text' name='Insta' id='country' placeholder='Country/Region' value={country} onChange={(e)=>setCountry(e.target.value)}/>
                        </div>
                        <div className='orgBlock'>
                            <input className='holders' type='text' name='youtube' id='zCode' placeholder='ZIP Code' value={zCode} onChange={(e)=>setZCode(e.target.value)}/>
                        </div>
                        <div className='hola'>
                            <input className='holders' type='text' name='facebook' id='address' placeholder='Full Address' value={address} onChange={(e)=>setAdd(e.target.value)}/>
                        </div>
                        <div className='hola'>
                            <input className='holders' type='password' name='password' id='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
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
export default SignupOrg