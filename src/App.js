import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages/Home';
import SigninPage from './pages/SigninPage';
import Blog from './pages/Blog'
import About from './pages/About'
import News from './pages/News'
import Tasks from './pages/Tasks'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/SideBar/Sidebar'

import React, {useEffect,useState} from 'react';
import {auth} from './Firebase'
import {useStateValue} from './StateProvider'

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Team from './pages/Team'


function App() {


  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  const [{user}, dispatch] = useStateValue();

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
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar/>
        <Blog/>
        <Footer/>
        </Route>

        <Route exact path = '/AboutUs' component = {About}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar/>
        <About/>
        <Footer/>
        </Route>


        <Route exact path = '/News' component = {News}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar/>
        <News/>
        <Footer/>
        </Route>


        <Route exact path = '/Tasks' component = {Tasks}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar/>
        <Tasks/>
        <Footer/>
        </Route>
        
        <Route exact path = '/Teams' component={Team}>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar/>
          <Team/>
          <Footer/>
        </Route>

        <Route exact path='/' component={Home}>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar/>
          <Home/>
          <Footer/>
        </Route>
         
      </Switch>
    </Router>
    
    </div>
    
  );
}

export default App;
