import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import PropertyDetailsRentPage from "./section-components/property-details-rent";
import Footer from "./global-components/footer-v2";

const PropertyDetailsRent = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Property Details" />
      <PropertyDetailsRentPage />
      <Footer />
    </div>
  );
};

export default PropertyDetailsRent;
