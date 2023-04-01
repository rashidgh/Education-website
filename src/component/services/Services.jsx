import React from "react";
import styles from "./services.module.css";
import { BiCheckCircle } from "react-icons/bi";
import Card from "./Card";

const Services = () => {
  return (
    <section className={styles.services}>
      <aside className={styles.aside1}>
        <div className={styles.div1}>
          <h2 style={{ fontSize: "2.75em", fontWeight: "600" }}>
            Our Services & <br /> Industries
          </h2>
          <p>
            We provide industry-specific services and solutions <br /> expertise
            to Global brands across a range of verticals. <br />
            <br />
            Some of the industries that we have worked with are :
          </p>
          <ul>
            <br />
            <span className={styles.icon}>
              <BiCheckCircle style={{ fontSize: "25px" }} />
            </span>
            <li>Banking and Finance</li>
            <span className={styles.icon}>
              <BiCheckCircle style={{ fontSize: "25px" }} />
            </span>
            <li>Insurance</li>
            <span className={styles.icon}>
              <BiCheckCircle style={{ fontSize: "25px" }} />
            </span>
            <li>Retail and e-commerce</li>
            <span className={styles.icon}>
              <BiCheckCircle style={{ fontSize: "25px" }} />
            </span>
            <li>Healthcare</li>
            <span className={styles.icon}>
              <BiCheckCircle style={{ fontSize: "25px" }} />
            </span>
            <li>Information, Communication, Technology (ICT)</li>
            <span className={styles.icon}>
              <BiCheckCircle style={{ fontSize: "25px" }} />
            </span>
            <li>Education</li>
            <span className={styles.icon}>
              <BiCheckCircle style={{ fontSize: "25px" }} />
            </span>
            <li>Travel</li>
            <span className={styles.icon}>
              <BiCheckCircle style={{ fontSize: "25px" }} />
            </span>
            <li>Media and Entertainment</li>
          </ul>
        </div>
      </aside>

      <aside className={styles.aside2}>
        <div className={styles.div2}>
          <Card />
          <Card />

          <Card />
          <Card />
        </div>
      </aside>
    </section>
  );
};

export default Services;
