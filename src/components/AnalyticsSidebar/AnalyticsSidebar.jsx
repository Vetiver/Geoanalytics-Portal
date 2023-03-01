import React,{ useState } from "react";
import styles from "./AnalyticsSidebar.module.css";
import analitLogo from "../../images/logos/analitLogo.svg";
import buttonArrow from "../../images/logos/buttonArrow.svg";

function AnalyticsSidebar() {
  const [selected, setSelected] = useState(true);
  const toggle = () => {
    setSelected(!selected);
    console.log(selected);
  };
  return (
    <aside className={selected === true ? `${styles.sidebar}` : `${styles.close}`}>
      <button onClick={toggle} className={selected === true ? `${styles.hideButton}` : `${styles.hideButtonNone}`}>
        <img className={styles.imgButton} src={buttonArrow} alt="arrow" />
      </button>
      <div className={styles.sideContainer}>
        <div className={selected === true ? `${styles.infoContainer}` : `${styles.infoContainerClose}`}>
          <img className={styles.dataimg} src={analitLogo} alt="Logo" />
          <p className={styles.sideName}>Аналитическая панель</p>
        </div>
      </div>
    </aside>
  );
}

export default AnalyticsSidebar;
