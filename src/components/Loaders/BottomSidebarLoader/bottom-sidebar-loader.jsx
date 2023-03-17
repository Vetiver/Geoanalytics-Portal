import classNames from "classnames";
import { useState } from "react";
import Terrain from "../../Terrain/Terrain";
import styles from "./bottom-sidebar-loader.module.css";
import { analyticsLogo } from "../../../images/logos/logos";

function BottomSidebarLoader() {
  const [selected, setSelected] = useState(true);

  const isInfoContainerVisible = classNames({
    [styles.infoContainer]: selected,
    [styles.infoContainerIsHidden]: !selected,
  });

  return (
    <>
      <div className={styles.sideContainer}>
        <div className={isInfoContainerVisible}>
          <img src={analyticsLogo} alt="Logo" />
          <p className={styles.sideName}>Аналитическая панель</p>
        </div>
        <div className={styles.analyticsContainer}>
          <Terrain close={selected} loading={true} />
          <LoadingBlock />
          <LoadingBlock />
        </div>
      </div>
    </>
  );
}

function LoadingBlock() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingBlock}></div>
      <div className={styles.loadingBlock}></div>
    </div>
  );
}

export default BottomSidebarLoader;
