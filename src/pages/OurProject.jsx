import React, {useState,useEffect} from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';


import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import Info from '../components/Info/Info'
import {OurProjects} from '../components/Info/Data';
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/SideBar/Sidebar'


import { NewsH1,  NewsCard,  NewsH2,  } from '../components/News/NewsElements';


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


export default function OurProject() {

  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false)

  const [projects,setProjects] = useState([])

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  // For Projects

  

  useEffect(() => {
    axios.get('https://dac-api.herokuapp.com/repo').then(
      res => {

        const newProjects = projects.slice()
        let max = res.data.length

        for(var j=0;j<max;j++)
        {
          newProjects.push({title : res.data[j]["title"], 
		description : res.data[j]["about"], 
		link : res.data[j]["link"], 
    lang : res.data[j]["lang"],
    stars: res.data[j]["star_count"],
    branches: res.data[j]["branch_count"],
		projectNo: j})
        }

        if(!projects.length){
            setProjects(newProjects)
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
          
          <Info {...OurProjects}/>
          <div style={{backgroundColor: "lightgray",marginTop:"-100px"}}>
            <Container className={classes.cardGrid} maxWidth="100%" >
          <Grid container spacing={7}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4}>
                <NewsCard>
                  <NewsH1>{project.title}</NewsH1>
                  <NewsH2>{project.description}</NewsH2>
                  <NewsH2>Language Used: <b>{project.lang}</b></NewsH2>
                  <NewsH2>No: of branches: <b>{project.branches}</b></NewsH2>
                  <NewsH2>stars: <b>{project.stars}</b></NewsH2>
                </NewsCard>
                {/* <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography>
                      {project.description}
                    </Typography>
                    <Typography>
                      Language Used: <b>{project.lang}</b>
                    </Typography>
                    <Typography>
                      Branches: <b>{project.branches}</b>
                    </Typography>
                    <Typography>
                      Stars: <b>{project.stars}</b>
                    </Typography>
                  </CardContent>
                  <CardActions style={{display: "flex", justifyContent: "space-between"}}>
                    <Button size="small" color="primary" onClick = {e => clickHandler2(project.projectNo)}>
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
