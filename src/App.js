import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Infromation from './Infromation';
import Website from './Website';
import User from './User';
import NotFound from './NotFound'


function App() {
  return (
    <Router>
       <div className="App" >
        <Website />
       <Switch>
       <Route exact path='/' component={Home}></Route>
         <Route exact path='/Home' component={Home}></Route>
         <Route exact path='/user' component={User}></Route>
         <Route exact path='/about' component={About}></Route>
         <Route exact path='/contact' component={Contact}></Route>
         <Route exact path='/infromation' component={Infromation}></Route>
         
        <Route component={NotFound}></Route>
       </Switch>
    </div>
     </Router>
  );
}

export default App;
