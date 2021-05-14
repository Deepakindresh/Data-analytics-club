import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages/Home';
import SigninPage from './pages/signin';
import Blog from './pages/Blog'
import About from './pages/About'
import News from './pages/News'
import Tasks from './pages/Tasks'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Team from './pages/team'


function App() {
  return (
    <div>
      
      <Router>
      <Switch>
        
        <Route exact path='/Signin' component={SigninPage}/>
        <Route exact path = '/Blog' component = {Blog}/>
        <Route exact path = '/AboutUs' component = {About}/>
        <Route exact path = '/News' component = {News}/>
        <Route exact path = '/Tasks' component = {Tasks}/>
        <Route exact path='/' component={Home}/>
        <Route exact path = '/Teams'>
          <Navbar/>
          <Team/>
        </Route>
         
      </Switch>
    </Router>
    
    </div>
    
  );
}

export default App;
