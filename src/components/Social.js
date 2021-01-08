import React from "react";
import Icon from "./Icon";
import styles from "./Social.module.scss";

export default function Social() {
  const post = { title: "abc" };
  const url = "abc.com";
  const iconSize = 32;
  return (
    <div
      className={styles.iconDiv}
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "fit-content",
          alignSelf: "center",
          justifySelf: "center",
        }}
      >
        <a
          href="https://twitter.com/kashish_chugh"
          className={styles.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../public/logos/twitter.png")}
            className={styles.icon}
            alt="twitter"
          />
        </a>
        <a
          href="https://www.instagram.com/kashishchugh12/"
          className={styles.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../public/logos/instagram.png")}
            className={styles.icon}
            alt="twitter"
          />
        </a>
        <a
          href="https://kashishchugh.medium.com/"
          className={styles.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../public/logos/medium.png")}
            className={styles.icon}
            alt="twitter"
          />
        </a>
        <a
          href="https://github.com/Kashish-Chugh"
          className={styles.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../public/logos/github.png")}
            className={styles.icon}
            alt="twitter"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kashishchugh12"
          className={styles.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../public/logos/linkedin.png")}
            className={styles.icon}
            alt="twitter"
          />
        </a>
      </div>
    </div>
  );
}
