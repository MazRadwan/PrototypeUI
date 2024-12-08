import { useState, useEffect } from 'react';
import { airportApi } from '../../../services/api';
import AirportList from './AirportList';
import AirportForm from './AirportForm';
import styles from './AirportManagement.module.css';
import { toast } from 'react-toastify';

function AirportManagement() {
  const [airports, setAirports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState(null);

  useEffect(() => {
    loadAirports();
  }, []);

  const loadAirports = async () => {
    try {
      const response = await airportApi.getAll();
      setAirports(response.data);
    } catch (error) {
      console.error('Error loading airports:', error);
      toast.error('Failed to load airports');
    } finally {
      setLoading(false);
    }
  };

  const handleAddAirport = () => {
    setSelectedAirport(null);
    setShowForm(true);
  };

  const handleEditAirport = (airport) => {
    setSelectedAirport(airport);
    setShowForm(true);
  };

  const handleDeleteAirport = async (id) => {
    if (window.confirm('Are you sure you want to delete this airport?')) {
      try {
        await airportApi.delete(id);
        toast.success('Airport deleted successfully');
        await loadAirports();
      } catch (error) {
        console.error('Error deleting airport:', error);
        toast.error('Failed to delete airport');
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Airport Management</h1>
        <button onClick={handleAddAirport} className={styles.addButton}>
          Add New Airport
        </button>
      </div>
      
      {showForm && (
        <AirportForm
          airport={selectedAirport}
          onClose={() => setShowForm(false)}
          onSave={() => {
            loadAirports();
            setShowForm(false);
          }}
        />
      )}

      <AirportList
        airports={airports}
        onEdit={handleEditAirport}
        onDelete={handleDeleteAirport}
      />
    </div>
  );
}

export default AirportManagement;