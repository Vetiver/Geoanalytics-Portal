import styles from "./Terrain.module.css";
import { useSelector } from "react-redux";
import classNames from "classnames";

function Terrain({ close, loading = false }) {
  const arableLandMetrics = useSelector(
    (state) => state.analyticReducer.arableLandMetrics
  );
  const foresMetric = useSelector((state) => state.analyticReducer.foresMetric);
  const isLoading = classNames({
    [styles.loading]: loading,
  });

  const isHidden = classNames({
    [styles.hidden]: !close,
  });

  return (
    arableLandMetrics &&
    foresMetric && (
      <div className={`${styles.terrainContainer} ${isHidden}`}>
        <div className={`${styles.firstColumn} ${isHidden}`}>
          <h3 className={`${styles.header} ${isLoading}`}>Forest</h3>
          <p className={`${styles.text} ${isLoading}`}>Воронежская область</p>
        </div>
        <div className={`${styles.line} ${isLoading}`}></div>
        <div>
          <p className={`${styles.title} ${isLoading}`}>
            {arableLandMetrics.title}
          </p>
          <p className={`${styles.text} ${isLoading}`}>
            {arableLandMetrics.data + arableLandMetrics.units}
          </p>
        </div>
        <div>
          <p className={`${styles.title} ${isLoading}`}>{foresMetric.title}</p>
          <p className={`${styles.text} ${isLoading}`}>
            {foresMetric.data + foresMetric.units}
          </p>
        </div>
      </div>
    )
  );
}

export default Terrain;
