import React, {useState} from 'react'
import Info from '../components/Info/Info'
import {Aboutus} from '../components/Info/Data'
import Navbar from '../components/Navbar/Navbar'

import Sidebar from '../components/SideBar/Sidebar'

function About() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
    console.log("Button is clicked");
    setIsOpen(!isOpen);
    }
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Info {...Aboutus}/>
        </div>
    )
}

export default About
