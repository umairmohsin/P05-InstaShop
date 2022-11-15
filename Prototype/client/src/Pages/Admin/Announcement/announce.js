import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './announce.css'

const Announce = ()=>{
  return (
    <div className="announce">
      <div className='announcearea'>
        <p className='announcemsg'>REVIEW BEFORE SENDING</p>
        <h1 className='announcetitle'>New Announcement</h1>
        <form>
          <label>
            <input type="text" placeholder='Title' className='announceinput1'/>
          </label>
          <select className='announceinputmid'> 
            <option value="" disabled selected>Recipients</option>     
            <option value="endorse">Endorsees</option>
            <option value="org">Organizations</option>
            <option value="both">Both</option>
            </select>
          <label>
            <textarea type="text" placeholder='Content' className='announceinput2'></textarea>
          </label>
        </form>
        <button className='announcebuttons' type='submit'>Send Announcement</button>
      </div>
    </div>
  );
}

export default Announce;