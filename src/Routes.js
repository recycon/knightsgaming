import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React from "react";
import LoginPage from "./pages/login";
import Games from "./pages/games";
import App from "./App";
import GameDetail from "./pages/gameDetail";


function Routes(){

    return(
        <div>

            
         
         
        <Switch>
                <Route exact path="/">
                    <App/>
                </Route>
                <Route exact path="/games">
                    <Games/>
                </Route>
                <Route path="/login">
                    <LoginPage/>
                </Route>

                <Route path="/games/details">
                    <GameDetail/>
                </Route>
            </Switch>
            
        </div>

    )

}

export default Routes;