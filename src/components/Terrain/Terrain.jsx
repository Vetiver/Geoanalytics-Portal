import React from 'react';
import styles from "./Terrain.module.css";

function Terrain({close}) {
    return (
        <div className={close === true ? `${styles.terrainContainer}` : `${styles.close}`}>
            <div className={styles.firsColumn}>
                <h3 className={styles.header}>Forest</h3>
                <p className={styles.firstText}>Воронежская область</p>
            </div>
            <div>
                <p className={styles.text}>общая пплощадь</p>
                <p className={styles.text}>1000кв. к.</p>
            </div>
                <p className={styles.text}>какая-то инфа</p>
                <p className={styles.text}>11/12/2023</p>
        </div>
    );
}

export default Terrain;