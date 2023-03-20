import styles from "./custom-control.module.css";
import classNames from "classnames";
import { ThreeDots } from "react-loader-spinner";
import { ControlStates, ControlTypes } from "../../../constants/controls";

function CustomControl({
  onClick,
  type,
  controlState = ControlStates.Default,
}) {
  const buttonImageClass = classNames({
    [styles.zoomIn]: type === ControlTypes.ZoomIn,
    [styles.zoomOut]: type === ControlTypes.ZoomOut,
    [styles.geoLocation]: type === ControlTypes.Geolocation,
  });

  const isButtonClicked = classNames({
    [styles.disabled]: controlState === ControlStates.Changing,
  });


  return controlState === ControlStates.Changing ? (
    <button className={styles.button}>
      <ThreeDots
        type="Puff"
        color="#fff"
        height={25}
        width={25}
        timeout={3000}
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </button>
  ) : (
    <button
      onClick={onClick}
      className={`${styles.button} ${buttonImageClass} ${isButtonClicked} `}
      disabled={controlState === ControlStates.Changing}
    ></button>
  );
}

export default CustomControl;
