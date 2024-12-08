import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.css';

function SearchBar({ value, onChange }) {
  return (
    <div className={styles.searchBar}>
      <FaSearch className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Search airports by name, code or city..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.searchInput}
      />
    </div>
  );
}

export default SearchBar;