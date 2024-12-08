import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { flightService } from '../../../services';
import DashboardStats from './DashboardStats';
import RecentFlights from './RecentFlights';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';
import styles from './Dashboard.module.css';

function Dashboard() {
  const [stats, setStats] = useState({
    totalFlights: 0,
    activeFlights: 0,
    delayedFlights: 0
  });
  const [recentFlights, setRecentFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const response = await flightService.getFlights();
      const flights = response.data;
      
      // Calculate stats from the flights data
      const calculatedStats = {
        totalFlights: flights.length,
        activeFlights: flights.filter(f => f.status === 'ACTIVE').length,
        delayedFlights: flights.filter(f => f.status === 'DELAYED').length
      };

      setStats(calculatedStats);
      setRecentFlights(flights.slice(0, 5));
    } catch (err) {
      setError('Failed to load dashboard data');
      console.error('Error loading dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner message="Loading dashboard..." />;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.dashboard}>
      <h1>Admin Dashboard</h1>
      <DashboardStats stats={stats} />
      
      <div className={styles.managementSection}>
        <div className={styles.quickActions}>
          <Link to="/admin/flights" className={styles.actionButton}>
            Manage Flights
          </Link>
          <Link to="/admin/aircraft" className={styles.actionButton}>
            Manage Aircraft
          </Link>
          <Link to="/admin/airports" className={styles.actionButton}>
            Manage Airports
          </Link>
          <Link to="/admin/passengers" className={styles.actionButton}>
            Manage Passengers
          </Link>
        </div>
      </div>

      <RecentFlights flights={recentFlights} />
    </div>
  );
}

export default Dashboard;