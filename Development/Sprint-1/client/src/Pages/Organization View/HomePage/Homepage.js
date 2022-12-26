import React, { useState, useEffect} from 'react'
// import {useNavigate} from 'react-router-dom';
// import React, { useState } from 'react'
import {useNavigate, useLocation} from 'react-router-dom';
import './HomePage.css'
import ProfileCards from './Card.js'
import axios from 'axios';

const HomePage = ()=>{
  
  const [allProfiles, setAllProfiles] = useState([])
  const [allFetched, setAllFetched] = useState(false)

  useEffect( () => {
    axios.get('http://localhost:8000/allInfProfiles', {withCredentials: true})
    .then(response => response.data)
    .then(data => {
      // console.log("Displaying fetched data")
      console.log(data[0])
      const temp = data.slice(0,5)
      const profiles = temp.map(profile => {
        return (
          <ProfileCards 
            name = {profile.name.first}
            email = {profile.email}
            niche = {profile.niche}
            rating = {profile.rating}
          />
        )
      })
      // console.log("Profiles", profiles[0])
      setAllProfiles(profiles)
    })
  }, [])


  // if (allProfiles.length != 0) {
  //   console.log("In all profiles")
  //   const cards = allProfiles.map(profile => {
  //     return (
  //       <ProfileCards />
  //     )
  //   })

  //   // console.log(cards)

  //   // setAllProfiles(cards)
  //   setAllFetched(true)
  // }
  
  const navigate = useNavigate()
  const location = useLocation()
  const topending = () => {
    navigate('/pendingapprovals', {state:{role:location.state.role,email:location.state.email,pwd:location.state.pwd}})
  }
  const toComplete = ()=>{
    navigate('/completedorders', {state:{role:location.state.role,email:location.state.email,pwd:location.state.pwd}})
  }
  // const email= location.state.email
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
        <button onClick={topending}>pending approvals</button>
        <button onClick={toComplete}>Completed Orders</button>
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