import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero'
import Info from '../components/Info/Info'
import { homeObjOne, homeObjTwo, homeObjThree, Blogpage, Ourblog, Writeblog, WeeklyNews, Researchpapers} from '../components/Info/Data';
import Navbar from '../components/Navbar/Navbar'
import Services from '../components/Services/Service';
import Sidebar from '../components/SideBar/Sidebar'
import { black } from 'chalk';

import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ResearchpapersCard from '../components/Researchpapers/ResearchpaperCard';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

export default function News() {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <main>
        {/* Hero unit */}
        
        
          {/* End hero unit */}
          <Info {...WeeklyNews}/>
          <div style={{backgroundColor: "#010606",marginTop:"-250px"}}>
          <Container className={classes.cardGrid} maxWidth="md" >
          <Grid container spacing={10}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
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
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
          
          </div>
          <Info {...Researchpapers}/>
          <div style={{backgroundColor: "lightgray",marginTop:"-200px"}}>
            <Container className={classes.cardGrid} maxWidth="md" >
          <Grid container spacing={10}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
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
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
          </div>
      </main>

    </React.Fragment>
  );
}

