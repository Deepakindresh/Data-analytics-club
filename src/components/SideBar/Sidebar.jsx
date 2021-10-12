import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='/' onClick={toggle}>Home</SidebarLink>
          <SidebarLink to='/News' onClick={toggle}>News</SidebarLink>
          <SidebarLink to='/Blog' onClick={toggle}>Blogs</SidebarLink>
          <SidebarLink to='/Tasks' onClick={toggle}>Tasks</SidebarLink>
          <SidebarLink to='/OurProject' onClick={toggle}>Projects</SidebarLink>
          <SidebarLink to='/Teams' onClick={toggle}>Teams</SidebarLink>
          <SidebarLink to='/AboutUs' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='/Join' onClick={toggle}>Join</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign in</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar

