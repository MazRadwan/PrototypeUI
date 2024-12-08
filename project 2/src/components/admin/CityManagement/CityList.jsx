import { FaEdit, FaTrash, FaPlane } from 'react-icons/fa';
import styles from './CityList.module.css';

function CityList({ cities, onEdit, onDelete }) {
  return (
    <div className={styles.listContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>City Name</th>
            <th>Country</th>
            <th>Population</th>
            <th>Timezone</th>
            <th>Airports</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr key={city.id}>
              <td>{city.name}</td>
              <td>{city.country}</td>
              <td>{city.population?.toLocaleString()}</td>
              <td>{city.timezone}</td>
              <td>{city.airportCount}</td>
              <td>
                <span className={styles[city.status.toLowerCase()]}>
                  {city.status}
                </span>
              </td>
              <td className={styles.actions}>
                <button
                  onClick={() => onEdit(city)}
                  className={styles.editButton}
                  title="Edit City"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => onDelete(city.id)}
                  className={styles.deleteButton}
                  title="Delete City"
                >
                  <FaTrash />
                </button>
                <button
                  className={styles.airportsButton}
                  title="View Airports"
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

export default CityList;