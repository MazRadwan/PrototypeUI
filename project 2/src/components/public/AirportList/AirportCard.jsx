import styles from './AirportList.module.css';

function AirportCard({ airport }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>{airport.name}</h2>
        <span className={styles.code}>{airport.code}</span>
      </div>
      <div className={styles.info}>
        <p><strong>City:</strong> {airport.city}</p>
        <p><strong>Country:</strong> {airport.country}</p>
        <p><strong>Gates:</strong> {airport.gateCount}</p>
        <p className={styles.status}>
          <strong>Status:</strong> 
          <span className={styles[airport.status.toLowerCase()]}>
            {airport.status}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AirportCard;