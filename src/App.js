import logo from './logo.svg';
import './App.css';
import React from 'react';
import AboutUs from './component/AboutUs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
       
    
    <div className='dayz'>
      <div clasName='HomePage'>
        <Link  to="/games"><h1>KnightsGame</h1> </Link>
      </div>
    <div className='register'>
      <h1 className='res'>Register</h1>
    </div>
    
    <div>
      <div className='registerBox'>
        <h3 className='KnightsGame'>KnightsGame</h3>

        <div className='email'>
          <h3 className="Enter">Please Enter an email adress </h3>
        <input type="email" maxlength="70" size="70"/>
        </div>
        
        <div className='passWord'>
          <h3 className="Enter">Please Enter a password </h3>
        <input type="text" maxlength="70" size="70"/>
        </div>
        
        <div className="RememberMe">
          
        <Link to="/games"><button class="RememberButton" type="submit" >Register</button></Link>

        <Link to="/login"><h3 className='New'>Already have a acount?</h3></Link>
        </div>
    
       
      </div>
      

      
    </div>
    
    </div>
  );
}

export default App;
