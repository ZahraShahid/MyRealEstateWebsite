import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import SignIn from "./section-components/sign-in";
import Footer from "./global-components/footer-v2";

const SignInPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Sign In" />
      <SignIn />
      <Footer />
    </div>
  );
};

export default SignInPage;
