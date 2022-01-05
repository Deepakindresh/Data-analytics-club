import React, {useState, useEffect} from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel} from './RegElements'
import { useHistory } from "react-router-dom"
import styled from 'styled-components';
import Logo from '../../images/daclogo.png';

import {db} from '../../Firebase'

export const FormButton = styled.button`
background: #01bf71;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
`

export const FormButton2 = styled.button`
background: #ff615d;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
`

export const FormButton3 = styled.button`
background: #01bf71;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
`


const RegAdminPage = () => {

  // const history = useHistory();
  const [registerlink, setRegisterlink] = useState("");
  const [available, setAvailable] = useState("");


  useEffect(() => {
    getState();
  }, [])

  function getState() {
    db.collection('Registeration').doc("Enrollment").get().then(doc => {
      if(doc.exists){
        setAvailable(doc.data().available);
        console.log("This is the available data inside get state",doc.data().available)
      }
    })
  }
 

  const handleUploadlink = () => {
    alert('Uploading Please Wait...')
    console.log("This is the link ",registerlink)
    db.collection('Registeration').doc("Enrollment").update({

      "link": registerlink

  }).then(() => {
    alert('Uploaded Successfully')
  })
  }

  const handleUploadEnroll = () => {
    if(available === "ON"){
      setAvailable("OFF");
    }
    else{
      setAvailable("ON");
    }
    alert('Uploading Please Wait...')
    db.collection('Registeration').doc("Enrollment").update({

      "available": available

  }).then(() => {
    alert('Uploaded Successfully')
  })
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'><img src={Logo} alt="" width="90" height="90"/> Data Analytics Club</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Create Event</FormH1>
              <FormLabel htmlFor='text'>Registration Link</FormLabel>
                <FormInput htmlFor='text' required value={registerlink} type="text" onChange = {event => setRegisterlink(event.target.value)}/>
              <FormButton type='submit' onClick = {handleUploadlink}>Upload</FormButton>
              <br/>
              {available == 'OFF' ? <FormButton2 type='submit' onClick = {handleUploadEnroll}>Turn {available}</FormButton2>:<FormButton3 type='submit' onClick = {handleUploadEnroll}>Turn {available}</FormButton3>}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default RegAdminPage














































