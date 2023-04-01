import React from "react";
import "./App.css";
import Header from "./component/header/Header";
import AppBar from "./component/appbar/AppBar";
import Carosel from "./component/carosel/Carosel";
import Services from "./component/services/Services"
import Video from "./component/video/Video";
const Speaker = React.lazy(() => import("./component/speaker/Speaker"));
const Footer = React.lazy(() => import("./component/footer/Footer.jsx"));

const App = () => {
  return (
    <div>
      <Header />
      <AppBar />
      <Carosel />
      <Services />
      <Video />
      <Speaker />
      <Footer />
    </div>
  );
};

export default App;
