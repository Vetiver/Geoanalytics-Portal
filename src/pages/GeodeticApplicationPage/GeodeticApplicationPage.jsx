import React from "react";
import styles from "./GeodeticApplicationPage.module.css";
import GeodeticApplicationHeder from "../../components/GeodeticApplicationHeader/GeodeticApplicationHeder";
import Sidebar from "../../components/Sidebar/Sidebar";
import AnalyticsSidebar from "../../components/AnalyticsSidebar/AnalyticsSidebar";
import Map from "../../components/Map/map";
import Test from "../../components/Map/test";

function GeodeticApplicationPage() {
  return (
    <div className={styles.mainContainer}>
      <GeodeticApplicationHeder />
      <Sidebar />
      {/* <div className={styles.test}></div> */}
      <Test className={styles.map} />
      <AnalyticsSidebar />
    </div>
  );
}

export default GeodeticApplicationPage;
