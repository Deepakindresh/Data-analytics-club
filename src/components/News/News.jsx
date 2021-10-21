import React,{useState,useEffect} from 'react'
import {NewsContainer, NewsWrapper, NewsCard, NewsIcon, NewsH2, NewsHeading} from './NewsElements'
import axios from 'axios'


const News = () => {


  const [news,setNews] = useState([])

  useEffect(() => {
    axios.get('https://dac-api.herokuapp.com/news?topic=%22datascience%22')
    .then(
      res => {

        console.log(res)

        
        const newNews = news.splice()

        for(var i=0;i<3;i++)
        {
          newNews.push({title : res.data[i][0], img : res.data[i][1], link : res.data[i][2]})
        }

        

        

        // console.log(res.data[0][0]);
        setNews(newNews)

      }
    )

    console.log(news)
  }, [])

  const clickHandler1 = (link) => {
    window.open(link)
  }



  return (
    <NewsContainer id='News'>
      <NewsHeading>News</NewsHeading>
      {news.length ? <NewsWrapper>
        {news.map((i) => (<NewsCard onClick = {e => clickHandler1(i.link)}>
          <NewsIcon src={i.img}/>
          <NewsH2>{i.title}</NewsH2>
          {/* <NewsButton onClick = {e => clickHandler1(e)}>Learn More</NewsButton> */}
        </NewsCard>))}
        
      </NewsWrapper>
      : <div>The page is loading, please wait...</div>}
      
      
    </NewsContainer>
  )
}

export default News
