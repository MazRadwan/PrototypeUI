import { Link } from 'react-router-dom';
import styles from './NavLinks.module.css';

function NavLinks({ onLinkClick }) {
  return (
    <div className={styles.links}>
      <Link to="/" onClick={onLinkClick}>Flight Board</Link>
      <Link to="/airports" onClick={onLinkClick}>Airports</Link>
      <Link to="/search" onClick={onLinkClick}>Search</Link>
    </div>
  );
}

export default NavLinks;