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

        for(var i=0;i<4;i++)
        {
          newNews.push({title : res.data[i][0], img : res.data[i][1], content : res.data[i][2]})
        }

        

        

        // console.log(res.data[0][0]);
        setNews(newNews)

      }
    )

    console.log(news)
  }, [])

  const clickHandler1 = () => {
    console.log("woses")
    window.open(news[0].content)
  }

  const clickHandler2 = () => {
    window.open(news[3].content)
  }

  const clickHandler3 = () => {
    window.open(news[2].content)
  }


  return (
    <NewsContainer id='News'>
      <NewsHeading>News</NewsHeading>
      {news.length ? <NewsWrapper>
        <NewsCard onClick = {e => clickHandler1(e)}>
          <NewsIcon src={news[0].img}/>
          <NewsH2>{news[0].title}</NewsH2>
          {/* <NewsButton onClick = {e => clickHandler1(e)}>Learn More</NewsButton> */}
        </NewsCard>
        <NewsCard onClick = {e => clickHandler1(e)}>
        <NewsIcon src={news[3].img}/>
        <NewsH2>{news[3].title}</NewsH2>
          {/* <NewsButton onClick = {e => clickHandler2(e)}>Learn More</NewsButton> */}
        </NewsCard>
        <NewsCard onClick = {e => clickHandler1(e)}>
          <NewsIcon src={news[2].img}/>
          <NewsH2>{news[2].title}</NewsH2>
          {/* <NewsButton onClick = {e => clickHandler3(e)}>Learn More</NewsButton> */}
        </NewsCard>
      </NewsWrapper>
      : <div>The page is loading, please wait...</div>}
      
    </NewsContainer>
  )
}

export default News
