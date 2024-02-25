"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./header.module.scss";

function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  function handleMobileNav() {
    setMobileNav(!mobileNav);
  }

  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [mobileNav]);

  return (
    <header className={styles.header}>
      {/* Desktop View */}
      <div className={styles.header__desktop}>
        <div className={styles.header__desktop__image}>
          <Image
            src="/assets/logo.svg"
            alt="ratepunk-logo"
            width={125}
            height={32}
          />
        </div>
        <div className={styles.header__desktop__buttonsList}>
          <ul>
            <li>
              <a href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk">
                Chrome Extension
              </a>
            </li>
            <li>
              <a href="google.lt">Price Comparison</a>
            </li>
            <li>
              <a href="google.lt">Blog</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile View */}
      <div
        className={`${styles.header__mobile} ${mobileNav ? styles.active : ""}`}
      >
        <div className={styles.header__mobile__top}>
          <div className={styles.header__mobile__image}>
            <Image
              src="/assets/logo.svg"
              alt="ratepunk-logo"
              width={125}
              height={32}
            />
          </div>
          <div
            className={styles.header__mobile__exit}
            onClick={handleMobileNav}
          >
            {mobileNav ? (
              <Image
                src="/assets/close.svg"
                alt="close_menu"
                width={25}
                height={25}
              />
            ) : (
              <Image src="/assets/menu.svg" alt="menu" width={25} height={25} />
            )}
          </div>
        </div>
        <div className={styles.header__mobile__buttonsList}>
          {mobileNav && (
            <ul>
              <li>
                <a href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk">
                  Chrome Extension
                </a>
              </li>
              <li>
                <a href="google.lt">Price Comparison</a>
              </li>
              <li>
                <a href="google.lt">Blog</a>
              </li>
            </ul>
          )}
        </div>
      </div>

      {mobileNav && (
        <div className={styles.header__overlay} onClick={handleMobileNav}></div>
      )}
    </header>
  );
}

export default Header;
