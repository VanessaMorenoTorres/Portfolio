import React from "react";
// import About from "../about/About";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavLinks } from "./NavbarElements";
import {FaBars} from 'react-icons/fa'

const Navbar = ( ) => {
    return (
      <>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>VSunny</NavLogo>
            <MobileIcon>
              <FaBars/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to= "/">Intro</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to= "about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to= "projects">Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to= "contact">Contact</NavLinks>
              </NavItem>
            </NavMenu>
            {/* <NavBtn>
              <NavBtnLink to =
            </NavBtn> */}
          </NavbarContainer>
        </Nav>
      </>
    );
}
export default Navbar