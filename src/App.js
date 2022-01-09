import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages/Home';
import Blog from './pages/Blog'
import About from './pages/About'
import News from './pages/News'
import Tasks from './pages/Tasks'
import EventsPage from './pages/EventsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import OurProject from './pages/OurProject'
import { auth,db } from "./Firebase";

import React, {useEffect,useState} from 'react';
import {useStateValue} from './StateProvider'


import Footer from './components/Footer/Footer';
import Team from './pages/Team'
import Profile from './pages/Profile';
import CreateBlog from './components/CreateBlog/CreateBlog';
import CreateEventPage from './pages/CreateEventPage';
import Join from './pages/JoinUs';
import RegAdminPage from './components/RegistrationAdmin/RegAdminPage';




function App() {


  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  //Usestates

  const [{user}, dispatch] = useStateValue();
  const [username,setUsername] = useState()
  const [email,setEmail] = useState()
  const [role,setRole] = useState()
  const [dp,setDp] = useState()

  async function getUser(authUser)
    {
        let CurrentAuthUser = await user

        // if(CurrentAuthUser == null)
        // {
        //   console.log("Current auth user is ",CurrentAuthUser)
        // }

        // else{

            // setDp(user.photoURL)
            // console.log(user)

            var Userdetails = db.collection('user').doc(authUser.email).get()
            Userdetails.then(res => {
                console.log('res',res.data())
                if(!res.data())
                {
                  console.log("New user is added")
                  console.log("Inside if ",res.data())
                  db.collection('user').doc(authUser.email).set({
                    email : authUser.email,
                    username : authUser.displayName,
                    role : "U"
                })

                }

                else{

                  // setEmail(res.data().email)
                  // setUsername(res.data().username)
                  console.log("Inside else role is ",res.data().role)
                  // setRole(res.data().role)
                  // console.log("After set role",role)

                  console.log('user logged in as ',authUser.displayName)
                  // console.log('user role as ',role)
                  dispatch({
                    type: "SET_USER",
                    user: authUser,
                    role: res.data().role,
                  })

                }

                
                

                
            })
        // }
    }

    

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //User is logged in
        getUser(authUser)
        
      }else{
        //No one is
        console.log("No user is logged in")
        dispatch({
          type: "SET_USER",
          user: null,
          role: "U",
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
        

        <Route exact path = '/Events' component={EventsPage}>
          <EventsPage/>
          <Footer/>
        </Route>

        <Route exact path='/Events/CreateEvent' component={CreateEventPage}/>


        <Route exact path = '/Blog' component = {Blog}>
        <Blog/>
        <Footer/>
        </Route>

        <Route exact path = '/AboutUs' component = {About}>
        <About/>
        <Footer/>
        </Route>

        <Route exact path = '/JoinUs' component = {Join}>
        <Join/>
        <Footer/>
        </Route>

        <Route exact path = '/JoinUs/Admin'>
        {role !== 'U' && user != null && role !== 'M'?  <div> <RegAdminPage style={{marginBottom:"200px"}}/> <Footer /> </div>: <h1>You dont have permission to view this page</h1>}          
        </Route>


        <Route exact path = '/News' component = {News}>
        <News/>
        <Footer/>
        </Route>


        <Route exact path = '/Tasks' component = {Tasks}>
        {role !== 'U' && user != null?  <div> <Tasks/> <Footer/> </div>: <h1>You dont have permission to view this page</h1>}  
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

        {/* <Route exact path = '/Blog/CreateBlog'>
          <CreateBlog/>
          <Footer/>
        </Route> */}

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