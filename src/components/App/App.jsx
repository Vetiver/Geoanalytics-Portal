import { FC } from "react";
import styles from "./App.module.css";
import MainPage from "../../components/pages/main-page/main-page";
import { Route, Routes } from "react-router-dom";
import GeodeticApplicationPage from '../../pages/GeodeticApplicationPage/GeodeticApplicationPage'

const App = () => {
  return (
    <div className={styles.page}>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/application" element={<GeodeticApplicationPage />}/>
      </Routes>
    </div>
  );
};

export default App;