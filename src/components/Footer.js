import React from "react";
import styles from "./Footer.module.scss";
import config from "../../data/SiteConfig";

const Footer = () => (
  <footer>
    <div className={styles.container}>
      {/* <div>
        <a
          href={`https://twitter.com/${config.userTwitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href={`https://github.com/${config.userGitHub}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href={config.siteUrl + config.siteRss}
          target="_blank"
          rel="noopener noreferrer"
        >
          RSS
        </a>
      </div> */}
      <div className={styles.copyright} style={{ fontSize: "16px" }}>
        {config.copyright}
      </div>

      <div className={styles.copyright} style={{ marginLeft: "3rem" }}>
        Made with ♥ by <a href="/about">Kashish Chugh</a>
      </div>
      <a
        href="https://www.buymeacoffee.com/kashishchugh"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.copyright}
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          style={{
            height: "60px",
            width: "217px",
            marginTop: "50px",
            marginLeft: "20px",
          }}
        />
      </a>
    </div>
  </footer>
);

export default Footer;
