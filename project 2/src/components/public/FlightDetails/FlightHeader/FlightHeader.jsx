import styles from './FlightHeader.module.css';

function FlightHeader({ flightNumber, status }) {
  return (
    <div className={styles.header}>
      <h1>Flight {flightNumber}</h1>
      <span className={styles[status.toLowerCase()]}>
        {status}
      </span>
    </div>
  );
}

export default FlightHeader;