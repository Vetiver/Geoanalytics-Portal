import styles from "./popup.module.css";
import { PopupType } from "../../../constants/popup";
import { arrowDown } from "../../../images/logos/logos";

function Popup({
  type = PopupType.Forest,
  arableLandSquare,
  forestSquare,
  moreButton = false,
  setPopup,
  closePopup,
  setPopupCloseBtn,
}) {

  return (
    <div
      className={`${styles.popupContainer}`}
      id="popup"
      ref={setPopup}
      onClick={(e) => {
        closePopup(e);
      }}
    >
      {type === PopupType.Forest && (
        <div className={styles.squareContainer}>
          <div className={styles.titleAndCloseButtonContainer}>
            <h3 className={styles.title}>Forest</h3>{" "}
            <button ref={setPopupCloseBtn} className={styles.closeButton} />
          </div>
          <div className={styles.line}></div>
          <p className={styles.subtitle}>Площадь объекта</p>
          <p className={styles.square}>{forestSquare}</p>
          {moreButton && (
            <button className={styles.moreButton}>
              Подробнее
              <img
                className={styles.buttonIcon}
                src={arrowDown}
                alt="стрелка вниз"
              />
            </button>
          )}
        </div>
      )}
      {type === PopupType.Squares && (
        <>
          <div className={styles.squareContainer}>
            <div className={styles.titleAndCloseButtonContainer}>
              <h3 className={styles.title}>Forest</h3>{" "}
              <button className={styles.closeButton} />
            </div>
            <p className={styles.square}>{arableLandSquare}</p>
          </div>
          <div className={styles.squareContainer}>
            <h3 className={styles.title}>Площадь леса</h3>
            <p className={styles.square}>{arableLandSquare}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Popup;

