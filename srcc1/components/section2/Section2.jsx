import React from "react";
import Styles from "./_section2.module.css";
import { BiCheckCircle } from 'react-icons/bi';
import WhiteBottom from "../../assets/white_bottom_wave_01.png"

const Section2 = () => {
  return (
    <section className={Styles.sec2}>
      <article className={Styles.art2}>
        <aside className={Styles.asd2}>
          <div>
            <h1>Our Services & Industries</h1>
            <p>
              We provide industry-specific services and solutions expertise to
              Global brands across a range of verticals.
            </p>
            <p>Some of the industries that we have worked with are :</p>

            <ul className={Styles.ul2}>
              <li>
                <a
                  href="https://testyantraglobal.com/services/bankingfinance-2/"
                  target="_blank"
                >
                  <span>
                    <BiCheckCircle className={Styles.checkIcon} />
                    Banking and Finance
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://testyantraglobal.com/services/insurance/"
                  target="_blank"
                >
                  <span>
                    <BiCheckCircle className={Styles.checkIcon} />
                    Insurance
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://testyantraglobal.com/services/retail__e-commerce/"
                  target="_blank"
                >
                  <span>
                    <BiCheckCircle className={Styles.checkIcon} />
                    Retail and e-commerce
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://testyantraglobal.com/services/healthcare/"
                  target="_blank"
                >
                  <span>
                    <BiCheckCircle className={Styles.checkIcon} />
                    Healthcare
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://testyantraglobal.com/services/technologycommunications/"
                  target="_blank"
                >
                  <span>
                    <BiCheckCircle className={Styles.checkIcon} />
                    Information, Communication, Technology (ICT)
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://testyantraglobal.com/services/education/"
                  target="_blank"
                >
                  <span>
                    <BiCheckCircle className={Styles.checkIcon} />
                    Education
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://testyantraglobal.com/services/travel/"
                  target="_blank"
                >
                  <span>
                    <BiCheckCircle className={Styles.checkIcon} />
                    Travel
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://testyantraglobal.com/services/media__entertainment/"
                  target="_blank"
                >
                  <span>
                    <BiCheckCircle className={Styles.checkIcon} />
                    Media and Entertainment{" "}
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className={Styles.whiteBottom}>
            <img src={WhiteBottom} alt="" />
          </div>
        </aside>
      </article>
    </section>
  );
};

export default Section2;
