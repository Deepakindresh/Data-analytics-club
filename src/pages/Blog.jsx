import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import Info from '../components/Info/Info'
import {Ourblog, Writeblog, Writeblog2} from '../components/Info/Data';
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/SideBar/Sidebar'

import {BlogsCard, BlogsIcon, BlogsH1} from '../components/BlogsHome/BlogsHomeElements'

import axios from 'axios'
import { useStateValue } from '../StateProvider';

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


export default function Blog2() {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false)

  const [blogs, setBlogs] = useState([])

  const [{role}] = useStateValue()

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

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  const clickHandler1 = (num) => {
    window.open(blogs[num].link)
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
          <Container className={classes.cardGrid} maxWidth="100%" >
          <Grid container spacing={7}>
            {blogs.map((blog) => (
              <Grid item key={blog.blogNo} xs={12} sm={6} md={4}>
                    <BlogsCard onClick = {e => clickHandler1(blog.blogNo)}>
                      <BlogsIcon src = {blog.img}/>
                      <BlogsH1>{blog.title}</BlogsH1>
                      {/* <Button >Learn More</Button> */}
                    </BlogsCard>

               
              </Grid>
            ))}
          </Grid>
        </Container>
          {role !== 'U' ? <Info {...Writeblog}/> : <Info {...Writeblog2}/>}
          </div>
          
          
      </main>

    </React.Fragment>
  );
}


















