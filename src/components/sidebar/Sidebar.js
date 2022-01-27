import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarMenu, SidebarWrapper } from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="intro" onClick={toggle}>Intro</SidebarLink>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
        {/* <SideBtnWrap>
          <SidebarRoute>
            //This part is not complete bc I dont need button for sign up
          </SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
