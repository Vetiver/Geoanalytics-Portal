import { FC } from "react";
import styles from "./App.module.css";
import MainPage from "../pages/main-page/main-page";

const App = () => {
  return (
    <div className={styles.page}>
      <MainPage />
    </div>
  );
};
