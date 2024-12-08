import { useState, useEffect } from 'react';
import { cityApi } from '../../../services/api';
import { toast } from 'react-toastify';
import styles from './CityForm.module.css';

function CityForm({ city, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    population: '',
    timezone: '',
    latitude: '',
    longitude: '',
    status: 'ACTIVE'
  });

  useEffect(() => {
    if (city) {
      setFormData(city);
    }
  }, [city]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (city) {
        await cityApi.update(city.id, formData);
        toast.success('City updated successfully');
      } else {
        await cityApi.create(formData);
        toast.success('City created successfully');
      }
      onSave();
    } catch (error) {
      console.error('Error saving city:', error);
      toast.error('Failed to save city');
    }
  };

  return (
    <div className={styles.formOverlay}>
      <div className={styles.formContainer}>
        <h2>{city ? 'Edit City' : 'Add New City'}</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name">City Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="population">Population</label>
              <input
                type="number"
                id="population"
                name="population"
                value={formData.population}
                onChange={handleChange}
                required
                min="0"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="timezone">Timezone</label>
              <input
                type="text"
                id="timezone"
                name="timezone"
                value={formData.timezone}
                onChange={handleChange}
                required
                placeholder="e.g., UTC+1"
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                id="latitude"
                name="latitude"
                value={formData.latitude}
                onChange={handleChange}
                required
                step="0.000001"
                min="-90"
                max="90"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                id="longitude"
                name="longitude"
                value={formData.longitude}
                onChange={handleChange}
                required
                step="0.000001"
                min="-180"
                max="180"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
              <option value="DEVELOPING">Developing</option>
            </select>
          </div>

          <div className={styles.formActions}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" className={styles.submitButton}>
              {city ? 'Update City' : 'Add City'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CityForm;