import { useState, useEffect } from 'react';
import { passengerApi } from '../../../services/api';
import { toast } from 'react-toastify';
import styles from './PassengerHistory.module.css';
import { FaTimes, FaSearch, FaFilter } from 'react-icons/fa';

function PassengerHistory({ passenger, onClose }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadHistory();
  }, [passenger.id]);

  const loadHistory = async () => {
    try {
      const response = await passengerApi.getFlightHistory(passenger.id);
      setHistory(response.data);
    } catch (error) {
      console.error('Error loading flight history:', error);
      toast.error('Failed to load flight history');
    } finally {
      setLoading(false);
    }
  };

  const filteredHistory = history
    .filter(flight => {
      if (filter !== 'all' && flight.status.toLowerCase() !== filter) {
        return false;
      }
      return (
        flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flight.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flight.destination.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
    .sort((a, b) => new Date(b.departureTime) - new Date(a.departureTime));

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Flight History - {passenger.firstName} {passenger.lastName}</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <FaTimes />
          </button>
        </div>

        <div className={styles.controls}>
          <div className={styles.searchBar}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search by flight number, origin, or destination..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filterGroup}>
            <FaFilter className={styles.filterIcon} />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="all">All Flights</option>
              <option value="scheduled">Scheduled</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="delayed">Delayed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className={styles.loading}>Loading history...</div>
        ) : (
          <div className={styles.historyList}>
            {filteredHistory.length === 0 ? (
              <p className={styles.noResults}>
                {history.length === 0 
                  ? "No flight history found."
                  : "No flights match your search criteria."}
              </p>
            ) : (
              filteredHistory.map((flight) => (
                <div key={flight.id} className={styles.historyItem}>
                  <div className={styles.flightInfo}>
                    <span className={styles.flightNumber}>{flight.flightNumber}</span>
                    <span className={styles.route}>
                      {flight.origin} → {flight.destination}
                    </span>
                  </div>
                  <div className={styles.details}>
                    <span className={styles.date}>
                      {new Date(flight.departureTime).toLocaleDateString()}
                    </span>
                    <span className={styles[flight.status.toLowerCase()]}>
                      {flight.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PassengerHistory;