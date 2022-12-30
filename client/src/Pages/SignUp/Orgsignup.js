import logo from '../../images/logo.png'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios'
import './osignup.css'

const Orgsignup = ()=>{
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [orgName, setOrgName] = useState("")
  const [orgCat, setOrgCat] = useState("")
  const [year, setYear] = useState("")
  const [country, setCountry] = useState("")
  const [zCode, setZCode] = useState("")
  const [address, setAdd] = useState("")
  const [allEntry, setAllentry] = useState([])
  
  const login = () =>{
    navigate('/login')
  }
  const Osignupsend = async (e) =>{
      e.preventDefault()
      const newEntry = {
          role: "Client",
          name: orgName,
          category: orgCat,
          email: email,
          startDate: year,
          country:country,
          zipcode:zCode,
          address:address,
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
  return(
    <div className="osignup">
      <img className='logo' src={logo} />
      <div className='osignuparea'>
        <p className='osignupmsg'>STEP 2 OF 2</p>
        <h1 className='osignuptitle'>Enter Details</h1>
        <form action='' onSubmit={Osignupsend}>
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
            <input name='year' id='year' value={year} onChange={(e)=>setYear(e.target.value)} type="date" placeholder='Year of Commencement' className='osignupinput2'/>
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
        <button onClick={Osignupsend} className='osignupbuttons'>Confirm Details and Create Account</button>
        <p className='osignupbottom1'onClick={login}>Already a member? <Link to='/login'>Login</Link></p>
      </div>
    </div>
  );
}
export default Orgsignup;