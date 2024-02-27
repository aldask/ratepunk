import React from "react";
import styles from "./emailBox.module.scss";
import ReferalBox from "../EmailInput";

function EmailBox() {
  return (
    <section className={styles.emailBox}>
      <div className={styles.emailBox__title}>
        <h1>REFER FRIENDS AND GET REWARDS</h1>
      </div>
      <div className={styles.emailBox__txt}>
        <p>
          Refer your friends to us and earn hotel booking vouchers. We'll give
          you 1 coin for each friend that installs our extension. Minimum
          cash-out at 20 coins.
        </p>
      </div>
      <ReferalBox />
      <div className={styles.emailBox__footer}>
        <p>Limits on max rewards apply.</p>
      </div>
    </section>
  );
}

export default EmailBox;
