import axios from 'axios';
import { API_BASE_URL } from '../config';

const airportApi = axios.create({
  baseURL: `${API_BASE_URL}/airports`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAll = () => airportApi.get('/');
export const getById = (id) => airportApi.get(`/${id}`);
export const create = (data) => airportApi.post('/', data);
export const update = (id, data) => airportApi.put(`/${id}`, data);
export const remove = (id) => airportApi.delete(`/${id}`);
export const getByCityId = (cityId) => airportApi.get(`/city/${cityId}`);