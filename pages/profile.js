import React from "react";

/* import componenets */
import NavProfile from "../components/Com__NavProfile.js";
import SectionProfile from "../components/Com__SectionProfile.js";
import Header from "../components/Home/HeaderPage";
import Footer from "../components/Home/FooterPage";
/* import style */

import index from "../assets/style/indexStyle";

const profile = () => {
  return (
    <div>
      <Header />
      <NavProfile />
      <SectionProfile />
      <Footer />
    </div>
  );
};

export default profile;
