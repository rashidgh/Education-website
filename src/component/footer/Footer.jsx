import React from "react";
import styles from "./footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaHeadphones } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import TyLogoG from "../../Assets/ty_global_1-1-160x160.png";
const Footer = () => {
  return (
    <section className={styles.footerBlock}>
      <article>
        <aside className={styles.aside1}>
          <h2
            style={{ fontSize: "35px", marginRight: "1em", fontWeight: "400" }}
          >
            Subscribe to our Newsletter
          </h2>
          <input
            type="text"
            name=""
            id=""
            placeholder="Your email"
            style={{
              padding: "15px",
              width: "30em",
              borderRadius: "30px",
              height: "4em",
              border: "1px solid grey",
            }}
          />
          <button>Subscribe</button>
        </aside>
        <aside className={styles.aside2}>
          <div className={styles.div1}>
            <img src={TyLogoG} alt="TestYantra Global" />
          </div>
          <div className={styles.div2}>
            <ul>
              <h3>Home</h3>
              <li>About Us</li>
              <li>Work With Us</li>
              <li>Contact</li>
              <li>Case Studies</li>
            </ul>
            <ul>
              <h3>Services</h3>
              <li>Software Development</li>
              <li>Software Testing</li>
              <li>Elevate -IT training services</li>
              <li>IT consulting</li>
            </ul>
          </div>
          <div className={styles.div3}>
            <ul>
              <h3>Industries</h3>
              <li>Banking & Finance</li>
              <li>Insurance</li>
              <li>Healthcare</li>
              <li>Retail & e-commerce</li>
              <li>Technology and Communications</li>
              <li>Education</li>
              <li>Travel</li>
              <li>Media and Entertainment</li>
            </ul>
          </div>
          <div className={styles.div4}>
            <h3 style={{ marginBottom: "2em" }}>Connect</h3>
            <span className={styles.icon}>
              <FaFacebookF />
            </span>
            <span className={styles.icon}>
              <SiTwitter />
            </span>
            <span className={styles.icon}>
              <RiInstagramLine />
            </span>
            <span className={styles.icon}>
              <FaLinkedinIn />
            </span>
            <ul style={{ marginTop: "2em" }}>
              <div style={{ display: "flex" }}>
                <span style={{ margin: "0.8em 0.5em 0 0" }}>
                  <FaHeadphones />
                </span>
                <li>Ph: +1 888 980 7010</li>
              </div>
              <div style={{ display: "flex" }}>
                <span style={{ margin: "0.8em 0.5em 0 0" }}>
                  <HiMail />
                </span>
                <a href="mailto:hello@testyantraglobal.com">
                  <li>hello@testyantraglobal.com</li>
                </a>
              </div>
            </ul>
          </div>
        </aside>
        <aside className={styles.aside3}>
          <div>
            <div>
              <p>©2022 Test Yantra Global. All rights reserved</p>
            </div>
            <div style={{ display: "flex", gap: "30px" }}>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>
        </aside>
      </article>
    </section>
  );
};

export default Footer;
