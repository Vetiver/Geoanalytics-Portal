import React,{useMemo} from 'react';
import styles from "./Terrain.module.css";
import { useSelector } from "react-redux";

function Terrain({close}) {
    const arableLandMetrics = useSelector((state) => state.analyticReducer.arableLandMetrics);
    const foresMetric = useSelector((state) => state.analyticReducer.foresMetric);
    return ( arableLandMetrics && foresMetric &&
        <div className={close === true ? `${styles.terrainContainer}` : `${styles.close}`}>
            <div className={styles.firsColumn}>
                <h3 className={styles.header}>Forest</h3>
                <p className={styles.firstText}>Воронежская область</p>
            </div>
            <div>
                <p className={styles.text}>{arableLandMetrics.title}</p>
                <p className={styles.text}>{arableLandMetrics.data + arableLandMetrics.units}</p>
            </div>
                <p className={styles.text}>{foresMetric.title}</p>
                <p className={styles.text}>{foresMetric.data + foresMetric.units}</p>
        </div>
    );
}

export default Terrain;