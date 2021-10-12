import React, {useState} from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SigninElements'
import {Link, useHistory } from "react-router-dom"

import {auth,firebase} from "../Firebase";


import Logo from '../images/daclogo.png';


const SignIn = () => {

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //logged in, redirect
            history.push("/");
        })
        .catch((e) => alert(e.message));    
  }

  const googleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    console.log("Credential ,",credential)
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    console.log("The token is ",token )
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

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'><img src={Logo} alt="" width="90" height="90"/> Data Analytics Club</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required value={email} type="email" onChange = {event => setEmail(event.target.value)}/>
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required value={password}
                    onChange = {event => setPassword(event.target.value)}
                    type="password"/>
              <FormButton type='submit' onClick = {googleLogin}>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
