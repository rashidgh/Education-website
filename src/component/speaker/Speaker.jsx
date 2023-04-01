import React from "react";
import styles from "./speaker.module.css";
import location from "../../Assets/01-160x160.jpg";
import Hand from "../../Assets/02-160x160.jpg";
import Call from "../../Assets/03-160x160.jpg";
import Bulb from "../../Assets/04-160x160.jpg";
import CountUp from 'react-countup';
const Speaker = () => {
  return (
    <section className={styles.speakerBlock}>
      <article>
        <aside className={styles.aside1}>
          <h2>
            The numbers speak for <br /> themselves
          </h2>
        </aside>
        <aside className={styles.aside2}>
          <div>
            <img src={location} alt="Location" />
            <h2>
              <CountUp end={6} />
            </h2>
            <h3>
              Countries & <br />
              Growing
            </h3>
          </div>
          <div>
            <img src={Hand} alt="Location" />
            <h2>
              <CountUp end={3000} />+
            </h2>
            <h3>
              Clients Across <br /> Globe
            </h3>
          </div>
          <div>
            <img src={Call} alt="Location" />
            <h2>
              <CountUp end={5000} />+
            </h2>
            <h3>
              Team <br />
              Members
            </h3>
          </div>
          <div>
            <img src={Bulb} alt="Location" />
            <h2>
              <CountUp end={12000} />+
            </h2>
            <h3>
              One Demand <br />
              Engineers
            </h3>
          </div>
        </aside>
      </article>
    </section>
  );
};

export default Speaker;
