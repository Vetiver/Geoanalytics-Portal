import styles from "./header.module.css";
import appLogo from "../../images/logos/main-logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img className={styles.logo} src={appLogo} alt="логотип" />
        <ul className={styles.navBar}>
          <li href="#." className={styles.navLink}>
            Аналитика (демо)
          </li>
          <li href="#." className={styles.navLink}>
            Контакты
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
