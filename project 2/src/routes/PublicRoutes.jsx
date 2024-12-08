import { Routes, Route } from 'react-router-dom';
import FlightBoard from '../components/public/FlightBoard/FlightBoard';
import AirportList from '../components/public/AirportList/AirportList';
import FlightSearch from '../components/public/FlightSearch/FlightSearch';
import FlightDetails from '../components/public/FlightDetails/FlightDetails';

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FlightBoard />} />
      <Route path="/airports" element={<AirportList />} />
      <Route path="/search" element={<FlightSearch />} />
      <Route path="/flight/:id" element={<FlightDetails />} />
    </Routes>
  );
}

export default PublicRoutes;