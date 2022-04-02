import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Team from "./section-components/team";
import Footer from "./global-components/footer-v2";

const TeamPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Team" />
      <Team />
      <Footer />
    </div>
  );
};

export default TeamPage;
