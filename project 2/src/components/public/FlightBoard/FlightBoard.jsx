import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getFlights } from '../../../services/flightService';
import FilterButtons from './FilterButtons/FilterButtons';
import FlightTable from './FlightTable/FlightTable';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import styles from './FlightBoard.module.css';

function FlightBoard() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadFlights();
  }, []);

  const loadFlights = async () => {
    try {
      const response = await getFlights();
      setFlights(response.data);
    } catch (error) {
      console.error('Error loading flights:', error);
      toast.error('Failed to load flights');
    } finally {
      setLoading(false);
    }
  };

  const filteredFlights = flights.filter(flight => {
    if (filter === 'departures') return flight.type === 'DEPARTURE';
    if (filter === 'arrivals') return flight.type === 'ARRIVAL';
    return true;
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.container}>
      <h1>Flight Board</h1>
      <FilterButtons activeFilter={filter} onFilterChange={setFilter} />
      <FlightTable flights={filteredFlights} />
    </div>
  );
}

export default FlightBoard;