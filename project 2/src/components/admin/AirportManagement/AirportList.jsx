import { FaEdit, FaTrash, FaPlane } from 'react-icons/fa';
import styles from './AirportList.module.css';

function AirportList({ airports, onEdit, onDelete }) {
  if (!airports || airports.length === 0) {
    return <div className={styles.noData}>No airports found</div>;
  }

  return (
    <div className={styles.listContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>City</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {airports.map((airport) => (
            <tr key={airport.id}>
              <td>{airport.code}</td>
              <td>{airport.name}</td>
              <td>{airport.city}</td>
              <td>{airport.country}</td>
              <td className={styles.actions}>
                <button
                  onClick={() => onEdit(airport)}
                  className={styles.editButton}
                  title="Edit Airport"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => onDelete(airport.id)}
                  className={styles.deleteButton}
                  title="Delete Airport"
                >
                  <FaTrash />
                </button>
                <button
                  className={styles.flightsButton}
                  title="View Flights"
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

export default AirportList;