import logo from './logo.svg';
import './App.css';
import React from 'react';
import AboutUs from './component/AboutUs';



function App() {
  return (
       
    
    <div className='dayz'>
      <div clasName='HomePage'>
        <h3>Home</h3> 
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
          <h3>Remember Me</h3> 
        <button class="RememberButton" type="checkbox" ></button>
        </div>
    
       
      </div>
      <AboutUs/>
      { /*src="/Pictures/test.jpg"*/}

      
    </div>
    <div className='AboutUsBox'>
      </div>

    
    
    </div>
  );
}

export default App;
