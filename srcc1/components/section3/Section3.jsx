import React from "react";
import Styles from "./_section3.module.css";

const Section3 = () => {
  return (
    <section className={Styles.sectionBlock3}>
      <article className={Styles.articleBlock3}>
        <div>
          <iframe
            width="786"
            height="442"
            src="https://www.youtube.com/embed/tuwxrL7Kh4E"
            title="TestYantra Global"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className={Styles.noteBoard}>
          <h1>At the forefront of innovation</h1>
          <p>
            Test Yantra Global provides industry leading expertise and advanced
            technology solution to Digitally Transform leading brands across
            various industries. Connect with one of our Expert Solutions
            Specialist to see how Test Yantra can give your organization a
            leading edge.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Section3;
