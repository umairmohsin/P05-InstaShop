import {useNavigate, useLocation} from 'react-router-dom';
import React from 'react';
import './navbar.css'
import logo from '../../images/logo.png'
import Cookies from 'js-cookie'
import jwt_decoded from 'jwt-decode'
import axios from 'axios';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  const location = useLocation()
  let role = " "
  if (location.state !== null){
    role = location.state.role
  }
  
  const navigate = useNavigate()

  const logout = async () => {
    await axios.get('http://localhost:8000/logout', {withCredentials: true})
    navigate('/')  
  }
  
  if(role && role == "Admin") {
    return (
        <Nav>
          <Bars />
          <NavMenu>
            <NavLink to='/home' activestyle="true">
              <img src={logo} />
            </NavLink>
            <NavLink to='/home' activestyle="true">
              Home
            </NavLink>
            <NavLink to='/announce' activestyle="true">
              Send Announcement
            </NavLink>
            <NavLink to='/access' activestyle="true">
              Restrict/Remove Access
            </NavLink>
            <NavLink to='/adminprofile' activestyle="true">
              Profile
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={logout}>Sign Out</NavBtnLink>
          </NavBtn>
        </Nav>
    );
  }
  
  else if(role && role == "Client") {
    return (
        <Nav>
          <Bars />
          <NavMenu>
            <NavLink to='/home' activestyle="true">
              <img src={logo} />
            </NavLink>
            <form className='searchform'>
              <input className='searchinput' name='search' id='search' type="text" placeholder='Search for an influencer'/>
            </form>
            <NavLink to='/home' activestyle="true">
              Home
            </NavLink>
            <NavLink to='/clientorders' activestyle="true">
              Orders
            </NavLink>
            <NavLink to='/clientannounce' activestyle="true">
              Announcements
            </NavLink>
            <NavLink to='/clientprofile' activestyle="true">
              Profile
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={logout}>Sign Out</NavBtnLink>
          </NavBtn>
        </Nav>
    );
  }

  else if(role && role == "Influencer") {
    return (
        <Nav>
          <Bars />
          <NavMenu>
            <NavLink to='/home' activestyle="true">
              <img src={logo} />
            </NavLink>
            <NavLink to='/home' activestyle="true">
              Home
            </NavLink>
            <NavLink to='/influencerorders' activestyle="true">
              Orders
            </NavLink>
            <NavLink to='/influencerannounce' activestyle="true">
              Announcement
            </NavLink>
            <NavLink to='/influencerprofile' activestyle="true">
              Profile
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={logout}>Sign Out</NavBtnLink>
          </NavBtn>
        </Nav>
    );
  }

  else{
    return (
        <Nav>
          <Bars />
          <NavMenu>
            <NavLink to='/home' activestyle="true">
              <img src={logo} />
            </NavLink>
          </NavMenu>
        </Nav>
    );
  }

};
  
export default Navbar;