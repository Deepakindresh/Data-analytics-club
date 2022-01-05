import React, {useState} from 'react'
import Hero from '../components/Hero/Hero'
import Info from '../components/Info/Info'
import { Join, About} from '../components/Info/Data';
import Navbar from '../components/Navbar/Navbar'

import Sidebar from '../components/SideBar/Sidebar'
import BlogsHome from '../components/BlogsHome/BlogsHome'
import News from '../components/News/News';

const Home = () => {
  
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    console.log("Button is clicked");
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <News />
      <Info {...Join}/>
      <BlogsHome/>
      <Info {...About}/>
    </>
  )
}

export default Home
