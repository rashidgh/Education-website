import React from "react";
import CardSec from "./components/card/CardSec";
import Navbar1 from "./components/nav/Navbar1";
import NavbarMain from "./components/navBar/NavbarMain";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import Section4 from "./components/section4/Section4";
import Section5 from "./components/section5/Section5";

const App = () => {
  return (
    <div>
      <Navbar1 />
      <NavbarMain />
      <Section1 />
      <Section2 />
      <CardSec />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default App;
