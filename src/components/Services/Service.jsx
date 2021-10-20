import React,{useState,useEffect} from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2} from './ServiceElements'
import axios from 'axios'

import {Button} from '../ButtonElements'

const Services = () => {


  const [news,setNews] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/?topic=%22data%22')
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


  return (
    <ServicesContainer id='services'>
      <ServicesH1>News</ServicesH1>
      {news.length ? <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={news[0].img}/>
          <ServicesH2>{news[0].title}</ServicesH2>
          <Button href = {news[0].content}>Click Here</Button>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={news[1].img}/>
        <ServicesH2>{news[1].title}</ServicesH2>
          <Button href = {news[1].content}>Click Here</Button>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={news[2].img}/>
          <ServicesH2>{news[2].title}</ServicesH2>
          <Button href = {news[2].content}>Click Here</Button>
        </ServicesCard>
      </ServicesWrapper>
      : <div>Woses</div>}
    </ServicesContainer>
  )
}

export default Services
