import React from "react";
import Image from "next/image";
import styles from "./step.module.scss";

interface StepItemProps {
  step: string;
  title: string;
  description: string;
  image: string;
}

const Step = ({ step, title, description, image }: StepItemProps) => {
  return (
    <div className={styles.step}>
      <div className={styles.step__description}>
        <h3>{step}</h3>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.step__image}>
        <Image src={image} alt={title} width={110} height={140} />
      </div>
    </div>
  );
};

export default Step;
