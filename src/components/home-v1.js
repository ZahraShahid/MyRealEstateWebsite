import React from "react";
import Navbar from "./global-components/navbar";
import Banner from "./section-components/banner";
import Service from "./section-components/service";
import Video from "./section-components/video"; //Video to be implemented?
import Testimonial from "./section-components/testimonial";
import Agent from "./section-components/agent";
import FooterV2 from "./global-components/footer-v2";

const Home_V1 = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Service />
      <Video />
      <Testimonial />
      <Agent />
      <FooterV2 />
    </div>
  );
};

export default Home_V1;
