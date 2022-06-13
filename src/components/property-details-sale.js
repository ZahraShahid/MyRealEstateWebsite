import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import PropertyDetailsSalePage from "./section-components/property-details-sale";
import Footer from "./global-components/footer-v2";

const PropertyDetailsSale = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Property Details" />
      <PropertyDetailsSalePage />
      <Footer />
    </div>
  );
};

export default PropertyDetailsSale;
