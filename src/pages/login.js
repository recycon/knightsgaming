import React from "react";
import AboutUs from "../component/AboutUs";
import "./login.css"
import {Link, useLocation} from "react-router-dom"


function LoginPage(){


    return(
        
            
       <div className='OverLappingImage'>

        < div className="wow">
    
    <div className="HomePage">
        <Link to="/games"><h3 style={{color:"gold"}}>KnightsGame</h3></Link>
        </div>

        <div className="flexDem">
        <div className="KnightsGames">
        <h3>Knights Games</h3>
        <div className="Slogan">
            <h4>Read Write Review</h4> 

        </div>
        </div>
    


    </div>
    <div className="login">
        <h1 className="LoginT">Login</h1>
        <input className="inputs" type="email" placeholder="Email" size="3" maxlength="4"/>
        <input className="inputs" type="text" placeholder="Password" size="3" maxlength="4"/>
       <Link to="/games"> <button className="loginInfo">Login</button> </Link>

    </div>
    
    


   
    </div>

    </div>


    
    
     
     )
}

export default LoginPage;