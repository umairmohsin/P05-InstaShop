import React from 'react';
import logo from '../../images/logo.png'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
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
          <NavLink to='/profile' activeStyle>
            Profile
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;