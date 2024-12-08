import { FaEdit, FaTrash } from 'react-icons/fa';
import styles from './GateList.module.css';

function GateList({ gates, onEdit, onDelete }) {
  if (!gates || gates.length === 0) {
    return <div className={styles.noData}>No gates found</div>;
  }

  return (
    <div className={styles.listContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Gate Number</th>
            <th>Terminal</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {gates.map((gate) => (
            <tr key={gate.id}>
              <td>{gate.gate_number}</td>
              <td>{gate.terminal}</td>
              <td>
                <span className={styles[gate.status.toLowerCase()]}>
                  {gate.status}
                </span>
              </td>
              <td className={styles.actions}>
                <button
                  onClick={() => onEdit(gate)}
                  className={styles.editButton}
                  title="Edit Gate"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => onDelete(gate.id)}
                  className={styles.deleteButton}
                  title="Delete Gate"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GateList;