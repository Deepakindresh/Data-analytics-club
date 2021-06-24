import React,{useState,useEffect} from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import {NewsContainer, NewsH1, NewsWrapper, NewsCard, NewsIcon, NewsH2, NewsP} from './NewsElements'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { FaNewspaper } from 'react-icons/fa'
import {Button} from '../ButtonElements'

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
    window.open(news[1].content)
  }

  const clickHandler3 = () => {
    window.open(news[2].content)
  }


  return (
    <NewsContainer id='News'>
      <NewsH1>News</NewsH1>
      {news.length ? <NewsWrapper>
        <NewsCard>
          <NewsIcon src={news[0].img}/>
          <NewsH2>{news[0].title}</NewsH2>
          <Button onClick = {e => clickHandler1(e)}>Learn More</Button>
        </NewsCard>
        <NewsCard>
        <NewsIcon src={news[1].img}/>
        <NewsH2>{news[1].title}</NewsH2>
          <Button onClick = {e => clickHandler2(e)}>Learn More</Button>
        </NewsCard>
        <NewsCard>
          <NewsIcon src={news[2].img}/>
          <NewsH2>{news[2].title}</NewsH2>
          <Button onClick = {e => clickHandler3(e)}>Learn More</Button>
        </NewsCard>
      </NewsWrapper>
      : <div>Woses</div>}
    </NewsContainer>
  )
}

export default News
