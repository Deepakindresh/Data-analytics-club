import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/SideBar/Sidebar'
import { useState, useEffect } from 'react'
import {storage,db} from '../../Firebase'
import "./Events.css"




export const EventsContainer = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    margin-top : 10rem;
    justify-content : space-around;
    justify-self : flex-start;
    
`

export const EventLeft = styled.div`
    display : flex;
    flex-direction : column;
    padding-right : 2rem;
    justify-content : space-between;
    align-items : stretch;
    height : 10rem;
`

export const EventRight = styled.div`
    display : flex;
    flex-direction : column;
    padding-left : 2rem;
`

export const EventName = styled.div`
    font-size : 2rem;
    font-weight : bold;
    color : white;
`

export const EventPhoto = styled.img`
    width : 50rem;
    height : 60rem;
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
`

const Events = () => {
    const [isOpen, setIsOpen] = useState(false)
    

    const toggle = () =>{
    console.log("Button is clicked");
    setIsOpen(!isOpen);
    }



  function getEvents() {
        
    
        db.collection('Events').get().then(doc => {

            doc.forEach((ref) => {
                // setEvents([...events,ref.data()])
                var imagePath = 'Event_Posters/'.concat(ref.data().Image_name)
                storage.ref(imagePath).getDownloadURL().then((url) => {   
                    // filteredEvents.push([ref.data(),url]);   
                    console.log("this is inside storage ",[ref.data(),url])
                    return(
                        <div>
                            <EventsContainer>
                                <EventLeft>
                                    <EventName>{ref.data().Event_name}</EventName>
                                    <EventRegisterButton>Register Now</EventRegisterButton>
                                </EventLeft>

                                <EventRight>
                                    <EventPhoto src = {url}/>
                                </EventRight>
                    
                            </EventsContainer>
                        </div>
                             
                    )
                })     
                })
            
            });


        
        
    }


    function summa(){
        return (
            <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, eum quisquam? Obcaecati, optio voluptatem corrupti nemo alias minima sed magnam odit ea, impedit fuga eum illum id aspernatur, molestias autem.
            </h1>
        )
    }

    
    

    return (
        <div className = "Events">
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>

           {
               getEvents()
           }
            
        </div>
    )
}

export default Events