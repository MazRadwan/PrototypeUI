import { formatTime, formatDate } from '../../../../utils/dateUtils';
import styles from './FlightRow.module.css';

function FlightRow({ flight }) {
  return (
    <div className={styles.flightRow}>
      <div className={styles.time}>
        <div className={styles.timeValue}>{formatTime(flight.departureTime)}</div>
        <div className={styles.date}>{formatDate(flight.departureTime)}</div>
      </div>
      <div className={styles.flight}>
        <div className={styles.flightNumber}>{flight.flightNumber}</div>
        <div className={styles.airline}>{flight.airline}</div>
      </div>
      <div className={styles.destination}>
        <div className={styles.city}>{flight.destination}</div>
        <div className={styles.airport}>{flight.destinationAirport}</div>
      </div>
      <div className={styles.gate}>{flight.gate}</div>
      <div className={`${styles.status} ${styles[flight.status.toLowerCase()]}`}>
        {flight.status}
      </div>
    </div>
  );
}

export default FlightRow;