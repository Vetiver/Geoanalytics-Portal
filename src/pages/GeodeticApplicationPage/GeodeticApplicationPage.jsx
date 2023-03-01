import React from 'react';
import styles from "./GeodeticApplicationPage.module.css";
import GeodeticApplicationHeder from "../../components/GeodeticApplicationHeader/GeodeticApplicationHeder";
import Sidebar from '../../components/Sidebar/Sidebar';
import AnalyticsSidebar from '../../components/AnalyticsSidebar/AnalyticsSidebar';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";



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