import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarMenu, SidebarWrapper } from "./SidebarElements";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="intro">Intro</SidebarLink>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="projects">Projects</SidebarLink>
          <SidebarLink to="contact">Contact</SidebarLink>
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
