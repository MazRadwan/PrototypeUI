import axios from 'axios';
import { toast } from 'react-toastify';
import { API_BASE_URL } from './config';

export class BaseService {
  constructor(endpoint) {
    this.api = axios.create({
      baseURL: `${API_BASE_URL}${endpoint}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.handleError = this.handleError.bind(this);
  }

  async handleRequest(requestFn) {
    try {
      const result = await requestFn();
      if (!result.success) {
        throw new Error(result.error);
      }
      return { data: result.data };
    } catch (error) {
      return this.handleError(error);
    }
  }

  handleError(error) {
    const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
    toast.error(errorMessage);
    throw error;
  }

  handleSuccess(message) {
    toast.success(message);
  }
}