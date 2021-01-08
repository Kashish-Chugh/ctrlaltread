import React from "react";
import { Link } from "gatsby";
import config from "../../data/SiteConfig";
import styles from "./Header.module.scss";

const Header = () => (
  <header>
    <h1>
      <Link to="/" activeClassName={styles.activeNav}>
        {config.siteTitle}
      </Link>
    </h1>
    <nav>
      <ul className={styles.mainNav}>
        <li>
          <Link to="/about" activeClassName={styles.activeNav}>
            About
          </Link>
        </li>
        {/* <Categories activeClassName={styles.activeNav} /> */}
        <li>
          <Link to="/contact" activeClassName={styles.activeNav}>
            Contact
          </Link>
        </li>
        <li>
          <a
            href="https://www.buymeacoffee.com/kashishchugh"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.copyright}
          >
            <img
              src={require("../../content/images/BMC.png")}
              alt="Buy Me A Coffee"
              style={{
                width: "30px",
                height: "35px",
                marginTop: "5px",
              }}
            />
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
