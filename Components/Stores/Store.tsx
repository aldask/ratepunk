import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./store.module.scss";

interface StoreCardProps {
  title: string;
  href: string;
  image: string;
}

const StoreCard = ({ title, href, image }: StoreCardProps) => {
  return (
    <Link href={href} className={styles.storeCard}>
      <div>
        <Image
          className={styles.storeCard__image}
          src={image}
          alt="stores"
          width={60}
          height={52}
        />
      </div>
      <div className={styles.storeCard__info}>
        <p className={styles.storeCard__info__text}>available in the</p>
        <h3 className={styles.storeCard__info__title}>{title}</h3>
      </div>
    </Link>
  );
};

export default StoreCard;
