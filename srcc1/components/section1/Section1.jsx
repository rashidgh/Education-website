import React from "react";
import Styles from "./_section1.module.css";
import Wave from "../../assets/1.png";
import Floating4 from "../../assets/floating_image_04.png";
import Floating3 from "../../assets/floating_image_03.png";
import Floating2 from "../../assets/floating_image_02.png";
import Floating1 from "../../assets/floating_image_01_top.png";

const Section1 = () => {
  return (
    <section className={Styles.sec1}>
      <article>
        <div>
          <div className={Styles.Ennab}>
            <h3>Enabling the Digital</h3>
            <h1>Transformation</h1>
            <div>
              Test Yantra Global provides a range of innovative technology
              solutions to digitally transform your organization.
            </div>
          </div>
        </div>

        <div className={Styles.Ennabimg}>
          <img
            src={Wave}
            alt=""
            width="100%"
            height="auto"
            className={Styles.Wave}
          />
          <img src={Floating4} alt="" className={Styles.Floating4} />
          <img src={Floating3} alt="" className={Styles.Floating3} />
          <img src={Floating2} alt="" className={Styles.Floating2} />
          <img src={Floating1} alt="" className={Styles.Floating1} />
        </div>
      </article>
    </section>
  );
};

export default Section1;
