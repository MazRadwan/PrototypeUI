import FlightRow from '../FlightRow/FlightRow';
import styles from './FlightTable.module.css';

function FlightTable({ flights }) {
  if (flights.length === 0) {
    return (
      <div className={styles.noFlights}>
        <p>No flights scheduled</p>
      </div>
    );
  }

  return (
    <div className={styles.board}>
      <div className={styles.header}>
        <div className={styles.time}>Time</div>
        <div className={styles.flight}>Flight</div>
        <div className={styles.destination}>Destination</div>
        <div className={styles.gate}>Gate</div>
        <div className={styles.status}>Status</div>
      </div>

      <div className={styles.flightsList}>
        {flights.map((flight) => (
          <FlightRow key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
  );
}

export default FlightTable;