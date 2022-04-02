import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import OfficeMap from "./section-components/map";
import Footer from "./global-components/footer-v2";

const MapPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Office Map" />
      <OfficeMap />
      <Footer />
    </div>
  );
};

export default MapPage;
