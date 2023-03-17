import styles from "./loader-block-type-two.module.css";

function LoaderBlockTypeTwo() {
  return (
    <div className={styles.container}>
      <div className={styles.block}></div>
      <div className={styles.block}></div>
    </div>
  );
}

export default LoaderBlockTypeTwo;
