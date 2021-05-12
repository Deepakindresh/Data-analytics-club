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
    axios.get('http://127.0.0.1:5000/?topic=%22dataanalytics%22')
    .then(
      res => {

        console.log(res)

        const n1 = {title : res.data[0][0], img : res.data[0][1], content : res.data[0][2]}
        const n2 = {title : res.data[1][0], img : res.data[1][1], content : res.data[1][2]}
        const n3 = {title : res.data[2][0], img : res.data[2][1], content : res.data[2][2]}

        const newNews = news.splice()

        newNews.push(n1)
        newNews.push(n2)
        newNews.push(n3)

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
