import React from "react";
import styles from "./styles.module.css";

const Stepper = ({ label, sub, index, selected }) => {
  return (
    <div className={styles.step_block}>
      <div className={styles.circle_wrapper}>
        <div className={selected !== index ? styles.circle : styles.selected}>
          {index + 1}
        </div>
      </div>
      <div className={styles.labels}>
        <span className={styles.label}>{label}</span>
        <span className={styles.sub}>{sub}</span>
      </div>
    </div>
  );
};

export default Stepper;
