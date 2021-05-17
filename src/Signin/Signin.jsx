import React, {useState} from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SigninElements'
import {Link, useHistory } from "react-router-dom"

import {auth} from "../Firebase";


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
              <FormButton type='submit' onClick = {login}>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
