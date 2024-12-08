import styles from './AdditionalInfo.module.css';

function AdditionalInfo({ gate, terminal, baggageClaim, checkInCounter }) {
  return (
    <div className={styles.additionalInfo}>
      <h3>Flight Information</h3>
      <div className={styles.infoGrid}>
        <div>
          <strong>Gate:</strong>
          <span>{gate}</span>
        </div>
        <div>
          <strong>Terminal:</strong>
          <span>{terminal}</span>
        </div>
        <div>
          <strong>Baggage Claim:</strong>
          <span>{baggageClaim}</span>
        </div>
        <div>
          <strong>Check-in:</strong>
          <span>{checkInCounter}</span>
        </div>
      </div>
    </div>
  );
}

export default AdditionalInfo;