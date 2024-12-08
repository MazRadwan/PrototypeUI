import styles from './PriceSection.module.css';

function PriceSection({ price }) {
  return (
    <div className={styles.priceSection}>
      <div className={styles.price}>
        <span className={styles.amount}>${price}</span>
        <span className={styles.perPerson}>per person</span>
      </div>
      <button className={styles.bookButton}>Book Now</button>
    </div>
  );
}

export default PriceSection;