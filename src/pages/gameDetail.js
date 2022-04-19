import React from "react";
import NavBar from "../component/navBar";
import "./gameDetail.css";
import AboutUs from "../component/AboutUs";



function GameDetail(){
    




    return (
        <div className="OverlappingPic">

        <div>
            <NavBar/>

            <div className="flex">

            <div className="Main">
            <div className="MainPic">
                <h3>Game Name</h3>
                <h3 id="smalltext">Genre</h3> 
                <h3 id="smalltext">Release Date</h3> 

            </div>

            <div className="Description">
                <h3>Description</h3>

            </div>
            </div>
            <div className="Main2">

            <div className="CoverPhoto">
                <h3>Rating:</h3>

            </div>
            
            <div className="RelevantInfo">
                <h3>age rating</h3>
            </div>
            </div>

            </div>



            <AboutUs/>

            
            


        </div>
        </div>
    )
}

export default GameDetail;