import styles from './AirportRow.module.css';

function AirportRow({ airport }) {
  return (
    <div className={styles.airportRow}>
      <div className={styles.name}>{airport.name}</div>
      <div className={styles.code}>{airport.code}</div>
      <div className={styles.city}>{airport.city}</div>
      <div className={styles.country}>{airport.country}</div>
      <div className={styles.gates}>{airport.gateCount}</div>
    </div>
  );
}

export default AirportRow;