import React, {useState,useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import Info from '../components/Info/Info'
import { WeeklyNews, Researchpapers} from '../components/Info/Data';
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/SideBar/Sidebar'




import { NewsH1,  NewsCard, NewsIcon} from '../components/News/NewsBlogsPageStyle';

import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    maxHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    overflowY: 'scroll',
    overflowX: 'hidden'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function News() {

  const [news,setNews] = useState([])

  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false)

  const [researchPapers,setResearchPapers] = useState([])

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  // From News

  useEffect(() => {
    axios.get('https://dac-api.herokuapp.com/news?topic=%22datascience%22')
    .then(
      res => {

        const newNews = news.splice()

        for(var i=0;i<9;i++)
        {
          newNews.push({title : res.data[i][0], img : res.data[i][1], link : res.data[i][2], newsNo: i})
        }

        // console.log(res.data[0][0]);
        setNews(newNews)

      }
    )

    console.log(news)
  }, [])

  const clickHandler1 = (num) => {
    window.open(news[num].link)
  }

  // For Research papers

  

  useEffect(() => {
    axios.get('https://dac-api.herokuapp.com/papers').then(
      res => {

        const newPapers = researchPapers.slice()

        for(var j=0;j<9;j++)
        {
          newPapers.push({title : res.data[j][0], description : res.data[j][1], link : res.data[j][2], paperNo: j})
        }

        if(!researchPapers.length){
            setResearchPapers(newPapers)
        }
      }
    )

  }, []);


  return (
    <React.Fragment>
      <CssBaseline />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>

      <main>
        {/* Hero unit */}
        
        
          {/* End hero unit */}
          <Info {...WeeklyNews}/>
          <div style={{backgroundColor: "#010606",marginTop:"-100px", width: "100%"}}>
          <Container className={classes.cardGrid} maxWidth="70%" >
          <Grid container spacing={7}>
            {news.map((newsIterator) => (
              <Grid item xs={12} sm={6} md={4}>
                <NewsCard onClick = {e => clickHandler1(newsIterator.newsNo)}>
                  <NewsIcon src = {newsIterator.img}/>
                  <NewsH1>{newsIterator.title}</NewsH1>
                </NewsCard>
                {/* <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={newsIterator.img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {newsIterator.title}
                    </Typography>
                  </CardContent>
                  <CardActions style={{display: "flex", justifyContent: "space-between"}}>
                    <Button size="small" color="primary"  onClick = {e => clickHandler1(newsIterator.newsNo)}>
                      Learn More
                    </Button>
                    <div> 
                      <ShareIcon color="black" style={{marginRight: "10px"}}/>
                      <FavoriteBorderIcon/>
                    </div> 
                    
                  </CardActions>
                </Card> */}
              </Grid>
            ))}
          </Grid>
        </Container>
          
          </div>
          <Info {...Researchpapers}/>
          <div style={{backgroundColor: "lightgray",marginTop:"-100px"}}>
            <Container className={classes.cardGrid} maxWidth="80%" >
          <Grid container spacing={7}>
            {researchPapers.map((paper) => (
              <Grid item xs={12} sm={6} md={4}>
                <NewsCard onClick = {e => clickHandler1(paper.paperNo)}>
                  <NewsH1>{paper.title}</NewsH1>
                  
                </NewsCard>
                {/* <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {paper.title}
                    </Typography>
                    <Typography>
                      {paper.description}
                    </Typography>
                  </CardContent>
                  <CardActions style={{display: "flex", justifyContent: "space-between"}}>
                    <Button size="small" color="primary" onClick = {e => clickHandler2(paper.paperNo)}>
                      Learn More
                    </Button>
                    <div> 
                      <ShareIcon color="black" style={{marginRight: "10px"}}/>
                      <FavoriteBorderIcon/>
                    </div> 
                  </CardActions>
                </Card> */}
              </Grid>
            ))}
          </Grid>
        </Container>
          </div>
          
      </main>

    </React.Fragment>
  );
}

