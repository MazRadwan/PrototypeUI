import { configureStore } from '@reduxjs/toolkit';
import flightReducer from './slices/flightSlice';
import airportReducer from './slices/airportSlice';
import aircraftReducer from './slices/aircraftSlice';
import passengerReducer from './slices/passengerSlice';
import cityReducer from './slices/citySlice';

export const store = configureStore({
  reducer: {
    flights: flightReducer,
    airports: airportReducer,
    aircraft: aircraftReducer,
    passengers: passengerReducer,
    cities: cityReducer,
  },
});