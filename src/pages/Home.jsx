import React, {useState} from 'react'
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero'
import Info from '../components/Info/Info'
import { homeObjOne, homeObjTwo, About} from '../components/Info/Data';
import Navbar from '../components/Navbar/Navbar'
import Services from '../components/News/News';
import Sidebar from '../components/SideBar/Sidebar'
import BlogsHome from '../components/BlogsHome/BlogsHome'

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
      <Services />
      <Info {...homeObjOne}/>
      <BlogsHome/>
      <Info {...About}/>
      <Footer />
    </>
  )
}

export default Home
