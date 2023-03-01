import styles from "./header.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import appLogo from "../../images/logos/main-logo.svg";

function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img className={styles.logo} src={appLogo} alt="логотип" />
        <ul className={styles.navBar}>
          <AnchorLink href="#." className={styles.navLink}>
            Аналитика (демо)
          </AnchorLink>
          <AnchorLink
            href="#contactsId"
            className={styles.navLink}
          >
            Контакты
          </AnchorLink>
        </ul>
      </div>
    </header>
  );
}

export default Header;
