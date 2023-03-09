import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import data from "../../images/logos/data.svg";
import buttonArrow from "../../images/logos/buttonArrow.svg";

function Sidebar() {
  const [selected, setSelected] = useState(true);
  const toggle = () => {
    setSelected(!selected);
    console.log(selected);
  };
  return (
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
            <span className={styles.checkmark}></span>
          </label>

          <label className={styles.label}>
          forest
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
          </label>

          <label className={styles.label}>
          boundaries
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
          </label>
        </div>
      </div>
      <button onClick={toggle} className={styles.hideButton}>
        <img className={styles.imgButton} src={buttonArrow} alt="arrow" />
      </button>
    </aside>
  );
}

export default Sidebar;
