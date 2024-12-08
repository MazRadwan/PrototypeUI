import { Link } from 'react-router-dom';
import { FaUserCog } from 'react-icons/fa';
import styles from './SignInButton.module.css';

function SignInButton() {
  return (
    <Link 
      to="/admin"
      className={styles.adminButton}
      aria-label="Admin Dashboard"
    >
      <FaUserCog className={styles.icon} />
      <span>Admin Dashboard</span>
    </Link>
  );
}

export default SignInButton;