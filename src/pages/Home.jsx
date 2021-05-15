import React, {useState} from 'react'
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero'
import Info from '../components/Info/Info'
import { homeObjOne, homeObjTwo, About} from '../components/Info/Data';
import Navbar from '../components/Navbar/Navbar'

import Sidebar from '../components/SideBar/Sidebar'
import BlogsHome from '../components/BlogsHome/BlogsHome'
import News from '../components/News/News';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <News />
      <Info {...homeObjOne}/>
      <BlogsHome/>
      <Info {...About}/>
      <Footer />
    </>
  )
}

export default Home
