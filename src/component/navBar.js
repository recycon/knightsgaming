import React from "react";
import "../pages/gg.css";
function NavBar(){
    return(
        <nav >
            
        <h3 className="nav-bar" id="KH"> KnightsGame</h3>
        <input   className="nav-bar"type="search"   style={{width: 300, height:20,position:"relative",top:30}}/>
        <h3 className="nav-bar">Bookmarked</h3>
        <h3 className="nav-bar">Caterogies</h3>
        



    </nav>

    )
}

export default NavBar;