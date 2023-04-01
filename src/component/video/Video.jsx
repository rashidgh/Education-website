import React from "react";
import styles from "./video.module.css";

const Video = () => {
  return (
    <section className={styles.videoBlock}>
      <article>
        <aside>
          <iframe
            width="787"
            height="442"
            src="https://www.youtube.com/embed/tuwxrL7Kh4E"
            title="TestYantra Global"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </aside>
        <aside className={styles.aside2}>
          <h2
            style={{ fontSize: "35px", marginBottom: "1em", color: "orange" }}
          >
            At the forefront of innovation
          </h2>
          <p>
            Test Yantra Global provides industry leading expertise and advanced
            technology solution to Digitally Transform leading brands across
            various industries. Connect with one of our Expert Solutions
            Specialist to see how Test Yantra can give your organization a
            leading edge.
          </p>
        </aside>
      </article>
    </section>
  );
};

export default Video;
