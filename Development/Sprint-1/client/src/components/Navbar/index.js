import {useNavigate, useLocation} from 'react-router-dom';
import React from 'react';
import './navbar.css'
import logo from '../../images/logo.png'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBtnLink2,
} from './NavbarElements';
  
const Navbar = () => {
  if(localStorage.getItem("role") == "Admin") {
    return (
      <>
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
      </>
    );
  }
  
  else if(localStorage.getItem("role") == "Client") {
    return (
      <>
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
      </>
    );
  }

  if(localStorage.getItem("role") == "Influencer") {
    return (
      <>
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
      </>
    );
  }

  if(!localStorage.getItem("role")) {
    return (
      <>
        <Nav>
          <Bars />
          <NavMenu>
            <NavLink to='/home' activeStyle>
              <img src={logo} />
            </NavLink>
          </NavMenu>
        </Nav>
      </>
    );
  }

};
  
export default Navbar;