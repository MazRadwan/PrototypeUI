import { useState, useEffect } from 'react';
import { gateApi } from '../../../services/api';
import { toast } from 'react-toastify';
import styles from './GateForm.module.css';

function GateForm({ gate, airportId, onClose, onSave }) {
  const [formData, setFormData] = useState({
    gate_number: '',
    terminal: '',
    status: 'ACTIVE',
    airport_id: airportId
  });

  useEffect(() => {
    if (gate) {
      setFormData(gate);
    }
  }, [gate]);

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
      if (gate) {
        await gateApi.update(gate.id, formData);
        toast.success('Gate updated successfully');
      } else {
        await gateApi.create(formData);
        toast.success('Gate created successfully');
      }
      onSave();
    } catch (error) {
      console.error('Error saving gate:', error);
      toast.error('Failed to save gate');
    }
  };

  return (
    <div className={styles.formOverlay}>
      <div className={styles.formContainer}>
        <h2>{gate ? 'Edit Gate' : 'Add New Gate'}</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="gate_number">Gate Number</label>
            <input
              type="text"
              id="gate_number"
              name="gate_number"
              value={formData.gate_number}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="terminal">Terminal</label>
            <input
              type="text"
              id="terminal"
              name="terminal"
              value={formData.terminal}
              onChange={handleChange}
              required
            />
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
              <option value="MAINTENANCE">Maintenance</option>
              <option value="CLOSED">Closed</option>
            </select>
          </div>

          <div className={styles.formActions}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" className={styles.submitButton}>
              {gate ? 'Update Gate' : 'Add Gate'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GateForm;