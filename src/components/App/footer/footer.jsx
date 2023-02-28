import styles from "./footer.module.css";
import { telegram, mailIcon } from "../../../images/logos/logos";
import { longCornerLine } from "../../../images/decoration-lines/decoration-lines";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.div}></div>
      <div className={styles.footerContainer}>
        <div className={styles.contactsContainerBorder}>
          <div className={styles.contactsContainer}>
            <h3 className={styles.title}>Контакты</h3>
            <ul className={styles.contactsList}>
              <li className={styles.contactItem}>
                <img
                  className={styles.contactImg}
                  src={telegram}
                  alt="Телеграм"
                />
                <a
                  className={styles.contact}
                  target="_blank"
                  rel="noreferrer"
                  href="https://telegram.me/geoanalytics"
                >
                  tg: geoanalytics
                </a>
              </li>
              <li className={styles.contactItem}>
                <img className={styles.contactImg} src={mailIcon} alt="Почта" />
                <a
                  className={styles.contact}
                  target="_blank"
                  rel="noreferrer"
                  href="mailto: info@geoanalytics.ai"
                >
                  info@geoanalytics.ai
                </a>
              </li>
            </ul>
          </div>
          <img className={styles.line} src={longCornerLine} alt="Декоративный элемент: линия" />
        </div>
        <p className={styles.copyright}>
          @ Copyright 2023. Geoanalitics. Все права защищены.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
