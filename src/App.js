import logo from './logo.svg';
import './App.css';
import React from 'react';
import AboutUs from './component/AboutUs';




function App() {
  return (
    <div>
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
          <h3>Please Enter an email adress </h3>
        <input type="email"/>
        </div>
        
        <div className='passWord'>
          <h3>Please Enter a password </h3>
        <input type="text"/>
        </div>
       
      </div>
      <AboutUs/>
      { /*src="/Pictures/test.jpg"*/}

      
    </div>
    
    
    </div>
  );
}

export default App;
