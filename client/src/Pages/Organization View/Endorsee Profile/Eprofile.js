import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './Eprofile.css'
import pic from '../../../images/profile.png';
import hanger from '../../../images/clothes.png'

const Eprofile = ()=>{
  return (
    <div className="announce">

      <div className='picarea'>
        <img className='profilepic' src={pic} />
      </div>

      <div className='writearea'>
        <h1 className='profilename'>Name Here</h1>
        <p className='profiledesc'>Sample Description: Experienced social media influencer with 121,000 followers and a bachelor's degree in marketing in digital media. Over six years of experience in content creation with extensive knowledge of trend optimization and user engagement.</p>
      </div>

      <div className='optionarea'>
        <button className='eprofilebutton1'>View Social Media</button>
        <button className='eprofilebuttons'>Start Conversation</button>
        <button className='eprofilebuttons'>Send Contract</button>
        <button className='eprofilebuttons'>Add to Favorites</button>
      </div>

      <div className='infoarea'>
        ds
      </div>
    </div>
  );
}

export default Eprofile;