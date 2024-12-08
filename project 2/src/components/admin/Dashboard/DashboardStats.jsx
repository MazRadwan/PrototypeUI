import styles from './DashboardStats.module.css';

function DashboardStats({ stats }) {
  return (
    <div className={styles.statsGrid}>
      <div className={styles.statCard}>
        <h3>Total Flights</h3>
        <p className={styles.statNumber}>{stats.totalFlights}</p>
      </div>
      <div className={styles.statCard}>
        <h3>Active Flights</h3>
        <p className={styles.statNumber}>{stats.activeFlights}</p>
      </div>
      <div className={styles.statCard}>
        <h3>Delayed Flights</h3>
        <p className={styles.statNumber}>{stats.delayedFlights}</p>
      </div>
    </div>
  );
}

export default DashboardStats;