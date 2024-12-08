import { Link } from 'react-router-dom';
import styles from './RecentFlights.module.css';

function RecentFlights({ flights }) {
  return (
    <div className={styles.recentFlights}>
      <h2>Recent Flights</h2>
      <div className={styles.flightsList}>
        {flights.map((flight) => (
          <div key={flight.id} className={styles.flightItem}>
            <div className={styles.flightInfo}>
              <span className={styles.flightNumber}>{flight.flightNumber}</span>
              <span>{flight.origin} → {flight.destination}</span>
            </div>
            <div className={styles.flightStatus}>
              <span className={styles[flight.status]}>{flight.status}</span>
              <Link to={`/admin/flights/${flight.id}`}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentFlights;