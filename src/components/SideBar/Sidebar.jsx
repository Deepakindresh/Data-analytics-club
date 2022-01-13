import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarLink2, SidebarRoute, SideBtnWrap } from './SidebarElements'
import { useStateValue } from "../../StateProvider";
import { auth,firebase } from "../../Firebase";

const Sidebar = ({isOpen,toggle}) => {
  const handleAuthenticaton = (e) => {
    e.preventDefault();
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
          <SidebarLink to='/Events' onClick={toggle}>Events</SidebarLink>
          <SidebarLink to='/OurProject' onClick={toggle}>Projects</SidebarLink>
          <SidebarLink to='/AboutUs' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='/JoinUs' onClick={toggle}>Join</SidebarLink>
          {!user ? <SidebarLink2 onClick={(e) => handleAuthenticaton(e)}>Sign In</SidebarLink2> :
          <SidebarLink2 onClick={(e) => handleAuthenticaton(e)}>Sign Out</SidebarLink2>}
        </SidebarMenu>
        {/* <SideBtnWrap onclick = {(e) => handleAuthenticaton(e)}>
          {!user ? <SidebarRoute>Sign in</SidebarRoute> : 
          <SidebarRoute>Sign out</SidebarRoute>}
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar