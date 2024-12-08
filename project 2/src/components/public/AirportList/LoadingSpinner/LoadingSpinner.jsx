import { FaPlane } from 'react-icons/fa';
import styles from './LoadingSpinner.module.css';

function LoadingSpinner() {
  return (
    <div className={styles.loadingContainer}>
      <FaPlane className={styles.loadingIcon} />
      <p>Loading airports...</p>
    </div>
  );
}

export default LoadingSpinner;