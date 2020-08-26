import React from "react";
import "./css/App.css";
import { Route } from 'react-router-dom';
import Login from "./components/Login/login.js";
// import Home from "./components/Home/Home.js";

function App() {
  return (
    <div>
      {/* <Route exact path="/" component={ Home }/> */}
      <Route exact path="/login" component={ Login }/>
    </div>
  )
}
export default App;
