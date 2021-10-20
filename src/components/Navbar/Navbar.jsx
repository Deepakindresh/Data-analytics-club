import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink, NavProfile, NavPhoto, NavName, NavRight, NavUser, Select} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';
import Logo from './daclogo.png'
import { useStateValue } from "../../StateProvider";
import { auth,firebase } from "../../Firebase";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
    else{
      var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log("User is ",user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(error)
    // ...
  });
    }
  }


  const [{ user }, dispatch] = useStateValue();

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
          <MobileIcon onClick = {toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='/News'
              >News</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to = '/Blog'
              
              >Blogs</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to = '/Events'
              
              >Events</NavLinks>
            </NavItem>


            <NavItem>
              <NavLinks to = '/OurProject'
              
              >Projects</NavLinks>
            </NavItem>


            <NavItem>
              <NavLinks to = '/Teams'
              
              >Teams</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='/AboutUs'
              
              >About</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='/JoinUs'
              >Join</NavLinks>
            </NavItem>
            
          </NavMenu>

          

        <NavRight>

          {!user ? <NavBtn>
              <NavBtnLink  onClick={handleAuthenticaton}>{!user? 'Sign In' : 'Sign Out'}</NavBtnLink>
            </NavBtn> : 
            <NavProfile>
              <NavUser>
                <NavPhoto href = '/Profile' src = {user.photoURL}></NavPhoto>
                <NavName to = '/Profile'>{user.displayName}</NavName>
              </NavUser>

              <NavBtn>
                <NavBtnLink  onClick={handleAuthenticaton}>{!user? 'Sign In' : 'Sign Out'}</NavBtnLink>
              </NavBtn>
              
            </NavProfile>
            }

        </NavRight>
      </NavbarContainer>
        
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
