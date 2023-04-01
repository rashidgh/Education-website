import React from "react";
import styles from "./header.module.css";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.headerBlock}>
      <div>
        <aside className={styles.aside1}>
          <span style={{ margin: "3px 10px 0px 0px" }}>
            <MdOutlineLocalPostOffice />
          </span>
          <a
            style={{ fontWeight: "100", fontSize: "14px", color: "#000" }}
            href="mailto:hello@testyantraglobal.com"
          >
            <p>hello@testyantraglobal.com</p>
          </a>
        </aside>
        <aside className={styles.aside2}>
          <span>
            <GrFacebookOption />
          </span>
          <span>
            <IoLogoTwitter />
          </span>
          <span>
            <FiInstagram />
          </span>
          <span>
            <FaLinkedinIn />
          </span>
        </aside>
      </div>
    </div>
  );
};

export default Header;
