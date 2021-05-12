import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages/Home';
import SigninPage from './pages/signin';
import Blog from './pages/Blog'
import 'bootstrap/dist/css/bootstrap.min.css';
import Team from './pages/team'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signin' component={SigninPage}/>
        <Route exact path = '/blog' component = {Blog}/>
        <Route exact path = '/team'>
          <Navbar/>
          <Team/>
          <Footer/>
        </Route>
         
      </Switch>
    </Router>
  );
}

export default App;
