import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { flightApi } from '../../../services/api';
import { toast } from 'react-toastify';
import FlightHeader from './FlightHeader/FlightHeader';
import FlightPath from './FlightPath/FlightPath';
import FlightInfo from './FlightInfo/FlightInfo';
import PriceSection from './PriceSection/PriceSection';
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';
import styles from './FlightDetails.module.css';

function FlightDetails() {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFlightDetails();
  }, [id]);

  const loadFlightDetails = async () => {
    try {
      const response = await flightApi.getById(id);
      setFlight(response.data);
    } catch (error) {
      console.error('Error loading flight details:', error);
      toast.error('Failed to load flight details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner message="Loading flight details..." />;
  if (!flight) return <div>Flight not found</div>;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <FlightHeader 
          flightNumber={flight.flightNumber}
          status={flight.status}
        />
        
        <FlightPath
          origin={flight.origin}
          destination={flight.destination}
          departureTime={flight.departureTime}
          arrivalTime={flight.arrivalTime}
        />

        <FlightInfo
          duration={flight.duration}
          date={new Date(flight.departureTime).toLocaleDateString()}
          aircraft={flight.aircraft}
        />

        <PriceSection price={flight.price} />

        <AdditionalInfo
          gate={flight.gate}
          terminal={flight.terminal}
          baggageClaim={flight.baggageClaim}
          checkInCounter={flight.checkInCounter}
        />
      </div>
    </div>
  );
}

export default FlightDetails;