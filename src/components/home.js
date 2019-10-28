import React from "react";
import Navi from "./navbar";
import Banner from "./banner";
import Cards from "./cards";
import Resources from "./resources";
import Contact from "./contact";
import Footer from "./footer";

const Homepage = () => {
  return (
    <div>
      <Navi />
      <Banner />
      <Cards />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
