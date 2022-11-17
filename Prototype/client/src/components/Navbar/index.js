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
};
  
export default Navbar;