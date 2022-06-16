// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Routes, Switch } from "react-router-dom";
import axios from 'axios';

import HomeV1 from './components/home-v1';
import ProptertyDetails from './components/property-details';
import ProptertyGrid from './components/property-grid';
import Propterty from './components/property';
import About from './components/about';
import Team from './components/team';
import Gallery from "./components/gallery";
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import MapPage from './components/map';
import AddProperty from './components/add-property';
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" exact element={<HomeV1/>} />
          <Route path="/sign-in" exact element={<SignIn/>} />
          <Route path="/sign-up" exact element={<SignUp/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/gallery" exact element={<Gallery/>} />
          <Route path="/team" exact element={<Team/>} />
          <Route path="/office-map" exact element={<MapPage/>} />
          <Route path="/property-grid" exact element={<ProptertyGrid/>} />
          <Route path="/add-property" exact element={<AddProperty/>} />
          <Route path="/property-details" exact element={<ProptertyDetails/>} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
