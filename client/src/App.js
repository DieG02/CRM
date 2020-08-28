import React from "react";
import "./css/App.css";
import { Route } from 'react-router-dom';
import Login from "./components/Login/login.js";
import Home from "./components/Home/home.js";

function App() {
  return (
    <div>
      <Route exact path="/login" component={ Login }/>
      <Route exact path="/home" component={ Home }/>
    </div>
  )
}
export default App;
