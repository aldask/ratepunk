"use client";
import React, { useState } from "react";
import styles from "./referalBox.module.scss";
import Image from "next/image";

function ReferralBox() {
  const [userEmail, setUserEmail] = useState("");
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const submitEmail = async () => {
    const emailData = { email: userEmail };

    try {
      const response = await fetch("https://api.jsonbin.io/v3/b", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key":
            "$2a$10$u8a23Bu9P27eyV1aFgclHeQzYV3p4dCSiHQ.zTJbaXnkac3w5/PTe",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        setSubmit(true);
      } else {
        setError("Please try again");
      }
    } catch (error) {
      setError("Please try again");
    }
  };

  const checkEmail = () => {
    if (!userEmail) {
      setError("Email is required!");
    } else if (!validateEmail(userEmail)) {
      setError("Please enter a valid email!");
    } else {
      submitEmail();
    }
  };

  const copyLink = () => {
    var input = document.getElementById("copyLink") as HTMLInputElement;
    if (input !== null) {
      input.select();
      document.execCommand("copy");
    }
  };

  return (
    <>
      {!submit ? (
        <div className={styles.referalBox}>
          <label
            htmlFor="emailBox"
            dangerouslySetInnerHTML={{ __html: error }}
            className={styles.referalBox__error}
          ></label>
          <div className={styles.referalBox__inputBox}>
            <Image src="/assets/email.svg" alt="email" width={16} height={13} />
            <input
              type="email"
              id="emailBox"
              placeholder="Enter your email address"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <button type="button" onClick={() => checkEmail()}>
            Get Referral Link
          </button>
        </div>
      ) : (
        <div className={styles.referalUrl}>
          <div className={styles.referalUrl__confirmBox}>
            <Image
              src="/assets/success.svg"
              alt="email"
              width={24}
              height={24}
            />
            <p>Your email is confirmed!</p>
          </div>
          <div className={styles.referalUrl__copy}>
            <input
              type="text"
              id="copyLink"
              value="https://ratepunk.com/referral"
              readOnly
            />
            <button onClick={() => copyLink()}>Copy</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ReferralBox;
