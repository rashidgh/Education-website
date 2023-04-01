import React from "react";
// import bgimg from "../../Assets/background_03.jpg";
import wave1 from "../../Assets/Wave_White_bottom_left_shape_01.png";
import bodycss from "./Body.module.css";
import Text1 from "./Text1";
import Text2 from "./Text2";
import bimg1 from "../../Assets/floating_image_02.png";
import bimg2 from "../../Assets/floating_image_03.png";
import bimg3 from "../../Assets/floating_image_01.png";
import bimg4 from "../../Assets/floating_image_04.png";

const Body = () => {
  return (
    <div className={bodycss.body}>
      <img src={bimg1} className="bimg1" />
      <img src={bimg2} className="bimg2" />
      <img src={bimg3} className="bimg3" />
      <img src={bimg4} className="bimg4" />
      <Text1 />
      <Text2 />
      <img className={bodycss.img2} src={wave1} />
    </div>
  );
};
export default Body;
