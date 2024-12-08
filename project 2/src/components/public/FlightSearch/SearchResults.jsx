import { formatTime, formatDate } from '../../../utils/dateUtils';
import styles from './FlightSearch.module.css';

function SearchResults({ flights, loading }) {
  if (loading) {
    return <div className={styles.loading}>Searching for flights...</div>;
  }

  if (flights.length === 0) {
    return (
      <div className={styles.noResults}>
        <p>No flights found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className={styles.results}>
      <h2>Available Flights</h2>
      <div className={styles.flightsList}>
        {flights.map((flight) => (
          <div key={flight.id} className={styles.flightCard}>
            <div className={styles.flightHeader}>
              <span className={styles.flightNumber}>{flight.flightNumber}</span>
              <span className={styles.airline}>{flight.airline}</span>
              <span className={styles.price}>${flight.price}</span>
            </div>
            <div className={styles.flightDetails}>
              <div className={styles.route}>
                <div className={styles.routePoint}>
                  <div className={styles.time}>{formatTime(flight.departureTime)}</div>
                  <div className={styles.date}>{formatDate(flight.departureTime)}</div>
                  <div className={styles.city}>{flight.origin}</div>
                </div>
                <div className={styles.duration}>
                  <div className={styles.line}></div>
                  <div className={styles.durationText}>2h 30m</div>
                </div>
                <div className={styles.routePoint}>
                  <div className={styles.time}>{formatTime(flight.arrivalTime)}</div>
                  <div className={styles.date}>{formatDate(flight.arrivalTime)}</div>
                  <div className={styles.city}>{flight.destination}</div>
                </div>
              </div>
              <div className={styles.flightInfo}>
                <span>Gate {flight.gate}</span>
                <span className={`${styles.status} ${styles[flight.status.toLowerCase()]}`}>
                  {flight.status}
                </span>
              </div>
            </div>
            <button className={styles.selectButton}>Select Flight</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;