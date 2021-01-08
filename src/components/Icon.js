import React from "react";
import styles from "./Icon.module.scss";

export default function Icon({ icon }) {
  return (
    <div>
      <svg className={styles.svg} viewBox={icon.viewBox}>
        <title>{icon.title}</title>
        <path d={icon.path} />
      </svg>
    </div>
  );
}
