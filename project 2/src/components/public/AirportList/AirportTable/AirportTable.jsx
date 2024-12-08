import AirportRow from './AirportRow';
import styles from './AirportTable.module.css';

function AirportTable({ airports }) {
  if (airports.length === 0) {
    return (
      <div className={styles.noResults}>
        <p>No airports found matching your search criteria.</p>
      </div>
    );
  }

  return (
    <div className={styles.airportList}>
      <div className={styles.header}>
        <div>Name</div>
        <div>Code</div>
        <div>City</div>
        <div>Country</div>
      </div>

      <div className={styles.listContainer}>
        {airports.map((airport) => (
          <AirportRow key={airport.id} airport={airport} />
        ))}
      </div>
    </div>
  );
}

export default AirportTable;