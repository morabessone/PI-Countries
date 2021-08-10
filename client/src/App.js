import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import countryDetail from './components/CountryDetail/CountryDetail';
import CreateActivity from './components/CreateActivity/CreateActivity';

function App() {
  return (
    <React.Fragment>
      <Route exact path = "/" component = {Landing}/>
      <Route path = "/" component = {NavBar}/>
      <Route exact path = "/home" component = {Home}/>
      <Route exact path = "/countryDetail/:name" component = {countryDetail}/>
      <Route exact path = "/createActivity" component = {CreateActivity}/>
    </React.Fragment>
  );
}

export default App;
