import { useState } from 'react';
import { toast } from 'react-toastify';
import { searchFlights } from '../../../services/flightService';
import SearchForm from './SearchForm/SearchForm';
import SearchResults from './SearchResults/SearchResults';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';
import styles from './FlightSearch.module.css';

function FlightSearch() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    try {
      const response = await searchFlights(searchParams);
      setFlights(response.data);
      setSearched(true);
    } catch (error) {
      console.error('Error searching flights:', error);
      toast.error('Failed to search flights');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Search Flights</h1>
      <SearchForm onSearch={handleSearch} loading={loading} />
      {loading ? (
        <LoadingSpinner message="Searching flights..." />
      ) : (
        searched && <SearchResults flights={flights} />
      )}
    </div>
  );
}

export default FlightSearch;