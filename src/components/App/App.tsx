import { FC } from "react";
import styles from "./App.module.css";
import Button from "../ui/button/button";

const App: FC = () => {
  return (
    <div className={styles.page}>
      <Button content="Демо-доступ" type='transparent' direction="right"></Button>
    </div>
  );
};

export default App;
