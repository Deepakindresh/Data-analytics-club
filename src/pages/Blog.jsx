import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import Info from '../components/Info/Info'
import {Ourblog, Writeblog} from '../components/Info/Data';
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/SideBar/Sidebar'

import {BlogsCard, BlogsIcon, BlogsH2} from '../components/BlogsHome/BlogsHomeElements'



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
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Blog2() {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <main>
        {/* Hero unit */}
        
        
          {/* End hero unit */}
          <Info {...Ourblog}/>
          <div style={{backgroundColor: "#010606",marginTop:"-100px"}}>
          <Container className={classes.cardGrid} maxWidth="md" >
          <Grid container spacing={10}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                    <BlogsCard>
                      <BlogsIcon src = 'https://source.unsplash.com/random'/>
                      <BlogsH2>Title 1</BlogsH2>
                      <BlogsH2>Description</BlogsH2>
                      {/* <Button >Learn More</Button> */}
                    </BlogsCard>

                {/* <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      Brief Description of your Blog.
                    </Typography>
                  </CardContent>
                  <CardActions style={{display: "flex", justifyContent: "space-between"}}>
                    <Button size="small" color="primary">
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
          <Info {...Writeblog}/>
          </div>
          
          
      </main>

    </React.Fragment>
  );
}