import React,{ useState } from "react";
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
    <aside className={ selected === true ? `${styles.sidebar}` : `${styles.close}`}>
      <div className={styles.sideContainer}>
        <div className={styles.infoContainer}>
          <img className={styles.dataimg} src={data} alt="Logo" />
          <p className={styles.sideName}>Управление данными</p>
        </div>
        <ul className={styles.checkboxContainer}>
          <li>
            <input type="checkbox" />
            <label className={styles.checkboxName}>agro</label>
          </li>
          <li>
            <input type="checkbox" />
            <label className={styles.checkboxName}>forest</label>
          </li>
          <li>
            <input type="checkbox" />
            <label className={styles.checkboxName}>boundaries</label>
          </li>
        </ul>
      </div>
      <button onClick={toggle} className={styles.hideButton}>
        <img className={styles.imgButton} src={buttonArrow} alt="arrow" />
      </button>
    </aside>
  );
}

export default Sidebar;
