import { FaPlane } from 'react-icons/fa';
import styles from './FlightPath.module.css';

function FlightPath({ origin, destination, departureTime, arrivalTime }) {
  return (
    <div className={styles.flightPath}>
      <div className={styles.location}>
        <h2>{origin}</h2>
        <p>{departureTime}</p>
      </div>
      <div className={styles.flightIcon}>
        <FaPlane />
      </div>
      <div className={styles.location}>
        <h2>{destination}</h2>
        <p>{arrivalTime}</p>
      </div>
    </div>
  );
}

export default FlightPath;