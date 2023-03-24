import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import data from "../../images/logos/data.svg";
import { arrowButton } from "../../images/logos/logos";
import { useDispatch } from "react-redux";
import {TOGGLE_FOREST, TOGGLE_AGRO} from "../../services/actions/map"
function Sidebar() {
  const dispatch = useDispatch();
  const [forestSelected, setForestSelected] = useState(true);
  const toggle = () => {
    setForestSelected(!forestSelected);
  };
  return forestSelected ? (
    <aside
      className={forestSelected === true ? `${styles.sidebar}` : `${styles.close}`}
    >
      <div className={styles.sideContainer}>
        <div className={styles.infoContainer}>
          <img className={styles.dataImg} src={data} alt="Logo" />
          <p className={styles.sideName}>Управление данными</p>
        </div>
        <div className={styles.checkboxContainer}>
          <label className={styles.label}>
            agro
            <input type="checkbox" onChange={() => dispatch({ type: TOGGLE_FOREST })} />
            <span className={styles.checkMark}></span>
          </label>

          <label className={styles.label}>
            forest
            <input type="checkbox" onChange={() => dispatch({ type: TOGGLE_AGRO })} />
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
