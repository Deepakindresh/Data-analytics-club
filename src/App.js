import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages/Home';
import SigninPage from './pages/SigninPage';
import Blog from './pages/Blog'
import About from './pages/About'
import News from './pages/News'
import Tasks from './pages/Tasks'
import 'bootstrap/dist/css/bootstrap.min.css';
import OurProject from './pages/OurProject'
import { auth,db } from "./Firebase";

import React, {useEffect,useState} from 'react';
import {useStateValue} from './StateProvider'


import Footer from './components/Footer/Footer';
import Team from './pages/Team'
import Profile from './pages/Profile';
import CreateBlog from './components/CreateBlog/CreateBlog';
import Events from './pages/Events';


function App() {


  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  const [{user}, dispatch] = useStateValue();
  const [username,setUsername] = useState()
  const [email,setEmail] = useState()
  const [role,setRole] = useState()
  const [dp,setDp] = useState()

  async function getUser()
    {
        let CurrentAuthUser = await user

        if(CurrentAuthUser == null)
        {

        }

        else{

            setDp(user.photoURL)
            console.log(user)

            var Userdetails = db.collection('user').doc(user.email).get()
            console.log('demm',Userdetails)
            Userdetails.then(res => {
                console.log('res',res.data())
                if(!res.data())
                {
                  db.collection('user').doc(user.email).set({
                    email : user.email,
                    username : user.displayName,
                    role : "U"
                })
                }

                setEmail(res.data().email)
                setUsername(res.data().username)
                setRole(res.data().role)
                

                
            })
        }
    }

    getUser()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //User is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      }else{
        //No one is
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    });
    return () => {
      unsubscribe();
    };
  },[]);



  return (
    <div>
      
      <Router>
      <Switch>
        
        <Route exact path='/Signin' component={SigninPage}/>


        <Route exact path = '/Blog' component = {Blog}>
        <Blog/>
        <Footer/>
        </Route>

        <Route exact path = '/AboutUs' component = {About}>
        <About/>
        <Footer/>
        </Route>


        <Route exact path = '/News' component = {News}>
        <News/>
        <Footer/>
        </Route>


        {/* <Route exact path = '/Tasks' component = {Tasks}>
        {role != 'U' && user != null?  <div> <Tasks/> <Footer/> </div>: <h1>Poda Bob</h1>}  
        </Route> */}

        <Route exact path = '/Events' component={Team}>
          <Events/>
          <Footer/>
        </Route>
        
        <Route exact path = '/Teams' component={Team}>
          <Team/>
          <Footer/>
        </Route>

        <Route exact path = '/OurProject' component={OurProject}>
          <OurProject/>
          <Footer/>
        </Route>

        <Route exact path = '/Profile' component={Profile}>
          <Profile/>
          <Footer/>
        </Route>

        <Route exact path = '/Blog/CreateBlog'>
          <CreateBlog/>
          <Footer/>
        </Route>

        <Route exact path = '/Blog/CreateTask'>
          <Footer/>
        </Route>

        <Route exact path='/' component={Home}>
          <Home/>
          <Footer/>
        </Route>
         
      </Switch>
    </Router>
    
    </div>
    
  );
}

export default App;