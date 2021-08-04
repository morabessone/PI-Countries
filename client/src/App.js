import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';

function App() {
  return (
    <React.Fragment>
      <Route exact path = "/" component = {Landing}/>
      <Route path = "/home" component = {Home}/>
    </React.Fragment>
  );
}

export default App;
