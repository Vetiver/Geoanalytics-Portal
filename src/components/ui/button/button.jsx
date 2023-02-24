import styles from "./button.module.css";
import arrowRight from "../../../images/logos/arrow-right.svg";
import arrowLeft from "../../../images/logos/arrow-left.svg";

function Button({ content, type = "default", direction = "right" }) {
  return (
    <button className={`${styles.button} ${styles[type]}`}>
      <div className={styles.contentContainer}>
        {direction === "left" && <img src={arrowLeft} alt="left arrow" />}
        <p className={styles.content}>{content}</p>
        {direction === "right" && <img src={arrowRight} alt="right arrow" />}
      </div>
    </button>
  );
}

export default Button;
