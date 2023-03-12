import styles from "./geolocation-control.module.css";

const GeolocationControl = ({ onClick }) => {
  return <button className={styles.button} onClick={onClick}></button>;
};
export default GeolocationControl;
