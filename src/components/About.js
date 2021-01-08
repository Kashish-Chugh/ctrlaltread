import React from "react";
import config from "../../data/SiteConfig";
import styles from "./About.module.scss";
import BioStyle from "./Bio.module.scss";
import Social from "./Social";
import SocialLinks from "./SocialLinks";

const About = () => (
  <div style={{ flexDirection: "row", display: "flex" }}>
    <div style={{ flex: 2 }}>
      <img
        src={require("../../content/images/avatar.png")}
        alt="Kashish Chugh"
        className={BioStyle.avatar}
      />
    </div>
    <div
      style={{
        flex: 4,
        flexDirection: "column",
      }}
    >
      <h1>Kashish Chugh</h1>
      <p>
        I'm Kashish Chugh, a Software Developer from India. I am really
        passionate about ..., ...,.... I love to write about different things I
        learn in my everyday life and share my experience with the world.
      </p>
      <h4
        style={{
          textAlign: "center",
        }}
      >
        Hey you, listen! Let's connect.
      </h4>
      <Social />
    </div>
  </div>
);

export default About;
