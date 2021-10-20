import React, {useState} from 'react'
import Info from '../components/Info/Info'
import {Task} from '../components/Info/Data';
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/SideBar/Sidebar'

import TaskCard from '../components/Taskcard/Taskcard'
import Jupyternb from '../components/Jupyternb/Jupyternb';
import './Tasks.css'


function Tasks() {

    const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    console.log("Button is clicked");
    setIsOpen(!isOpen);
  }

    return (
        <div className="Main">
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <div className = "Tasks">

                <div className = 'TasksBody'>
                    <Info {...Task}/>
                </div>
            </div>

            <div style={{backgroundColor:"lightgray"}}>
            <TaskCard/>
            </div>

            <div style={{backgroundColor:"#010606"}}>
            <Jupyternb/>
            </div>
            

        </div>
    )
}

export default Tasks
