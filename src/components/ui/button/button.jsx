import { useState } from "react";
import styles from "./button.module.css";
import { arrowLeft, arrowRight, gradientArrowRight } from "../../../images/logos/logos";

// type = "default" - кнопка с градиентом | "transparent" - прозрачная кнопка
// direction = "right" - стрелка вправо | "left" - стрелка влево

function Button({ content, type = "default", direction = "right" }) {
  const [isClick, setIsClick] = useState(false);

  const handleOnMouseDown = () => {
    setIsClick(true);
  };

  const handleOnMouseUp = () => {
    setIsClick(false);
  };

  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      onMouseLeave={handleOnMouseUp}
      onMouseDown={handleOnMouseDown}
    >
      <div className={styles.contentContainer}>
        {direction === "right" ? (
          <>
            <p className={styles.content}>{content}</p>

            {isClick && type === "default" ? (
              <img
                className={styles.arrow}
                src={gradientArrowRight}
                alt="right arrow"
              />
            ) : (
              <img
                className={styles.arrow}
                src={arrowRight}
                alt="right arrow"
              />
            )}
          </>
        ) : (
          <>
            <img className={styles.arrow} src={arrowLeft} alt="left arrow" />
            <p className={styles.content}>{content}</p>
          </>
        )}
      </div>
    </button>
  );
}

export default Button;
