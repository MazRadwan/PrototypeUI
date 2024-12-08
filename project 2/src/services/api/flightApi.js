import axios from 'axios';
import { API_BASE_URL } from '../config';

const flightApi = axios.create({
  baseURL: `${API_BASE_URL}/flights`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAll = () => flightApi.get('/');
export const getById = (id) => flightApi.get(`/${id}`);
export const create = (data) => flightApi.post('/', data);
export const update = (id, data) => flightApi.put(`/${id}`, data);
export const remove = (id) => flightApi.delete(`/${id}`);
export const search = (params) => flightApi.get('/search', { params });
export const getPassengerFlights = (id) => flightApi.get(`/passenger/${id}`);