import React from "react";
import Styles from "./_section4.module.css";
import img1 from "../../assets/01-160x160.jpg";
import img2 from "../../assets/02-160x160.jpg";
import img3 from "../../assets/03-160x160.jpg";
import img4 from "../../assets/04-160x160.jpg";
import FloatImg from "../../assets/floating_image_04_1.png";
import CountUp from "react-countup";

const Section4 = () => {
  return (
    <section className={Styles.sectionBlock4}>
      <article className={Styles.articleBlock4}>
        <div className={Styles.heading}>
          <h1>The numbers speak for themselves</h1>
        </div>
        <div className={Styles.img}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </article>

      <div className={Styles.couter}>
        <p>
          <CountUp end={6} duration={10} />
        </p>
        <p>
          <CountUp end={3000} duration={5} />+
        </p>
        <p>
          <CountUp end={5000} duration={5} />+
        </p>
        <p>
          <CountUp end={12000} duration={5} />+
        </p>
      </div>
      <div className={Styles.subTitle}>
        <h6>
          Countries & <br />
          Growing
        </h6>
        <h6>
          Clients Across
          <br />
          Globe
        </h6>
        <h6>
          Team
          <br />
          Members
        </h6>
        <h6>
          On Demand
          <br />
          Engineers
        </h6>
      </div>
      <div className={Styles.floatImg}>
        <img src={FloatImg} alt="" width="300px"/>
      </div>
    </section>
  );
};

export default Section4;
