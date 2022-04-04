import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import About from "./section-components/about";
import Counter from "./section-components/counter";
import Service from "./section-components/service-v3";
import Testimonial from "./section-components/testimonial-v3";
import Footer from "./global-components/footer-v2";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="About Us" />
      <About />
      <Counter />
      <Service />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default AboutPage;
