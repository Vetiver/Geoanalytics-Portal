import styles from "./map-controls.module.css";

const MapControls = ({ children }) => {
  return <div className={styles.MapControlsContainer}>{children}</div>;
};

export default MapControls;
