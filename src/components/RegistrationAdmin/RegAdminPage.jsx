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

export const FormButtonWrapper = styled.div`
  

  width: 100%;
  
  
  
`
export const FormButtonWrapper2 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
`


export const FormButton2 = styled.button`
background: #ff615d;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
width: 40%;
`

export const FormButton3 = styled.button`
background: #01bf71;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
width: 40%;

`


const RegAdminPage = () => {

  // const history = useHistory();
  const [registerlink, setRegisterlink] = useState("");
  const [available, setAvailable] = useState("");
  


  useEffect(() => {
    getState();
  }, [])


  useEffect(() => {
    if (available === "") {
      getState();
      return;
    }
    else if (available === "ON") {
      handleUploadEnrollON();
    } else {
      handleUploadEnrollOFF();
    }
  }, [available])

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

  const handleUploadEnrollON = () => {
    console.log("This is the link state before being pushed ",available)
    alert('Uploading Please Wait...')
    db.collection('Registeration').doc("Enrollment").update({

      "available": available

  }).then(() => {
    alert('Uploaded Successfully')
  })
  console.log("This is the link state after being pushed ",available)

  }

  const handleUploadEnrollOFF = () => {
    console.log("This is the link state before being pushed ",available)

    alert('Uploading Please Wait...')
    db.collection('Registeration').doc("Enrollment").update({

      "available": available

  }).then(() => {
    alert('Uploaded Successfully')
  })
  console.log("This is the link state after being pushed ",available)

  }
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'><img src={Logo} alt="" width="90" height="90"/> Data Analytics Club</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Create Event</FormH1>
              <br/>
              {available === 'OFF' ? <FormButton2 style={{width:"100%"}}>Link is {available}</FormButton2>:<FormButton3 style={{width:"100%"}}>Link is {available}</FormButton3>}
              <br/>

              <FormLabel htmlFor='text'>Registration Link</FormLabel>
                <FormInput htmlFor='text' value={registerlink} type="text" onChange = {event => setRegisterlink(event.target.value)}/>
              <FormButton type='submit' onClick = {handleUploadlink}>Upload</FormButton>
              <br/>

              <FormButtonWrapper>
                <FormButtonWrapper2>
                  <FormButton2 type='submit' value={available} onClick = {()=>{setAvailable("OFF")}}>Turn OFF</FormButton2>
                  <FormButton3 type='submit' value={available} onClick = {()=>{setAvailable("ON")}}>Turn ON</FormButton3>
                </FormButtonWrapper2>    
              </FormButtonWrapper>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default RegAdminPage














































