import React from 'react';
import styles from "./services.module.css";
import {IoIosArrowDropright} from "react-icons/io"
import portfolio from "../../Assets/portfolio_01-1280x960.jpg";

const Card = () => {
  return (
    <section className={styles.Card}>
      <article>
        <aside className={styles.aside1}>
          <img src={portfolio} alt="portfolio" />
        </aside>
        <aside className={styles.aside2}>
          <h2>Software Design and Development</h2>
          <p>
            We deliver IT solutions in a wide variety of verticals and elevate
            businesses to the next level.
          </p>
          <div className={styles.footer}>
            <span>READ MORE</span>
            <span style={{fontSize:"20px",marginTop:"5px",marginLeft:"10px"}}>
              <IoIosArrowDropright />
            </span>
          </div>
        </aside>
      </article>
    </section>
  );
}

export default Card