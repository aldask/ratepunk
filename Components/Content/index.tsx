import React from "react";
import styles from "./content.module.scss";
import EmailBox from "../EmailBox/EmailBox";

function Content() {
  return (
    <section className={styles.contentBox}>
      <div className={styles.contentBox__side1}>
        <EmailBox />
      </div>
      <div className={styles.contentBox__side2}>steps</div>
    </section>
  );
}

export default Content;
