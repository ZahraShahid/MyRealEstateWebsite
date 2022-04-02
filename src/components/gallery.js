import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Gallery from "./section-components/gallery";
import Footer from "./global-components/footer-v2";

const GalleryPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Gallery" />
      <Gallery />
      <Footer />
    </div>
  );
};

export default GalleryPage;
