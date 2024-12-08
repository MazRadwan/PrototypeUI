import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { airportService } from '../../../services';
import SearchBar from './SearchBar/SearchBar';
import AirportTable from './AirportTable/AirportTable';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';
import styles from './AirportList.module.css';

function AirportList() {
  const [airports, setAirports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    loadAirports();
  }, []);

  const loadAirports = async () => {
    try {
      const response = await airportService.getAirports();
      setAirports(response.data);
    } catch (error) {
      console.error('Error loading airports:', error);
      toast.error('Failed to load airports');
    } finally {
      setLoading(false);
    }
  };

  const filteredAirports = airports.filter(airport => 
    airport.name.toLowerCase().includes(filter.toLowerCase()) ||
    airport.code.toLowerCase().includes(filter.toLowerCase()) ||
    airport.city.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) {
    return <LoadingSpinner message="Loading airports..." />;
  }

  return (
    <div className={styles.container}>
      <h1>Airports</h1>
      <SearchBar value={filter} onChange={setFilter} />
      <AirportTable airports={filteredAirports} />
    </div>
  );
}

export default AirportList;