import React,{useState,useEffect} from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import {BlogsContainer, BlogsH1, BlogsWrapper, BlogsCard, BlogsIcon, BlogsH2, BlogsP} from './BlogsHomeElements'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { FaNewspaper } from 'react-icons/fa'
import {Button} from '../ButtonElements'

const Blogs = () => {


  const [news,setNews] = useState([])

  return (
    <BlogsContainer id='Blogs'>
      <BlogsH1>Blogs</BlogsH1>
      <BlogsWrapper>
        <BlogsCard>
          <BlogsIcon src = 'https://source.unsplash.com/random'/>
          <BlogsH2>Title 1</BlogsH2>
          <BlogsH2>Description</BlogsH2>
          <Button >Learn More</Button>
        </BlogsCard>
        <BlogsCard>
        <BlogsIcon src='https://source.unsplash.com/random'/>
        <BlogsH2>Title 2</BlogsH2>
        <BlogsH2>Description</BlogsH2>
          <Button >Learn More</Button>
        </BlogsCard>
        <BlogsCard>
          <BlogsIcon src='https://source.unsplash.com/random'/>
          <BlogsH2>Title 3</BlogsH2>
          <BlogsH2>Description</BlogsH2>
          <Button >Learn More</Button>
        </BlogsCard>
      </BlogsWrapper>
    </BlogsContainer>
  )
}

export default Blogs
