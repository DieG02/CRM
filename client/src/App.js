import React from "react";
import "./css/App.css";
import {  Switch, Route } from 'react-router-dom';
import Login from "./components/Login/login.js";
import Frame from "./components/Frame/frame.js";

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={ Login }/>
      <Route 
        path="/:view" 
        component={({ match }) => (
          <Frame view={match.params.view} />
        )}
      />
    </Switch>
  )
}
export default App;
