import React from 'react';
import './navbar.css'
import logo from '../../images/logo.png'
import Cookies from 'js-cookie'
import jwt_decoded from 'jwt-decode'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  var decoded = jwt_decoded('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJpbGFsLnNoYWhpZEBnbWFpbC5jb218QWRtaW4iLCJpYXQiOjE2NzIwOTM4MTgsImV4cCI6MTY3MjA5NTYxOH0.Tm9LcJzkVh0wuYhI2xac1zyAbqP5GzfsJ3ay5NTx8So')
  console.log(Cookies.get('jwt'))
  console.log(decoded)
  if(decoded.id.slice(-5) == "Admin") {
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
            <NavBtnLink to='/login'>Sign Out</NavBtnLink>
          </NavBtn>
        </Nav>
    );
  }
  
  else if(decoded.id.slice(-6) == "Client") {
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
            <NavBtnLink to='/login'>Sign Out</NavBtnLink>
          </NavBtn>
        </Nav>
    );
  }

  else if(decoded.id.slice(-10) == "Influencer") {
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
            <NavBtnLink to='/login'>Sign Out</NavBtnLink>
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