import React, { useEffect } from "react";
import styles from "./App.module.css";
import MainPage from "../../components/pages/main-page/main-page";
import { Route, Routes } from "react-router-dom";
import GeodeticApplicationPage from '../../pages/GeodeticApplicationPage/GeodeticApplicationPage';
import { useDispatch, useSelector } from "react-redux";
import { getAnalitic } from "../../services/actions/analitic";



const App = () => {
  const dispatch = useDispatch();
  const analitic = useSelector((state) => state.analiticReduser.allAnalitic);
  console.log(analitic);
  useEffect(() => {
    dispatch(getAnalitic())
  }, []);
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