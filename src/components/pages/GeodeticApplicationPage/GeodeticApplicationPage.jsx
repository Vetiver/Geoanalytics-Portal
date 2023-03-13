import styles from "./GeodeticApplicationPage.module.css";
import GeodeticApplicationHeader from "../../Headers/GeodeticApplicationHeader/GeodeticApplicationHeader";
import Sidebar from "../../Sidebar/Sidebar";
import AnalyticsSidebar from "../../AnalyticsSidebar/AnalyticsSidebar";
import Test from "../../Map/test";

function GeodeticApplicationPage() {
  return (
    <div className={styles.mainContainer}>
      <GeodeticApplicationHeader />
      <Sidebar />
      <Test className={styles.map} />
      <AnalyticsSidebar />
    </div>
  );
}

export default GeodeticApplicationPage;
