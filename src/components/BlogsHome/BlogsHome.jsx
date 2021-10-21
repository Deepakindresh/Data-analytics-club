import React,{useState,useEffect} from 'react'

import {NewsContainer, NewsWrapper, NewsCard, NewsIcon, NewsH2, NewsHeading} from '../News/NewsElements'
import axios from 'axios'


const Blogs = () => {


  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get('https://dac-api.herokuapp.com/blogs').then(
      res => {
        
        const newBlogs = blogs.splice()

        for(var i=0;i<res.data.length;i++)
        {
          newBlogs.push({title : res.data[i].title, img : res.data[i].img, readTime : res.data[i].readtime, blogNo: i, link : res.data[i].link})
        }

        setBlogs(newBlogs)
        
      }
    )
    console.log("From medium",blogs)
  },[])

  const clickHandler1 = (link) => {
    window.open(link)
  }

  return (
    <NewsContainer id='Blogs'>
      <NewsHeading>Blogs</NewsHeading>

      {blogs.length ? <NewsWrapper>
        {blogs.map((blog) => (<NewsCard onClick = {e => clickHandler1(blog.link)}>
          <NewsIcon src={blog.img}/>
          <NewsH2>{blog.title}</NewsH2>
          {/* <NewsButton onClick = {e => clickHandler1(e)}>Learn More</NewsButton> */}
        </NewsCard>))}
        
      </NewsWrapper>
      : <div>The page is loading, please wait...</div>}
      
    </NewsContainer>
  )
}

export default Blogs
