import React from "react";
import styles from "./GeodeticApplicationHeader.module.css";
import logo from "../../images/logos/logo.svg";
import arrowLeft from "../../images/logos/arrow-left.svg";
import { Link } from "react-router-dom";

function GeodeticApplicationHeder() {
  return (
    <header className={styles.header}>
      <img className={styles.image} src={logo} alt="Logo" />
      <p className={styles.demo}>Демо-приложение</p>
      <Link to="/" className={styles.link}>
        <img className={styles.arrowLeft} src={arrowLeft} alt="Logo" />
        <p className={styles.back}>Вернуться на сайт</p>
      </Link>
    </header>
  );
}

export default GeodeticApplicationHeder;
