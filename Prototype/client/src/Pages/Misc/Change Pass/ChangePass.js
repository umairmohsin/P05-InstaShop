import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './ChangePass.css'

const ChangePass = ()=>{
  return (
    <div className="changepass">
      <div className='changepassarea'>
        <p className='changepassmsg'>MAKE SURE YOUR NEW PASSWORD IS STRONG</p>
        <h1 className='changepasstitle'>Change Password</h1>
        <form>
          <label>
            <input type="text" placeholder='Enter Current Password' className='changepassinput1'/>
          </label>
          <label>
            <input type="text" placeholder='Enter New Password' className='changepassinputmid'/>
          </label>
          <label>
            <input type="text" placeholder='Confirm New Password' className='changepassinput2'/>
          </label>
        </form>
        <button className='changepassbuttons' type='submit'>Change Password</button>
      </div>
    </div>
  );
}

export default ChangePass;