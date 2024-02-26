"use client";
import styles from "./banner.module.scss";
import { storeList } from "../Stores/stores";
import StoreCard from "../Stores/Store";
// @ts-ignore
import { DynamicStar } from "react-dynamic-star";

function Banner() {
  const starRating = 5;
  const starWidth = 21;
  const starHeight = 20;
  const emptyStarColor = "white";

  return (
    <div className={styles.banner}>
      <div className={styles.banner__container}>
        {storeList.map((item, index) => (
          <StoreCard
            key={index}
            title={item.title}
            href={item.link}
            image={item.image}
          />
        ))}
        <div className={styles.banner__reviews}>
          <DynamicStar
            className={styles.banner__reviews__stars}
            rating={starRating}
            outlined={true}
            width={starWidth}
            height={starHeight}
            emptyStarColor={emptyStarColor}
          />
          <p className={styles.banner__reviews__text}>Chrome Stores reviews</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
