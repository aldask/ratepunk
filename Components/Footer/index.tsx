"use client";
import React, { useState } from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import { FooterLinksArray } from "./FooterLinks/FooterLinksArray";
import { FooterSocialsArray } from "./FooterLinks/FooterSocialsArray";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <section className={styles.footerBox}>
      <div className={styles.footerBox__container}>
        <div className={styles.footerBox__container__side1}>
          <div className={styles.footerBox__container__side1__img}>
            <Image
              src="/assets/logo.svg"
              alt="ratepunk-logo"
              width={125}
              height={32}
            />
          </div>
          <div className={styles.footerBox__container__side1__description}>
            <p>
              Ratepunk compares hotel room prices across the major online travel
              agencies. When you search for a room, Ratepunk extension scans the
              top booking sites and runs a price comparison, so you can be
              confident in knowing you’re getting the best deal!
            </p>
          </div>
          <div className={styles.footerBox__container__side1__copyright__up}>
            <p>© {currentYear} Ratepunk. All Rights Reserved.</p>
          </div>
        </div>
        <div className={styles.footerBox__container__side2}>
          <div className={styles.footerBox__container__side2__title}>
            <h3>Quick Links</h3>
          </div>
          <div className={styles.footerBox__container__side2__buttons}>
            <ul>
              {FooterLinksArray.map((link) => (
                <li key={link.title}>
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.footerBox__container__side3}>
          <div className={styles.footerBox__container__side3__box1}>
            <h3 className={styles.footerBox__container__side3__box1__title}>
              Contact
            </h3>
            <a
              className={styles.footerBox__container__side3__box1__email}
              href="mailto:hi@ratepunk.com"
            >
              <div
                className={
                  styles.footerBox__container__side3__box1__email__image
                }
              >
                <Image
                  src="/assets/email.svg"
                  alt="ratepunk-logo"
                  width={16}
                  height={13}
                />
              </div>
              <div
                className={
                  styles.footerBox__container__side3__box1__email__mailto
                }
              >
                <p>hi@ratepunk.com</p>
              </div>
            </a>
          </div>
          <div className={styles.footerBox__container__side3__box2}>
            <div className={styles.footerBox__container__side3__box2__socials}>
              <h3
                className={
                  styles.footerBox__container__side3__box2__socials__title
                }
              >
                Socials
              </h3>
              <div
                className={
                  styles.footerBox__container__side3__box2__socials__list
                }
              >
                {FooterSocialsArray.map((social) => (
                  <div
                    key={social.href}
                    className={
                      styles.footerBox__container__side3__box2__socials__list__element
                    }
                  >
                    <a href={social.href}>
                      <Image
                        src={social.image}
                        alt={social.alt}
                        width={13}
                        height={13}
                        key={social.href}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBox__container__side1__copyright__down}>
          <p>© {currentYear} Ratepunk. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
