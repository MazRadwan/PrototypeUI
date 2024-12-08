import { FaClock, FaCalendar, FaUser } from 'react-icons/fa';
import styles from './FlightInfo.module.css';

function FlightInfo({ duration, date, aircraft }) {
  return (
    <div className={styles.details}>
      <div className={styles.detailGroup}>
        <FaClock className={styles.icon} />
        <div>
          <h3>Duration</h3>
          <p>{duration}</p>
        </div>
      </div>

      <div className={styles.detailGroup}>
        <FaCalendar className={styles.icon} />
        <div>
          <h3>Date</h3>
          <p>{date}</p>
        </div>
      </div>

      <div className={styles.detailGroup}>
        <FaUser className={styles.icon} />
        <div>
          <h3>Aircraft</h3>
          <p>{aircraft}</p>
        </div>
      </div>
    </div>
  );
}

export default FlightInfo;