import FlightCard from './FlightCard';
import styles from './SearchResults.module.css';

function SearchResults({ flights }) {
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
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;