import React, { useState } from "react";
import styles from "./AnalyticsSidebar.module.css";
import VerticalChart from "../Charts/VerticalChart/VerticalChart";
import DoughnutChart from "../Charts/DoughnutChart/doughnut-chart";
import Terrain from "../Terrain/Terrain";
import classNames from "classnames";
import { arrowButton, analyticsLogo } from "../../images/logos/logos";
import BottomSidebarLoader from "../Loaders/BottomSidebarLoader/bottom-sidebar-loader";
import { useSelector } from "react-redux";

function AnalyticsSidebar() {
  const [selected, setSelected] = useState(true);
  const analytics = useSelector(
    (state) => state.analyticReducer.verticalAnalytics
  );
  const toggle = () => {
    setSelected(!selected);
  };

  const isSidebarOpened = classNames({
    [styles.sidebar]: selected,
    [styles.sidebarIsClosed]: !selected,
  });

  const isHideButtonVisible = classNames({
    [styles.hideButton]: selected,
    [styles.hideButtonIsHidden]: !selected,
  });

  const isInfoContainerVisible = classNames({
    [styles.infoContainer]: selected,
    [styles.infoContainerIsHidden]: !selected,
  });

  return selected ? (
    <aside className={isSidebarOpened}>
      <button onClick={toggle} className={isHideButtonVisible}>
        <img className={styles.imgButton} src={arrowButton} alt="arrow" />
      </button>
      <div className={styles.sideContainer}>
        <div className={isInfoContainerVisible}>
          <img src={analyticsLogo} alt="Logo" />
          <p className={styles.sideName}>Аналитическая панель</p>
        </div>
        { analytics ? <div className={styles.analyticsContainer}>
          <Terrain close={selected} />
          <DoughnutChart hidden={selected} />
          <VerticalChart close={selected} />
        </div> :  <BottomSidebarLoader /> }
       
        
      </div>
    </aside>
  ) : (
    <button className={styles.openButton} onClick={toggle}>
      <img src={analyticsLogo} alt="Logo" />
      <p className={styles.sideName}>Аналитическая панель</p>
      <img className={styles.openArrow} src={arrowButton} alt="arrow" />
    </button>
  );
}

export default AnalyticsSidebar;
