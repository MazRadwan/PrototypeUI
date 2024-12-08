import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPassengers } from '../../../store/slices/passengerSlice';
import PassengerList from './PassengerList';
import PassengerForm from './PassengerForm';
import PassengerHistory from './PassengerHistory';
import styles from './PassengerManagement.module.css';

function PassengerManagement() {
  const dispatch = useDispatch();
  const { passengers, loading, error } = useSelector((state) => state.passengers);
  const [showForm, setShowForm] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [selectedPassenger, setSelectedPassenger] = useState(null);

  useEffect(() => {
    dispatch(fetchPassengers());
  }, [dispatch]);

  const handleAddPassenger = () => {
    setSelectedPassenger(null);
    setShowForm(true);
    setShowHistory(false);
  };

  const handleEditPassenger = (passenger) => {
    setSelectedPassenger(passenger);
    setShowForm(true);
    setShowHistory(false);
  };

  const handleViewHistory = (passenger) => {
    setSelectedPassenger(passenger);
    setShowHistory(true);
    setShowForm(false);
  };

  const handleDeletePassenger = async (id) => {
    if (window.confirm('Are you sure you want to delete this passenger?')) {
      // Will implement delete functionality through Redux
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Passenger Management</h1>
        <button onClick={handleAddPassenger} className={styles.addButton}>
          Add New Passenger
        </button>
      </div>
      
      {showForm && (
        <PassengerForm
          passenger={selectedPassenger}
          onClose={() => setShowForm(false)}
          onSave={() => {
            dispatch(fetchPassengers());
            setShowForm(false);
          }}
        />
      )}

      {showHistory && selectedPassenger && (
        <PassengerHistory
          passenger={selectedPassenger}
          onClose={() => setShowHistory(false)}
        />
      )}

      <PassengerList
        passengers={passengers}
        onEdit={handleEditPassenger}
        onDelete={handleDeletePassenger}
        onViewHistory={handleViewHistory}
      />
    </div>
  );
}

export default PassengerManagement;