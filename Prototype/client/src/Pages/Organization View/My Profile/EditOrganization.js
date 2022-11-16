import React, { useState } from 'react'
import './EditOrganization.css'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

const EditOrgProfile = ()=>{
  const [email, setEmail] = useState("justaju@gmail.com")
  const [orgName, setOrgName] = useState("Justaju")
  const [orgCat, setOrgCat] = useState("Clothing")
  const [year, setYear] = useState("23/05/2021")
  const [country, setCountry] = useState("Pakistan")
  const [zCode, setZCode] = useState("57290")
  const [address, setAdd] = useState("Room 418, Hostel M7, LUMS, Sector U, Phase 5, DHA, Lahore")

  const [allEntry, setAllentry] = useState([])

  const editop = async (e) =>{
      e.preventDefault()
      const newEntry = {
          orgName:orgName,
          orgCat:orgCat,
          country:country,
          zCode:zCode,
          address:address,
      }
      setAllentry([...allEntry, newEntry])
      console.log(allEntry)

      try{
        await axios.post('http://localhost:8000/clientProfile', allEntry, {withCredentials: true});
        navigate('/')
      }
      catch (err) {
          console.log("ERROR")
      }
  }

  const navigate = useNavigate()
    const onClickHandler = () => {
      navigate('/ChangePass')
    }   

  return (
    <div className="editop">
      <div className='editoparea'>
        <p className='editopmsg'>YOU CAN ONLY EDIT SELECTED FIELDS</p>
        <h1 className='editoptitle'>Edit Profile</h1>
        <form action='' onSubmit={editop}>
          <label>
            <input name='orgName' id='orgName' value={orgName} onChange={(e)=>setOrgName(e.target.value)} type="text" placeholder='Organization Name' className='editopinput1'/>
          </label>
          <label>
            <input name='orgCat' id='orgCat' value={orgCat} onChange={(e)=>setOrgCat(e.target.value)} type="text" placeholder='Organization Category' className='editopinput2'/>
          </label>
          <label>
            <input name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' className='editopinput1'/>
          </label>
          <label>
            <input name='year' id='year' value={year} onChange={(e)=>setYear(e.target.value)} type="text" placeholder='Year of Commencement' className='editopinput2'/>
          </label>
          <label>
            <input name='country' id='country' value={country} onChange={(e)=>setCountry(e.target.value)} type="text" placeholder='Country/Region' className='editopinput1'/>
          </label>
          <label>
            <input name='zCode' id='zCode' value={zCode} onChange={(e)=>setZCode(e.target.value)} type="number" placeholder='ZIP Code' className='editopinput2'/>
          </label>
          <label>
            <input name='address' id='address' value={address} onChange={(e)=>setAdd(e.target.value)} type="text" placeholder='Full Address' className='editopinputfull'/>
          </label>
        </form>
        <button className='editopbuttons' onClick = {editop} >Confirm Changes</button>
        <button className='editopbuttons' onClick = {onClickHandler} >Change Password</button>
      </div>
    </div>
  );
}

export default EditOrgProfile;