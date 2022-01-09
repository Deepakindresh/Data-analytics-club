import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/SideBar/Sidebar'
import { FaDiscord, FaWhatsapp} from 'react-icons/fa'
import { AiOutlineCalendar } from "react-icons/ai";
import { useState, useEffect } from 'react'
import {db} from '../../Firebase'
import { Link as LinkR } from 'react-router-dom'
import { useStateValue } from "../../StateProvider";
import "./Events.css"
import {SocialIconLink, SocialIcons, Discord, Whatsapp} from './EventElements'



export const EventsContainer = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    margin-top : 10rem;
    justify-content : space-around;
    justify-self : flex-start;
    min-height : 20%;
    
    @media (max-width: 1366px) {
        flex-direction : column;
        justify-content : center;
        align-items : center;
        justify-content : space-around;
        justify-self : center;
    }

    @media (max-width: 768px) {
        display : flex;
        flex-direction : column;
    }
`

export const EventLeft = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
    height : 10rem;

    @media (max-width: 1366px) {
        height : auto;
        flex-direction : row;
        justify-content : space-between;
        align-items : center;
    }
`

export const EventRight = styled.div`
    display : flex;
    flex-direction : column;
    padding-left : 2rem;

    @media (max-width: 1366px) {
        padding-left : 0rem;
    }
`

export const EventName = styled.div`
    font-size : 2rem;
    font-weight : bold;
    color : white;

    @media (max-width: 1366px) {
        font-size : 1.5rem;
    }
`
export const EventDate = styled.div`
    font-size : 0.8rem;
    color : white;

    @media (max-width: 1366px) {
        font-size : 1.5rem;
    }
`

export const EventPhoto = styled.img`
    width : 50rem;
    height : 60rem;

    @media (max-width: 1366px) {
        width : 30rem;
        height : 40rem;
    }

    @media (max-width: 640px) {
        width : 20rem;
        height : 30rem;
    }
`

export const EventRegisterButton = styled.button`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

    @media (max-width: 1366px) {
        display : none;
    }

    @media (max-width: 1024px) {
        display : none;

    }
`

export const EventRegisterButton1 = styled.button`

    display : none;
    @media (max-width: 1024px) {
        border-radius: 50px;
        background: #01bf71;
        white-space: nowrap;
        padding: 10px 22px;
        color: #010606;
        font-size: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        margin-top : 1rem;
        &:hover {
            transition: all 0.2s ease-in-out;
            background: #fff;
            color: #010606;
        }

    }
`

export const EventAddButton = styled(LinkR)`

    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    position: sticky;
    bottom:5%;
    left:95%;
    z-index:10;
    background: #01bf71;
    white-space: nowrap;
    color: #010606;
    font-size: 40px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

    @media (max-width: 1366px) {
        display : none;
    }

    @media (max-width: 1024px) {
        display : none;

    }
`

export const Timelinebackground = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
`


export const Timeline = styled.div`
    display : flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 30%;
    top: 15%;
    background: #010606;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
      }
`

export const TimelineOption = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    

    &:hover{

    text-decoration : none;
    color : white;
    border-bottom : 3px solid green;
    }

    &.active{
    border-bottom: 3px solid #01bf71
    text-decoration : none;
    }
`

const Events = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [upcomingevents, setUpcomingEvents] = useState([])
    const [events, setEvents] = useState([])
    const [completedevents, setCompletedEvents] = useState([])
    const [eventstate, setEventState] = useState("ongoing")
    const [{ role }, dispatch] = useStateValue();
    const current = new Date();

    const toggle = () =>{
    console.log("Button is clicked");
    setIsOpen(!isOpen);
    }

    useEffect(() => {

        getEvents()
        // console.log("events array inside useEffect()",events)
        console.log("Today's date is ", current)
    }, [])

    function getEvents() {
        
    
        db.collection('Events').get().then(doc => {
            console.log("These are the documents ",doc)
            const filteredEvents = events.splice()
            const availableEvents = events.splice()
            const ue = events.splice()
            doc.forEach((ref) => {
                // setEvents([...events,ref.data()])
                let d = ref.data().End_date.split("/")
                let b = ref.data().Start_date.split("/")
                if(parseInt(d[2]) < current.getFullYear()){ 
                    filteredEvents.push(ref.data())
                    
                }
                else if(parseInt(d[2]) === current.getFullYear() && parseInt(d[1]) < current.getMonth()+1){
                    filteredEvents.push(ref.data())
                   
                }
                else if (parseInt(d[2]) === current.getFullYear() && parseInt(d[1]) === current.getMonth()+1 && parseInt(d[0]) < current.getDate()){
                    filteredEvents.push(ref.data())
                   
                }

                else if (parseInt(b[2]) > current.getFullYear()){
                    ue.push(ref.data())
                   
                }

                else if (parseInt(b[2]) === current.getFullYear() && parseInt(b[1]) > current.getMonth()+1){

                    ue.push(ref.data())
                    
                    
                }

                else if (parseInt(b[2]) === current.getFullYear() && parseInt(b[1]) === current.getMonth()+1 && parseInt(b[0]) > current.getDate()){
                    ue.push(ref.data())
                    
                }

                else{
                    
                    availableEvents.push(ref.data())
                }
                // console.log(ref.id, '=>', ref.data());
              });
              setEvents(availableEvents)
              setCompletedEvents(filteredEvents)
              setUpcomingEvents(ue)
        });
        
        
    }


    return (
        <div className = "Events">
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Timelinebackground>
                <Timeline>
                    <TimelineOption style={eventstate === "upcoming" ? {color: "green"}:{}} onClick={() => setEventState("upcoming")}>Upcoming</TimelineOption>
                    <TimelineOption style={eventstate === "ongoing" ?{
                        borderLeft : "2px solid green", 
                        borderRight: "2px solid green",
                        color: "green"} : {
                            borderLeft : "2px solid green", 
                            borderRight: "2px solid green"}}
                            onClick={() => setEventState("ongoing")}>Ongoing</TimelineOption>
                    <TimelineOption style={eventstate === "completed" ? {color: "green"}:{}} onClick={() => setEventState("completed")}>Completed</TimelineOption>
                </Timeline>
            </Timelinebackground>
            
            {
                eventstate === "ongoing" ? events.map((eventIndex) => {

                    // console.log("This is event indices inside renderer ",eventIndex)
                    
                    return(
                        <EventsContainer>
                            <EventLeft>
                                <EventName>{eventIndex.Event_name}</EventName>
                                <EventDate><AiOutlineCalendar></AiOutlineCalendar> {eventIndex.Start_date} - {eventIndex.End_date}</EventDate>
                                <SocialIcons>
                                    {!eventIndex.Discord_link ? 
                                    <SocialIconLink href={eventIndex.Discord_link} target='_blank' arial-label='Discord'>
                                        <FaDiscord />
                                    </SocialIconLink>:
                                    <Discord href={eventIndex.Discord_link} target='_blank' arial-label='Discord'>
                                        <FaDiscord />
                                    </Discord>   
                                    }

                                    {!eventIndex.Whatsapp_link ? 
                                    <SocialIconLink href={eventIndex.Whatsapp_link} target='_blank' arial-label='Discord'>
                                        <FaWhatsapp />
                                    </SocialIconLink>:
                                    <Whatsapp href={eventIndex.Whatsapp_link} target='_blank' arial-label='Discord'>
                                        <FaWhatsapp />
                                    </Whatsapp>   
                                    }
                                </SocialIcons>
                               
                                <EventRegisterButton>Register Now</EventRegisterButton>
                            </EventLeft>

                            <EventRight>
                                <EventPhoto src = {eventIndex.Poster_link}/>
                                <EventRegisterButton1>Register Now</EventRegisterButton1>
                            </EventRight>
                
                        </EventsContainer>     
                    )}):  eventstate === "completed" ? completedevents.map((eventIndex) => {

                        // console.log("This is event indices inside renderer ",eventIndex)
                        
                        return(
                            <EventsContainer>
                                <EventLeft>
                                    <EventName>{eventIndex.Event_name}</EventName>
                                    <EventDate><AiOutlineCalendar></AiOutlineCalendar> {eventIndex.Start_date} - {eventIndex.End_date}</EventDate>
                                    <SocialIcons>
                                        {!eventIndex.Discord_link ? 
                                        <SocialIconLink href={eventIndex.Discord_link} target='_blank' arial-label='Discord'>
                                            <FaDiscord />
                                        </SocialIconLink>:
                                        <Discord href={eventIndex.Discord_link} target='_blank' arial-label='Discord'>
                                            <FaDiscord />
                                        </Discord>   
                                        }
    
                                        {!eventIndex.Whatsapp_link ? 
                                        <SocialIconLink href={eventIndex.Whatsapp_link} target='_blank' arial-label='Discord'>
                                            <FaWhatsapp />
                                        </SocialIconLink>:
                                        <Whatsapp href={eventIndex.Whatsapp_link} target='_blank' arial-label='Discord'>
                                            <FaWhatsapp />
                                        </Whatsapp>   
                                        }
                                    </SocialIcons>
                                   
                                    <EventRegisterButton>Register Now</EventRegisterButton>
                                </EventLeft>
    
                                <EventRight>
                                    <EventPhoto src = {eventIndex.Poster_link}/>
                                    <EventRegisterButton1>Register Now</EventRegisterButton1>
                                </EventRight>
                    
                            </EventsContainer>     
                        )}): upcomingevents.map((eventIndex) => {

                            // console.log("This is event indices inside renderer ",eventIndex)
                            
                            return(

                                
                                <EventsContainer>
                                    <EventLeft>
                                        <EventName>{eventIndex.Event_name}</EventName>
                                        <EventDate><AiOutlineCalendar></AiOutlineCalendar> {eventIndex.Start_date} - {eventIndex.End_date}</EventDate>
                                        <SocialIcons>
                                            {!eventIndex.Discord_link ? 
                                            <SocialIconLink href={eventIndex.Discord_link} target='_blank' arial-label='Discord'>
                                                <FaDiscord />
                                            </SocialIconLink>:
                                            <Discord href={eventIndex.Discord_link} target='_blank' arial-label='Discord'>
                                                <FaDiscord />
                                            </Discord>   
                                            }
        
                                            {!eventIndex.Whatsapp_link ? 
                                            <SocialIconLink href={eventIndex.Whatsapp_link} target='_blank' arial-label='Discord'>
                                                <FaWhatsapp />
                                            </SocialIconLink>:
                                            <Whatsapp href={eventIndex.Whatsapp_link} target='_blank' arial-label='Discord'>
                                                <FaWhatsapp />
                                            </Whatsapp>   
                                            }
                                        </SocialIcons>
                                       
                                        <EventRegisterButton>Register Now</EventRegisterButton>
                                    </EventLeft>
        
                                    <EventRight>
                                        <EventPhoto src = {eventIndex.Poster_link}/>
                                        <EventRegisterButton1>Register Now</EventRegisterButton1>
                                    </EventRight>
                        
                                </EventsContainer>  
                                         
                            )})
                                
            }
                {role === 'A'? <EventAddButton to="/Events/CreateEvent">+</EventAddButton> : <div/>}
                

            

        </div>
    )
}

export default Events