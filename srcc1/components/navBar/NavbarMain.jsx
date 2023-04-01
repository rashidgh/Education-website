import React from 'react';
import TYSSlogo from "../../assets/TY_logo_color_70px.png";
import Styles from "./_navMain.module.css";
import {BiSearch} from "react-icons/bi"
// import { Link } from 'react-router-dom';

const NavbarMain = () => {
  return (
    <section className={Styles.navMain}>
      <article className={Styles.navMain1}>
        <div>
          <a>
            <img src={TYSSlogo} alt="TYSS" className={Styles.navMainLogo} />
          </a>
        </div>
        <div className={Styles.menuBlock}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Industries</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">
                <BiSearch />
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default NavbarMain
