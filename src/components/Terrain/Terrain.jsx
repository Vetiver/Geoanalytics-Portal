import React from 'react';
import styles from "./Terrain.module.css";

function Terrain() {
    return (
        <div className={styles.terrainContainer}>
            <h3 className={styles.header}>Forest</h3>
            <p className={styles.text}>Воронежская область</p>
            <p className={styles.text}>общая пплощадь</p>
            <p className={styles.text}>1000кв. к.</p>
            <p className={styles.text}>какая-то инфа</p>
            <p className={styles.text}>11/12/2023</p>
            
        </div>
    );
}

export default Terrain;