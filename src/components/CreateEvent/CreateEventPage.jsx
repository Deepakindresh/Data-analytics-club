import React, {useState} from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton} from './CreateEventElements'
import { useHistory } from "react-router-dom"




import Logo from '../../images/daclogo.png';


import {db} from '../../Firebase'

const CreateEvent = () => {

  const history = useHistory();
  const [eventname,setEventname] = useState();
  const [imagelink,setImagelink] = useState(null);
  const [discord, setDiscord] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [registerlink, setRegisterlink] = useState("");
  
 

  const handleUpload = () => {
    alert('Uploading Please Wait...')
    db.collection('Events').doc(eventname).set({
      Event_name : eventname,
      Start_date: startdate,
      End_date: enddate,
      Poster_link: imagelink,
      Registration_link: registerlink,
      Discord_link: discord,
      Whatsapp_link: whatsapp
  }).then(() => {
    alert('Uploaded Successfully')
  }).then(history.push("/Events"))
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'><img src={Logo} alt="" width="90" height="90"/> Data Analytics Club</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Create Event</FormH1>
              <FormLabel htmlFor='text'>Name of the Event</FormLabel>
                <FormInput htmlFor='text' required value={eventname} type="text" onChange = {event => setEventname(event.target.value)}/>
              <FormLabel htmlFor='text'>Registration Link</FormLabel>
                <FormInput htmlFor='text' required value={registerlink} type="text" onChange = {event => setRegisterlink(event.target.value)}/>
              <FormLabel htmlFor='text'>Discord Link</FormLabel>
                <FormInput htmlFor='text' value={discord} type="text" onChange = {event => setDiscord(event.target.value)}/>
              <FormLabel htmlFor='text'>Whatsapp Link</FormLabel>
                <FormInput htmlFor='text' value={whatsapp} type="text" onChange = {event => setWhatsapp(event.target.value)}/>
                <FormLabel htmlFor='text'>Start Date (dd/mm/yyyy)</FormLabel>
                <FormInput htmlFor='text' value={startdate} type="text" onChange = {event => setStartdate(event.target.value)}/>
                <FormLabel htmlFor='text'>End Date (dd/mm/yyyy)</FormLabel>
                <FormInput htmlFor='text' value={enddate} type="text" onChange = {event => setEnddate(event.target.value)}/>
              <FormLabel htmlFor='text'>Poster Image Link</FormLabel>
              <FormInput htmlFor='text' value={imagelink} type="text" onChange = {event => setImagelink(event.target.value)}/>
              <FormButton type='submit' onClick = {handleUpload}>Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default CreateEvent
