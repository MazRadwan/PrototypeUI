import { useState, useEffect } from 'react';
import { cityApi } from '../../../services/api';
import CityList from './CityList';
import CityForm from './CityForm';
import styles from './CityManagement.module.css';
import { toast } from 'react-toastify';

function CityManagement() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    loadCities();
  }, []);

  const loadCities = async () => {
    try {
      const response = await cityApi.getAll();
      setCities(response.data);
    } catch (error) {
      console.error('Error loading cities:', error);
      toast.error('Failed to load cities');
    } finally {
      setLoading(false);
    }
  };

  const handleAddCity = () => {
    setSelectedCity(null);
    setShowForm(true);
  };

  const handleEditCity = (city) => {
    setSelectedCity(city);
    setShowForm(true);
  };

  const handleDeleteCity = async (id) => {
    if (window.confirm('Are you sure you want to delete this city?')) {
      try {
        await cityApi.delete(id);
        toast.success('City deleted successfully');
        await loadCities();
      } catch (error) {
        console.error('Error deleting city:', error);
        toast.error('Failed to delete city');
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>City Management</h1>
        <button onClick={handleAddCity} className={styles.addButton}>
          Add New City
        </button>
      </div>
      
      {showForm && (
        <CityForm
          city={selectedCity}
          onClose={() => setShowForm(false)}
          onSave={() => {
            loadCities();
            setShowForm(false);
          }}
        />
      )}

      <CityList
        cities={cities}
        onEdit={handleEditCity}
        onDelete={handleDeleteCity}
      />
    </div>
  );
}

export default CityManagement;