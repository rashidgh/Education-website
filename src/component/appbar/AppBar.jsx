import React from "react";
import styles from "./appBar.module.css";
import { BiSearch } from "react-icons/bi";

const AppBar = () => {
  return (
    <div className={styles.appBar}>
      <div>
        <aside className={styles.aside1}>
          <img
            src="https://testyantraglobal.com/wp-content/uploads/2022/03/TY_logo_color_70px.png"
            alt="testyantra global"
          />
        </aside>
        <aside className={styles.aside2}>
          <ul>
            <div>
              <li style={{ cursor: "pointer" }}>Home</li>
            </div>
            <div className={styles.Services}>
              <li className={styles.lii}>Services</li>
              <ul className={styles.list}>
                <li>Softwere Devlopment</li>
                <li>Softwere Testing</li>
                <li>Elevate It Training</li>
                <li>It consulting & manged services</li>
              </ul>
            </div>
            <div className={styles.Products}>
              <li className={styles.lii}>Products</li>
              <ul className={styles.list}>
                <li>-SkillRary</li>
                
              </ul>
            </div>
            <div className={styles.Industries}>
              <li className={styles.lii}>Industries</li>
              <ul className={styles.list}>
                <li>Banking & finance</li>
                <li>Insurance</li>
                <li>Health Care</li>
                <li>Retails & E-commerce</li>
                <li>Technology & Communication</li>
                <li>Education</li>
                <li>Travel</li>
                <li>Media & Entertainment</li>
              </ul>
            </div>
            <div className={styles.Blog}>
              <li className={styles.lii}>Blog</li>
              
            </div>
            <div className={styles.About}>
              <li className={styles.lii}>About</li>
              <ul className={styles.list}>
                <li>About Us</li>
                <li>Our purpose & mission</li>
                <li>Articles</li>
                <li>Carrers</li>
                <li>Contact</li>
              </ul>
            </div>
            <li className={styles.serach}>
              <span>
                <BiSearch />
              </span>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default AppBar;
