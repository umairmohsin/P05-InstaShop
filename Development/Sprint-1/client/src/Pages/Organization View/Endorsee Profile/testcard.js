import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './testcard.css'
import pic from '../../../images/profile.png';
import logo from '../../../images/logo.png';
import hanger from '../../../images/clothes.png';

const TestCard = ()=>{
  return (
    <div className='cardspace'>
        <div className="card">
            <div className='top'>
                <img className='watermark' src={logo}/>
            </div>
            <img className='pp' src={pic} />
            <h1 className='name'>Name</h1>
            <h1 className='age'>Male | 32 years</h1>
            <div className='heads'>
                <h3 className='writing'>Preferred Platform</h3>
                <h3 className='writing'>Preferred Industry</h3>
                <h3 className='writing'>Cost Per Post</h3>
                <h3 className='writing'>Orders Completed</h3>
                <h3 className='writing'>Average Rating</h3>
            </div>
            <div className='infos'>
                <h3 className='writing'>Instagram</h3>
                <h3 className='writing'>Technology</h3>
                <h3 className='writing'>Rs 25000</h3>
                <h3 className='writing'>21</h3>
                <h3 className='writing'>4.5/5</h3>
            </div>
        </div>

        <div className="card">
            <div className='top'>
                <img className='watermark' src={logo}/>
            </div>
            <img className='pp' src={pic} />
            <h1 className='name'>Name</h1>
            <h1 className='age'>Male | 32 years</h1>
            <div className='heads'>
                <h3 className='writing'>Preferred Platform</h3>
                <h3 className='writing'>Preferred Industry</h3>
                <h3 className='writing'>Cost Per Post</h3>
                <h3 className='writing'>Orders Completed</h3>
                <h3 className='writing'>Average Rating</h3>
            </div>
            <div className='infos'>
                <h3 className='writing'>Instagram</h3>
                <h3 className='writing'>Technology</h3>
                <h3 className='writing'>Rs 25000</h3>
                <h3 className='writing'>21</h3>
                <h3 className='writing'>4.5/5</h3>
            </div>
        </div>

        <div className="card">
            <div className='top'>
                <img className='watermark' src={logo}/>
            </div>
            <img className='pp' src={pic} />
            <h1 className='name'>Name</h1>
            <h1 className='age'>Male | 32 years</h1>
            <div className='heads'>
                <h3 className='writing'>Preferred Platform</h3>
                <h3 className='writing'>Preferred Industry</h3>
                <h3 className='writing'>Cost Per Post</h3>
                <h3 className='writing'>Orders Completed</h3>
                <h3 className='writing'>Average Rating</h3>
            </div>
            <div className='infos'>
                <h3 className='writing'>Instagram</h3>
                <h3 className='writing'>Technology</h3>
                <h3 className='writing'>Rs 25000</h3>
                <h3 className='writing'>21</h3>
                <h3 className='writing'>4.5/5</h3>
            </div>
        </div>

        <div className='card'>
            <h1 className=''>Preferred Platform</h1>
            <img src={hanger}/>
            <h1>Clothing</h1>
        </div>       

    </div>
    
  );
}

export default TestCard;