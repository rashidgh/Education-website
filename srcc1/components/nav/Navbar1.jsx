import React from "react";
import Styles from "./_navbar.module.css";
import { BiMailSend } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";

const Navbar1 = () => {
  return (
    <section className={Styles.hello1}>
      <article className={Styles.helloTestYantra}>
        <div>
          <BiMailSend style={{ fontSize: "18px", paddingTop: "5px" }} />
          <a href="mailto:hello@testyantraglobal.com">
            hello@testyantraglobal.com
          </a>
        </div>
        <div className={Styles.socialConnectSec}>
          <ul className={Styles.socialConnect}>
            <li>
              <a
                href="https://www.facebook.com/testyantraglobal/"
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/testyantraGLB">
                <BsTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/testyantraglobal/">
                <FiInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/test-yantra-global/">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Navbar1;
