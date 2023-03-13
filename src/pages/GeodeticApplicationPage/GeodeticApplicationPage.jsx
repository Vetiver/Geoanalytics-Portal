import React from 'react';
import styles from "./GeodeticApplicationPage.module.css";
import GeodeticApplicationHeder from "../../components/GeodeticApplicationHeader/GeodeticApplicationHeder";
import Sidebar from '../../components/Sidebar/Sidebar';
import AnalyticsSidebar from '../../components/AnalyticsSidebar/AnalyticsSidebar';



function GeodeticApplicationPage() {
  return (
    <div className={styles.mainContainer}>
      <GeodeticApplicationHeder/>
      <Sidebar/>
      <AnalyticsSidebar/>
    </div>
  );
}

export default GeodeticApplicationPage;