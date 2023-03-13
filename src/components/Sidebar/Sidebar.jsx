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
          <label class={styles.label}>
            One
            <input type="checkbox" />
            <span class={styles.checkmark}></span>
          </label>

          <label class={styles.label}>
            Two
            <input type="checkbox" />
            <span class={styles.checkmark}></span>
          </label>

          <label class={styles.label}>
            Three
            <input type="checkbox" />
            <span class={styles.checkmark}></span>
          </label>

          <label class={styles.label}>
            Four
            <input type="checkbox" />
            <span class={styles.checkmark}></span>
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
