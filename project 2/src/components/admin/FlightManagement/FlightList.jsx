import { FaEdit, FaTrash, FaPlane } from 'react-icons/fa';
import styles from './FlightList.module.css';

function FlightList({ flights, onEdit, onDelete }) {
  return (
    <div className={styles.listContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Aircraft</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.flightNumber}</td>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>{flight.departureTime}</td>
              <td>{flight.arrivalTime}</td>
              <td>{flight.aircraft}</td>
              <td>
                <span className={styles[flight.status.toLowerCase()]}>
                  {flight.status}
                </span>
              </td>
              <td className={styles.actions}>
                <button
                  onClick={() => onEdit(flight)}
                  className={styles.editButton}
                  title="Edit Flight"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => onDelete(flight.id)}
                  className={styles.deleteButton}
                  title="Delete Flight"
                >
                  <FaTrash />
                </button>
                <button
                  className={styles.detailsButton}
                  title="View Details"
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

export default FlightList;