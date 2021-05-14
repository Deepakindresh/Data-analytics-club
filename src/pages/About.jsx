import React, {useState} from 'react'
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero'
import Info from '../components/Info/Info'
import { homeObjOne, homeObjTwo,Aboutus} from '../components/Info/Data';
import Navbar from '../components/Navbar/Navbar'
import Services from '../components/Services/Service';
import Sidebar from '../components/SideBar/Sidebar'

function About() {
    return (
        <div>
            <Navbar/>
            <Info {...Aboutus}/>
            <Footer/>
        </div>
    )
}

export default About
