import React from "react";
import Cards from "./Cards";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Styles from "./_card.module.css";

const CardSec = () => {
  return (
    <section>
      <article className={Styles.cardsArticle}>
        <div className={Styles.cardsDiv1}>
          <Card2 />
          <Cards />
        </div>
        <div className={Styles.cardsDiv2}>
          <Card3 />
          <Card4 />
        </div>
      </article>
    </section>
  );
};

export default CardSec;
