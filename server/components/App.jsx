import React, { useState } from "react";
import Xss from "./Xss";
import Login from "./Login"
import Main from "./Main";
import Create from "./Create";
import "./App.css";
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";



function App(){

    

    return(
        <div className="App">
        <a href="/">Main Page</a><br></br>
        <a href="/Create">create Pose</a><br></br>
        <a href="/Xss">xss</a><br></br>
        <a href="/Login">Login</a>


        <div>
        <Router>
        <Route path="/" exact render={(props)=><Main/>}/>
        <Route path="/Create" exact render={(props)=><Create/>}/>
        <Route path="/Xss" exact render={(props)=><Xss/>}/>
        <Route path="/Login" exact render={(props)=><Login/>}/>
        </Router>
</div>
  
        </div>
)
}


export default App