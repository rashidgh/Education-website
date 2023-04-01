import React from "react";
import styles from "./carosel.module.css";
import footerpic from "../../Assets/Wave_White_bottom_left_shape_01.png";
import img1 from "../../Assets/floating_image_02.png";
import img2 from "../../Assets/floating_image_04.png";
import img3 from "../../Assets/floating_image_03.png";

const Carosel = () => {
  return (
    <section style={{ color: "#fff" }} className={styles.carosel}>
      <div className={styles.text}>
        <h2 style={{ fontSize: "4rem", fontWeight: "400" }}>
          Enabling the Digital
        </h2>
        <h2 style={{ fontSize: "6.25rem", fontWeight: "900" }}>
          Transformation
        </h2>
        <p style={{ fontSize: "1.62rem", fontWeight: "400" }}>
          Test Yantra Global provides a range of innovative <br /> technology
          solutions to digitally transform your <br /> organization.
        </p>
      </div>
      <div className={styles.footerpic}>
        
        <img src={img1} style={{ position: "absolute", top: "5em" }} alt="" />
        <img
          src={img2}
          style={{
            position: "absolute",
            top: "10em",
            left: "-4em",
            zIndex: "2",
          }}
          alt=""
        />
        <img
          src={img3}
          style={{
            position: "absolute",
            top: "10em",
            right: "0em",
          }}
          alt=""
        />
        <img
          height="200px"
          width="100%"
          style={{ position: "absolute", top: "30em" }}
          src={footerpic}
          alt="img"
        />
      </div>
      
    </section>
  );
};

export default Carosel;
