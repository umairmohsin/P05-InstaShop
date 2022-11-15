import logo from '../../images/logo.png'
import React, { useState } from 'react'
import './osignup.css'
const Osignup = ()=>{
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [orgName, setOrgName] = useState("")
  const [orgCat, setOrgCat] = useState("")
  const [year, setYear] = useState("")
  const [country, setCountry] = useState("")
  const [zCode, setZCode] = useState("")
  const [address, setAdd] = useState("")

  const [allEntry, setAllentry] = useState([])

  const Osignup = (e) =>{
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
  return (
    <div className="osignup">
      <img className='logo' src={logo} />
      <div className='osignuparea'>
        <p className='osignupmsg'>STEP 2 OF 2</p>
        <h1 className='osignuptitle'>Enter Details</h1>
        <form action='' onSubmit={Osignup}>
          <label>
            <input name='orgName' id='orgName' value={orgName} onChange={(e)=>setOrgName(e.target.value)} type="text" placeholder='Organization Name' className='osignupinput1'/>
          </label>
          <label>
            <input name='orgCat' id='orgCat' value={orgCat} onChange={(e)=>setOrgCat(e.target.value)} type="text" placeholder='Organization Category' className='osignupinput2'/>
          </label>
          <label>
            <input name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' className='osignupinput1'/>
          </label>
          <label>
            <input name='year' id='year' value={year} onChange={(e)=>setYear(e.target.value)} type="text" placeholder='Year of Commencement' className='osignupinput2'/>
          </label>
          <label>
            <input name='country' id='country' value={country} onChange={(e)=>setCountry(e.target.value)} type="text" placeholder='Country/Region' className='osignupinput1'/>
          </label>
          <label>
            <input name='zCode' id='zCode' value={zCode} onChange={(e)=>setZCode(e.target.value)} type="number" placeholder='ZIP Code' className='osignupinput2'/>
          </label>
          <label>
            <input name='address' id='address' value={address} onChange={(e)=>setAdd(e.target.value)} type="text" placeholder='Full Address' className='osignupinputfull'/>
          </label>
          <label>
            <input name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' className='osignupinput1'/>
          </label>
          <label>
            <input name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Confirm Password' className='osignupinput2'/>
          </label>
        </form>
        <button type='submit' className='osignupbuttons'>Confirm Details and Create Account</button>
        <p className='osignupbottom1'>Already a member? Log In</p>
      </div>
    </div>
  );
}

export default Osignup;