import { useEffect, useMemo } from "react";
import styles from "./App.module.css";
import MainPage from "../../components/pages/main-page/main-page";
import { Route, Routes } from "react-router-dom";
import GeodeticApplicationPage from "../pages/GeodeticApplicationPage/GeodeticApplicationPage";
import { useDispatch, useSelector } from "react-redux";
import { getAnalytic } from "../utils/fetches";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnalytic());
  }, []);
  return (
    <div className={styles.page}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/application" element={<GeodeticApplicationPage />} />
      </Routes>
    </div>
  );
};

export default App;
