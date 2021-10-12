import React,{useState,useEffect} from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import {NewsContainer, NewsH1, NewsWrapper, NewsCard, NewsIcon, NewsH2, NewsP, NewsHeading} from '../News/NewsElements'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { FaNewspaper } from 'react-icons/fa'
import {Button} from '../ButtonElements'

const Blogs = () => {


  const [news,setNews] = useState([])

  return (
    <NewsContainer id='Blogs'>
      <NewsHeading>Blogs</NewsHeading>
      <NewsWrapper>
        <NewsCard>
          <NewsIcon src= 'https://source.unsplash.com/random'/>
          <NewsH2>Title 1</NewsH2>
          {/* <NewsButton onClick = {e => clickHandler1(e)}>Learn More</NewsButton> */}
        </NewsCard>
        <NewsCard>
        <NewsIcon src= 'https://source.unsplash.com/random'/>
        <NewsH2>Ttile 2</NewsH2>
          {/* <NewsButton onClick = {e => clickHandler2(e)}>Learn More</NewsButton> */}
        </NewsCard>
        <NewsCard>
          <NewsIcon src='https://source.unsplash.com/random'/>
          <NewsH2>Title 3 ddddddddddddd dddddddddd dd</NewsH2>
          {/* <NewsButton onClick = {e => clickHandler3(e)}>Learn More</NewsButton> */}
        </NewsCard>
      </NewsWrapper>
      
    </NewsContainer>
  )
}

export default Blogs
