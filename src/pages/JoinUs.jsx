import React, {useState, useEffect} from 'react'
import Info from '../components/Info/Info'
import {Joinus} from '../components/Info/Data'

import {JoinusMember} from '../components/Info/Data'
import Navbar from '../components/Navbar/Navbar'
import { useStateValue } from "../StateProvider";
import Sidebar from '../components/SideBar/Sidebar'
import abt from "../images/aboutus.svg" 
import {db} from '../Firebase'



function Join() {
    const [isOpen, setIsOpen] = useState(false)
    const [{ role }, dispatch] = useStateValue();
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
          setRegisterlink(doc.data().link);
          console.log("This is the available data inside get state",doc.data().link)
          
        }
      })
    }

    const toggle = () =>{
    console.log("Button is clicked");
    setIsOpen(!isOpen);
    }

    const JoinusAvailable = {
        id: 'Joinus',
        lightBg: false,
        lightText: true,
        lighttextDesc: true,
        topLine: 'Data Analytics Club',
        headline: 'Join Us',
        description: "Provide the details in the link below to join the club.",
        buttonLabel: 'Join Us',
        imgStart: false,
        img: abt,
        alt: 'join us',
        dark: true,
        primary: true,
        darkText: false,
        link: null,
        link2: registerlink
      };
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            {role === "U" ? 
            available === "OFF" ? <Info {...Joinus}/> : <Info {...JoinusAvailable}/>
            : <Info {...JoinusMember}/>}
            

        </div>
    )
}

export default Join