import React from "react";
import styles from "./content.module.scss";
import EmailBox from "../EmailBox/EmailBox";
import Step from "../Steps";
import { stepsList } from "../Steps/steps";

function Content() {
  return (
    <section className={styles.contentBox}>
      <div className={styles.contentBox__side1}>
        <EmailBox />
      </div>
      <div className={styles.contentBox__side2}>
        {stepsList.map((step) => (
          <Step
            key={step.step}
            step={step.step}
            title={step.title}
            description={step.description}
            image={step.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Content;
