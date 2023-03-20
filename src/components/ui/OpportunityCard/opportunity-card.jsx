import styles from './opportunity-card.module.css'

function OpportunityCard({ image, imageCaption, title, content }) {
  return ( 
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={imageCaption} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </div>
   );
}

export default OpportunityCard;