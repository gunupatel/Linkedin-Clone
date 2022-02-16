import React from 'react';

import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from './Signup';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Popup from './Popup';
import Createpost from './Createpost';
import Profile from './Profile';
import Editprofile from './Editprofile';
import Setupprofile from './Setupprofile';
import Mynetwork from './Mynetwork';
function App() {
  return (
        <div >
       
         <Router >
   <Switch> 
   <Route exact path="/" >
     <Dashboard/> 
     </Route>
     <Route  path="/Signup" >
     <Signup/> 
     </Route>
     <Route  path="/Login" >
     <Login/> 
     </Route>
     <Route  path="/Home" >
     <Home/> 
     </Route>
     <Route  path="/Mynetwork" >
     <Mynetwork/> 
     </Route>
     <Route  path="/Editprofile" >
     <Editprofile/> 
     </Route>
     <Route  path="/Setupprofile" >
     <Setupprofile/> 
     </Route>
     <Route  path="/Profile" >
     <Profile/> 
     </Route>
     <Route  path="/CreatePost" >
     <Createpost/> 
     </Route>
      </Switch> 
   </Router>   
   {/* </div> */}

   
   
   </div>
   
  );
}

export default App;
