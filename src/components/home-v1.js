import React from "react";
import Navbar from "./global-components/navbar";
import Banner from "./section-components/banner";
import Service from "./section-components/service";
import Video from "./section-components/video"; 
import Testimonial from "./section-components/testimonial";
import Team from "./section-components/team";
import FooterV2 from "./global-components/footer-v2";

const Home_V1 = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Service />
      <Video />
      <Testimonial />
      <Team />
      <FooterV2 />
    </div>
  );
};

export default Home_V1;
