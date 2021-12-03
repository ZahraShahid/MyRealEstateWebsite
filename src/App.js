// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";

import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import ProptertyDetails from './components/property-details';
import ProptertyGrid from './components/property-grid';
import Propterty from './components/property';
import About from './components/about';
import Team from './components/team';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import AddProperty from './components/add-property';
import Contact from './components/contact';
import Blog from './components/blog';
import BlogDetails from './components/blog-details';

function App() {
  return (
    <Router>
    <div className="App">
      <HomeV1 />
    </div>
    </Router>
  );
}

export default App;
