import { FaEdit, FaTrash, FaHistory, FaPlane } from 'react-icons/fa';
import styles from './PassengerList.module.css';

function PassengerList({ passengers, onEdit, onDelete, onViewHistory }) {
  if (!passengers || passengers.length === 0) {
    return <div className={styles.noData}>No passengers found</div>;
  }

  return (
    <div className={styles.listContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {passengers.map((passenger) => (
            <tr key={passenger.id}>
              <td>{`${passenger.firstName} ${passenger.lastName}`}</td>
              <td>{passenger.email}</td>
              <td>{passenger.phone}</td>
              <td>{passenger.city}</td>
              <td className={styles.actions}>
                <button
                  onClick={() => onEdit(passenger)}
                  className={styles.editButton}
                  title="Edit Passenger"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => onDelete(passenger.id)}
                  className={styles.deleteButton}
                  title="Delete Passenger"
                >
                  <FaTrash />
                </button>
                <button
                  onClick={() => onViewHistory(passenger)}
                  className={styles.historyButton}
                  title="View Flight History"
                >
                  <FaHistory />
                </button>
                <button
                  onClick={() => onViewHistory(passenger)}
                  className={styles.flightsButton}
                  title="View Aircraft History"
                >
                  <FaPlane />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PassengerList;