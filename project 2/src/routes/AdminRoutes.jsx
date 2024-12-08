import { Routes, Route } from 'react-router-dom';
import Dashboard from '../components/admin/Dashboard';
import FlightManagement from '../components/admin/FlightManagement';
import AircraftManagement from '../components/admin/AircraftManagement';
import AirportManagement from '../components/admin/AirportManagement';
import PassengerManagement from '../components/admin/PassengerManagement';
import CityManagement from '../components/admin/CityManagement';

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/flights" element={<FlightManagement />} />
      <Route path="/aircraft" element={<AircraftManagement />} />
      <Route path="/airports" element={<AirportManagement />} />
      <Route path="/passengers" element={<PassengerManagement />} />
      <Route path="/cities" element={<CityManagement />} />
    </Routes>
  );
}

export default AdminRoutes;