import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';
import { NavLink, Link } from 'react-router-dom';
import Logo from './daclogo.png'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}><img src={Logo} alt="" width="90" height="90"/>  Data Analytics Club</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='/News'
              >News</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/JoinUs'
              >Join Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = '/Blog'
              
              >Blogs</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/AboutUs'
              
              >About Us</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to = '/Tasks'
              
              >Tasks</NavLinks>
            </NavItem>
            
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
