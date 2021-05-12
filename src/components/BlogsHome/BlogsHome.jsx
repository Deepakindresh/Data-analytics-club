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

//   useEffect(() => {
//     axios.get('http://127.0.0.1:5000/?topic=%22dataanalytics%22')
//     .then(
//       res => {

//         console.log(res)

//         const n1 = {title : res.data[0][0], img : res.data[0][1], content : res.data[0][2]}
//         const n2 = {title : res.data[1][0], img : res.data[1][1], content : res.data[1][2]}
//         const n3 = {title : res.data[2][0], img : res.data[2][1], content : res.data[2][2]}

//         const newNews = news.splice()

//         newNews.push(n1)
//         newNews.push(n2)
//         newNews.push(n3)

//         // console.log(res.data[0][0]);
//         setNews(newNews)

//       }
//     )

//     console.log(news)
//   }, [])


  return (
    <BlogsContainer id='Blogs'>
      <BlogsH1>Blogs</BlogsH1>
      <BlogsWrapper>
        <BlogsCard>
          <BlogsIcon src = ''/>
          <BlogsH2>Title 1</BlogsH2>
          <Button >Learn More</Button>
        </BlogsCard>
        <BlogsCard>
        <BlogsIcon src=''/>
        <BlogsH2>Title 2</BlogsH2>
          <Button >Learn More</Button>
        </BlogsCard>
        <BlogsCard>
          <BlogsIcon src=''/>
          <BlogsH2>Title 3</BlogsH2>
          <Button >Learn More</Button>
        </BlogsCard>
      </BlogsWrapper>
    </BlogsContainer>
  )
}

export default Blogs
