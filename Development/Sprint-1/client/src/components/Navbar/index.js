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
            <NavLink to='/home' activeStyle>
              <img src={logo} />
            </NavLink>
            <NavLink to='/home' activeStyle>
              Home
            </NavLink>
            <NavLink to='/announce' activeStyle>
              Send Announcement
            </NavLink>
            <NavLink to='/access' activeStyle>
              Restrict/Remove Access
            </NavLink>
            <NavLink to='/adminprofile' activeStyle>
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
            <NavLink to='/clienthome' activeStyle>
              <img src={logo} />
            </NavLink>
            <form className='searchform'>
              <input className='searchinput' name='search' id='search' type="text" placeholder='Search for an influencer'/>
            </form>
            <NavLink to='/clienthome' activeStyle>
              Home
            </NavLink>
            <NavLink to='/clientorders' activeStyle>
              Orders
            </NavLink>
            <NavLink to='/clientannounce' activeStyle>
              Announcements
            </NavLink>
            <NavLink to='/clientprofile' activeStyle>
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
            <NavLink to='/influencerhome' activeStyle>
              <img src={logo} />
            </NavLink>
            <NavLink to='/influencerhome' activeStyle>
              Home
            </NavLink>
            <NavLink to='/influencerorders' activeStyle>
              Orders
            </NavLink>
            <NavLink to='/influencerannounce' activeStyle>
              Announcement
            </NavLink>
            <NavLink to='/influencerprofile' activeStyle>
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
            <NavLink to='/home' activeStyle>
              <img src={logo} />
            </NavLink>
          </NavMenu>
        </Nav>
    );
  }

};
  
export default Navbar;