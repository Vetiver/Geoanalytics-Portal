import styles from "./bottom-sidebar-loader.module.css";
import LoaderBlockTypeOne from "../LoaderBlocks/LoaderBlockTypeOne/loader-block-type-one";
import LoaderBlockTypeTwo from "../LoaderBlocks/LoaderBlockTypeTwo/loader-block-type-two";

function BottomSidebarLoader() {

  return (
    <>
      <div className={styles.container}>
        <LoaderBlockTypeOne />
        <LoaderBlockTypeTwo />
        <LoaderBlockTypeTwo />
      </div>
    </>
  );
}


export default BottomSidebarLoader;
