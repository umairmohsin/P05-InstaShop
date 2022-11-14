import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './announce.css'
import axios from 'axios'


const Announce = ()=>{
  const navigate = useNavigate()
  const [title, settitle] = useState("")
  const [receipient, setreceipient] = useState("")
  const [content, setcontent] = useState("")
  // const [allEntry,setAllentry] = useState([])
  const announcedata = async (e)=>{
    e.preventDefault()
    const newEntry = {
      title: title,
      receipient: receipient,
      content: content
    }
    // setAllentry([...allEntry, newEntry])
    console.log(newEntry)
    console.log("hello")
    const s = await axios.post('http://localhost:8000/admin/createAnnouncement', newEntry).then(navigate('/login')).catch(err=>console.log(err))
  }
  
  return (
    <>
      <div className="announce">
        <div className='announcearea'>
          <p className='announcemsg'>REVIEW BEFORE SENDING</p>
          <h1 className='announcetitle'>New Announcement</h1>
          <form onSubmit={announcedata}>
            <label>
              <input type="text" placeholder='Title' className='announceinput1' value={title} onChange={(e) => settitle(e.target.value)}/>
            </label>
            <select className='announceinputmid' value={receipient} onChange={(e)=> setreceipient(e.target.value)}> 
              <option value="" disabled selected>Recipients</option>     
              <option value="endorse">Endorsees</option>
              <option value="org">Organizations</option>
              <option value="both">Both</option>
            </select>
            <label>
              <textarea type="text" placeholder='Content' className='announceinput2' onChange={(e)=> setcontent(e.target.value)} ></textarea>
            </label>
          </form>
          <button onClick={announcedata} className='announcebuttons' type='submit'>Send Announcement</button>
        </div>
      </div>
    </>
    
  );
}

export default Announce;