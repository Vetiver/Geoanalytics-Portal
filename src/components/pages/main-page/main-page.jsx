import Header from "../../header/header";
import styles from "./main-page.module.css";
import Button from "../../ui/button/button";
import OpportunityCard from "../../ui/button/opportunity-card/opportunity-card";
import { keyOpportunityCards } from "../../../constants/key-opportunity-cards";
import Footer from "../../App/footer/footer";
import {
  cornerLineLeft,
  straightLine,
  cornerLineRight,
} from "../../../images/decoration-lines/decoration-lines";

function MainPage() {
  return (
    <div className={styles.mainPage}>
      <Header />
      <main className={styles.main}>
        <section className={styles.introduction}>
          <div className={styles.blockWithLink}>
            <h1 className={styles.heading}>GeoAnalytics.ai</h1>
            <p className={styles.caption}>
              Платформа для эффективного управления территорией на основе
              искусственного интеллекта
            </p>
            <Button content="Демо-доступ" />
          </div>
        </section>
        <section className={styles.keyOpportunities}>
          <div className={styles.keyOpportunitiesContainer}>
            <h2 className={styles.keyOpportunitiesTitle}>
              Ключевые возможности
            </h2>
            <div className={styles.cardsContainer}>
              {keyOpportunityCards.map((card) => {
                return (
                  <OpportunityCard
                    image={card.image}
                    imageCaption={card.title}
                    title={card.title}
                    content={card.caption}
                  />
                );
              })}
              <img
                className={`${styles.line} ${styles.cornerLineLeft}`}
                src={cornerLineLeft}
                alt="Декоративный элемент"
              />
              <img
                className={`${styles.line} ${styles.straightLine}`}
                src={straightLine}
                alt="Декоративный элемент"
              />
              <img
                className={`${styles.line} ${styles.cornerLineRight}`}
                src={cornerLineRight}
                alt="Декоративный элемент"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* <img className="earth" src={earth} alt="планета Земля" /> */}
    </div>
  );
}

export default MainPage;
