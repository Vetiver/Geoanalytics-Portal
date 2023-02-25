import React from "react";
import styles from "./AnalyticsSidebar.module.css";
import analitLogo from "../../images/logos/analitLogo.svg";
import buttonArrow from "../../images/logos/buttonArrow.svg";

function AnalyticsSidebar() {
  return (
    <aside className={styles.sidebar}>
      <button className={styles.hideButton}>
        <img className={styles.imgButton} src={buttonArrow} alt="arrow" />
      </button>
      <div className={styles.sideContainer}>
        <div className={styles.infoContainer}>
          <img className={styles.dataimg} src={analitLogo} alt="Logo" />
          <p className={styles.sideName}>Аналитическая панель</p>
        </div>
      </div>
    </aside>
  );
}

export default AnalyticsSidebar;
