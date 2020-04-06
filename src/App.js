import React from 'react';
 
import './App.css';
import Newlead from './Newlead';
//import  Test from './Test';
import Login from "./Login"
import LeadDashboard from './LeadDashboard';
import {Nav,NavItem,NavLink} from 'reactstrap';
import {BrowserRouter as Router ,Route,Link,Switch} from "react-router-dom";
class App extends React.Component {
render(){
  return (
    <Router> 
  <div>
      <Nav tabs>
        <NavItem>
        <NavLink href="/Login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Newlead">Newlead Form</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/LeadDashboard">LeadDashboard</NavLink>
        </NavItem>
      </Nav>
    </div>
  
      
         <div>
            <ul>
                < Link to="/"></Link>
            </ul>
            <Switch>
                 <Route exact path ='/Login' component = {Login}/>
                 <Route path ='/LeadDashboard' component = {LeadDashboard}/>
                  <Route path='/Newlead' component={Newlead}/>
            </Switch>
          </div>
        </Router>

   
  );
}
}
export default App;
