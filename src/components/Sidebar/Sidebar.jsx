import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import data from "../../images/logos/data.svg";
import { arrowButton } from "../../images/logos/logos";

function Sidebar() {
  const [selected, setSelected] = useState(true);
  const toggle = () => {
    setSelected(!selected);
  };
  return selected ? (
    <aside
      className={selected === true ? `${styles.sidebar}` : `${styles.close}`}
    >
      <div className={styles.sideContainer}>
        <div className={styles.infoContainer}>
          <img className={styles.dataImg} src={data} alt="Logo" />
          <p className={styles.sideName}>Управление данными</p>
        </div>
        <div className={styles.checkboxContainer}>
          <label className={styles.label}>
            agro
            <input type="checkbox" />
            <span className={styles.checkMark}></span>
          </label>

          <label className={styles.label}>
            forest
            <input type="checkbox" />
            <span className={styles.checkMark}></span>
          </label>

          <label className={styles.label}>
            boundaries
            <input type="checkbox" />
            <span className={styles.checkMark}></span>
          </label>
        </div>
      </div>
      <button onClick={toggle} className={styles.hideButton}>
        <img className={styles.imgButton} src={arrowButton} alt="arrow" />
      </button>
    </aside>
  ) : (
    <button onClick={toggle} className={styles.openButton}>
      <img className={styles.dataImg} src={data} alt="Logo" />
      <img className={styles.openArrow} src={arrowButton} alt="arrow" />
    </button>
  );
}

export default Sidebar;
