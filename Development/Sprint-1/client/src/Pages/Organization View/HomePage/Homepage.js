import React, { useState, useEffect} from 'react'
// import {useNavigate} from 'react-router-dom';
// import React, { useState } from 'react'
import {useNavigate, useLocation} from 'react-router-dom';
import './HomePage.css'
import ProfileCards from './Card.js'
import axios from 'axios';

const HomePage = ()=>{
  
  const navigate = useNavigate()
  const location = useLocation()

  const [allProfiles, setAllProfiles] = useState([])
  
  console.log("Location is: ", location)

  let role = ""
  if (location.state !== null){
    role = location.state.role
  }
  
  
  useEffect( () => {
    if (role === "Client"){
      axios.get('http://localhost:8000/allInfProfiles', {withCredentials: true})
      .then(response => response.data)
      .then(data => {
        const temp = data.slice(0,5)
        const profiles = temp.map(profile => {
          return (
            <ProfileCards 
              name = {profile.name.first}
              niche = {profile.niche}
              rating = {profile.rating}
              clientEmail = {location.state.email}
              influencerEmail = {profile.email}
            />
          )
        })
        setAllProfiles(profiles)
      })
    }
    
  }, [])

  // console.log("Location.state: ", location.state)
  
  const jobOffers = () => {
    if(location.state.role === "Client"){
      navigate('/clientJobOffers', {state:{role:location.state.role,email:location.state.email,pwd:location.state.pwd}})

    }
    else if (location.state.role === "Influencer"){
      navigate('/influencerJobOffers', {state:{role:location.state.role,email:location.state.email,pwd:location.state.pwd}})
      
    }
  }

  const ongoingOrders = () => {
    if(location.state.role === "Client"){
      navigate('/clientOngoingOrders', {state:{role:location.state.role,email:location.state.email,pwd:location.state.pwd}})

    }
    else if (location.state.role === "Influencer"){
      navigate('/influencerOngoingOrders', {state:{role:location.state.role,email:location.state.email,pwd:location.state.pwd}})

    }
  }

  const rejectedOrders = () => {
    if(location.state.role === "Client"){
      navigate('/clientRejectedOrders', {state:{role:location.state.role,email:location.state.email,pwd:location.state.pwd}})

    }
    else if (location.state.role === "Influencer"){
      navigate('/influencerRejectedOrders', {state:{role:location.state.role,email:location.state.email,pwd:location.state.pwd}})

    }
  }

  const topending = () => {
    if(location.state.role === "Client"){
      navigate('/clientPendingapprovals', {state:{role:location.state.role,email:location.state.email,pwd:location.state.pwd}})
    }
    else if(location.state.role === "Influencer"){
      navigate('/influencerPendingApprovals', {state:{role:location.state.role,email:location.state.email,pwd:location.state.pwd}})
    }
  }
  const toComplete = ()=>{
    if(location.state.role === "Client"){
      navigate('/clientCompletedorders', {state:{role:location.state.role,email:location.state.email,pwd:location.state.pwd}})
    }
    else if(location.state.role === "Influencer"){
      navigate('/influencerCompletedOrders', {state:{role:location.state.role,email:location.state.email,pwd:location.state.pwd}})
    }
  }
  
  
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
        <div className='orderTabs'>
          <button onClick={jobOffers}>Job Offers</button>
          <button onClick={ongoingOrders}>Ongoing Orders</button>
          <button onClick={topending}>Pending approvals</button>
          <button onClick={toComplete}>Completed Orders</button>
          <button onClick={rejectedOrders}>Rejected Orders</button>
        </div>
      </div>

      {allProfiles && 
        <div className='Card'>
          {allProfiles}
        </div>
      }

      </div>
  );
}

export default HomePage;