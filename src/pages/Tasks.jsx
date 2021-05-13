import React, {useState} from 'react'
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero'
import Info from '../components/Info/Info'
import { Task} from '../components/Info/Data';
import Navbar from '../components/Navbar/Navbar'
import Services from '../components/Services/Service';
import Sidebar from '../components/SideBar/Sidebar'

import TaskCard from '../components/Taskcard/Taskcard'


function Tasks() {
    return (
        <div>
            <div style={{backgroundColor: "black"}}>
            <Navbar/>
            <div style={{marginTop:"100px"}}>
            <Info {...Task}/>
            </div>
            </div>

            <div style={{backgroundColor:"lightgray"}}>
            <TaskCard/>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Tasks
