import styles from "./header.module.css";
import appLogo from "../../images/logos/main-logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img className={styles.logo} src={appLogo} alt="логотип" />
        <ul className={styles.navBar}>
          <a href="#." className={styles.navLink}>
            Аналитика (демо)
          </a>
          <a href="#." className={styles.navLink}>
            Контакты
          </a>
        </ul>
      </div>
    </header>
  );
}

export default Header;
