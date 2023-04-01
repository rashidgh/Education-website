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
          <span
            style={{ margin: "3px 10px 0px 0px" }}
            className={styles.header}
          >
            <MdOutlineLocalPostOffice />
          </span>
          <p
            style={{ fontWeight: "100", fontSize: "14px" }}
            className={styles.header}
          >
            hello@testyantraglobal.com
          </p>
        </aside>
        <aside className={styles.aside2}>
          <span className={styles.header}>
            <GrFacebookOption />
          </span>
          <span className={styles.header}>
            <IoLogoTwitter />
          </span>
          <span className={styles.header}>
            <FiInstagram />
          </span>
          <span className={styles.header}>
            <FaLinkedinIn />
          </span>
        </aside>
      </div>
    </div>
  );
};

export default Header;
