import { useState, useEffect } from 'react';
import { flightApi } from '../../../services/api';
import FlightList from './FlightList';
import FlightForm from './FlightForm';
import styles from './FlightManagement.module.css';
import { toast } from 'react-toastify';

function FlightManagement() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  useEffect(() => {
    loadFlights();
  }, []);

  const loadFlights = async () => {
    try {
      const response = await flightApi.getAll();
      setFlights(response.data);
    } catch (error) {
      console.error('Error loading flights:', error);
      toast.error('Failed to load flights');
    } finally {
      setLoading(false);
    }
  };

  const handleAddFlight = () => {
    setSelectedFlight(null);
    setShowForm(true);
  };

  const handleEditFlight = (flight) => {
    setSelectedFlight(flight);
    setShowForm(true);
  };

  const handleDeleteFlight = async (id) => {
    if (window.confirm('Are you sure you want to delete this flight?')) {
      try {
        await flightApi.delete(id);
        toast.success('Flight deleted successfully');
        await loadFlights();
      } catch (error) {
        console.error('Error deleting flight:', error);
        toast.error('Failed to delete flight');
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Flight Management</h1>
        <button onClick={handleAddFlight} className={styles.addButton}>
          Add New Flight
        </button>
      </div>
      
      {showForm && (
        <FlightForm
          flight={selectedFlight}
          onClose={() => setShowForm(false)}
          onSave={() => {
            loadFlights();
            setShowForm(false);
          }}
        />
      )}

      <FlightList
        flights={flights}
        onEdit={handleEditFlight}
        onDelete={handleDeleteFlight}
      />
    </div>
  );
}

export default FlightManagement;