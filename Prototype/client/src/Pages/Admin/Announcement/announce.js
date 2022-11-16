import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './announce.css'
import axios from 'axios'
const Announce = ()=>{

  const navigate = useNavigate()
    const [Title, setTitle] = useState("")
    const [Recepient, setRecepient] = useState("")
    const [Body, setBody] = useState("")

    const announcement = async (e) =>{
      e.preventDefault()
      const announcements = {announcements:{Title:Title,Recepient:Recepient,Body:Body}}
      // setAllentry([...allEntry, newEntry])
      // console.log(allEntry)
      console.log(announcements)
      await axios.post('http://localhost:8000/getAnnouncements', announcements, {withCredentials: true}).then(navigate('/')).catch(err=>console.log(err))
      
  }

  return (
    <div className="announce">
      <div className='announcearea'>
        <p className='announcemsg'>REVIEW BEFORE SENDING</p>
        <h1 className='announcetitle'>New Announcement</h1>
        <form>
          <label>
            <input type="text" placeholder='Title' onChange={(e)=>setTitle(e.target.value)}className='announceinput1'/>
          </label>
          <input type="text" placeholder='Recipients'onChange={(e)=>setRecepient(e.target.value)} className='announceinputmid'/>
          <label>
            <textarea type="text" placeholder='Content' onChange={(e)=>setBody(e.target.value)}className='announceinput2'></textarea>
          </label>
        </form>
        <button className='announcebuttons' onClick={announcement}>Send Announcement</button>
      </div>
    </div>
  );
}

export default Announce;