import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeV1 from "./components/home-v1";
import PropertyDetailsRent from "./components/property-details-rent";
import PropertyDetailsSale from "./components/property-details-sale";
import PropertyForSale from "./components/property-grid-for-sale";
import PropertyForRent from "./components/property-grid-for-rent";
import About from "./components/about";
import Team from "./components/team";
import Gallery from "./components/gallery";
import SignIn from "./components/sign-in";
import MapPage from "./components/map";
import AddProperty from "./components/add-property";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<HomeV1 />} />
          <Route path="/sign-in" exact element={<SignIn />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/team" exact element={<Team />} />
          <Route path="/office-map" exact element={<MapPage />} />
          <Route
            path="/property-for-sale"
            exact
            element={<PropertyForSale />}
          />
          <Route
            path="/property-for-rent"
            exact
            element={<PropertyForRent />}
          />
          <Route path="/add-property" exact element={<AddProperty />} />
          <Route
            path="/property-details-rent"
            exact
            element={<PropertyDetailsRent />}
          />
          <Route
            path="/property-details-sale"
            exact
            element={<PropertyDetailsSale />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
