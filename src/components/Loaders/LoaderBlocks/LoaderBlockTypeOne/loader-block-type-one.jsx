import styles from "./loader-block-type-one.module.css";

function LoaderBlockTypeOne() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.headingBlock}></div>
        <div className={styles.block}></div>
      </div>
      <div className={styles.line}></div>
      <div>
        <div className={styles.headingBlock}></div>
        <div className={styles.block}></div>
      </div>
      <div>
        <div className={styles.headingBlock}></div>
        <div className={styles.block}></div>
      </div>
    </div>
  );
}

export default LoaderBlockTypeOne;
