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


function App() {
  return (
    <div>
      
      <Router>
      <Switch>
        
        <Route exact path='/signin' component={SigninPage}/>
        <Route exact path = '/blog' component = {Blog}/>
        <Route exact path = '/about' component = {About}/>
        <Route exact path = '/news' component = {News}/>
        <Route exact path = '/tasks' component = {Tasks}/>
        <Route exact path = '/departments' component = {Blog}/>
        <Route exact path='/' component={Home}/>
         
      </Switch>
    </Router>
    
    </div>
    
  );
}

export default App;
