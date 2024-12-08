import { useState, useEffect } from 'react';
import { airportApi } from '../../../services/api';
import { toast } from 'react-toastify';
import GateList from './GateList';
import GateForm from './GateForm';
import styles from './AirportForm.module.css';

function AirportForm({ airport, onClose, onSave }) {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    city: '',
    country: ''
  });
  const [gates, setGates] = useState([]);
  const [showGateForm, setShowGateForm] = useState(false);
  const [selectedGate, setSelectedGate] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (airport) {
      setFormData(airport);
      loadGates(airport.id);
    }
  }, [airport]);

  const loadGates = async (airportId) => {
    try {
      const response = await airportApi.getGates(airportId);
      setGates(response.data);
    } catch (error) {
      console.error('Error loading gates:', error);
      toast.error('Failed to load gates');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (airport) {
        await airportApi.update(airport.id, formData);
        toast.success('Airport updated successfully');
      } else {
        await airportApi.create(formData);
        toast.success('Airport created successfully');
      }
      onSave();
    } catch (error) {
      console.error('Error saving airport:', error);
      toast.error('Failed to save airport');
    } finally {
      setLoading(false);
    }
  };

  const handleAddGate = () => {
    setSelectedGate(null);
    setShowGateForm(true);
  };

  const handleEditGate = (gate) => {
    setSelectedGate(gate);
    setShowGateForm(true);
  };

  const handleDeleteGate = async (gateId) => {
    if (window.confirm('Are you sure you want to delete this gate?')) {
      try {
        await airportApi.deleteGate(gateId);
        toast.success('Gate deleted successfully');
        loadGates(airport.id);
      } catch (error) {
        console.error('Error deleting gate:', error);
        toast.error('Failed to delete gate');
      }
    }
  };

  const handleGateSave = () => {
    loadGates(airport.id);
    setShowGateForm(false);
  };

  return (
    <div className={styles.formOverlay}>
      <div className={styles.formContainer}>
        <h2>{airport ? 'Edit Airport' : 'Add New Airport'}</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="code">Airport Code</label>
              <input
                type="text"
                id="code"
                name="code"
                value={formData.code}
                onChange={handleChange}
                required
                maxLength="3"
                placeholder="e.g., LAX"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="name">Airport Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g., Los Angeles International Airport"
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
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

          <div className={styles.formActions}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" className={styles.submitButton} disabled={loading}>
              {airport ? 'Update Airport' : 'Add Airport'}
            </button>
          </div>
        </form>

        {airport && (
          <div className={styles.gatesSection}>
            <div className={styles.gatesHeader}>
              <h3>Gates</h3>
              <button onClick={handleAddGate} className={styles.addGateButton}>
                Add New Gate
              </button>
            </div>
            <GateList
              gates={gates}
              onEdit={handleEditGate}
              onDelete={handleDeleteGate}
            />
          </div>
        )}

        {showGateForm && (
          <GateForm
            gate={selectedGate}
            airportId={airport?.id}
            onClose={() => setShowGateForm(false)}
            onSave={handleGateSave}
          />
        )}
      </div>
    </div>
  );
}

export default AirportForm;