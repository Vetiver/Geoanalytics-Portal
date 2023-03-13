import React, { useState } from "react";
import styles from "./AnalyticsSidebar.module.css";
import analitLogo from "../../images/logos/analitLogo.svg";
import buttonArrow from "../../images/logos/buttonArrow.svg";
import VerticalChart from "../VerticalChart/VerticalChart";
import PieChart from "../PieChart/PieChart";
import Terrain from "../Terrain/Terrain";

function AnalyticsSidebar() {
  const [selected, setSelected] = useState(true);
  const toggle = () => {
    setSelected(!selected);
  };
  return (
    selected ? 
      <aside
      className={selected === true ? `${styles.sidebar}` : `${styles.close}`}
    >
      <button
        onClick={toggle}
        className={
          selected === true
            ? `${styles.hideButton}`
            : `${styles.hideButtonNone}`
        }
      >
        <img className={styles.imgButton} src={buttonArrow} alt="arrow" />
      </button>
      <div className={styles.sideContainer}>
        <div
          className={
            selected === true
              ? `${styles.infoContainer}`
              : `${styles.infoContainerClose}`
          }
        >
          <img className={styles.dataimg} src={analitLogo} alt="Logo" />
          <p className={styles.sideName}>Аналитическая панель</p>
        </div>
        <div className={styles.analiticsContainer}>
          <Terrain close={selected}/>
          <PieChart close={selected}/>
          <VerticalChart close={selected}/>
        </div>
      </div>
    </aside>
     : <button className={styles.openButton} onClick={toggle}>
      <img className={styles.dataimg} src={analitLogo} alt="Logo" />
      <p className={styles.sideName}>Аналитическая панель</p>
      <img className={styles.openArrow} src={buttonArrow} alt="arrow" />
      </button>
    
  );
}

export default AnalyticsSidebar;
