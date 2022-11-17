import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './HomePage.css'

const HomePage = ()=>{
  return (
    <div className="homepage">
      <div className='homepagearea'>
        <p className='homepagemsg'>MAKE SURE YOU ENTER THE EXACT NAME</p>
        <h1 className='homepagetitle'>Find An Endorsee</h1>
        <form>
          <label>
            <input type="text" placeholder="Enter Endorsee's Name" className='homepageinput1'/>
          </label>
        </form>
        <button className='homepagebuttons' type='submit'>Search</button>
      </div>
    </div>
  );
}

export default HomePage;