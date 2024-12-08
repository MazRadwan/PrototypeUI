import { useState } from 'react';
import styles from './FlightSearch.module.css';

function SearchForm({ onSearch, loading }) {
  const [searchParams, setSearchParams] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="origin">From</label>
          <input
            type="text"
            id="origin"
            name="origin"
            value={searchParams.origin}
            onChange={handleChange}
            placeholder="City or Airport"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="destination">To</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={searchParams.destination}
            onChange={handleChange}
            placeholder="City or Airport"
            required
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="departureDate">Departure Date</label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={searchParams.departureDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="returnDate">Return Date (Optional)</label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            value={searchParams.returnDate}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="passengers">Passengers</label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            value={searchParams.passengers}
            onChange={handleChange}
            min="1"
            max="9"
            required
          />
        </div>
      </div>

      <button type="submit" className={styles.searchButton} disabled={loading}>
        {loading ? 'Searching...' : 'Search Flights'}
      </button>
    </form>
  );
}

export default SearchForm;