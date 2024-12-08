import { BaseService } from './base.service';
import { API_ENDPOINTS } from './config';
import flightController from '../controllers/flightController';

class FlightService extends BaseService {
  constructor() {
    super(API_ENDPOINTS.FLIGHTS);
  }

  async getFlights() {
    return this.handleRequest(() => flightController.getAllFlights());
  }

  async getFlightById(id) {
    return this.handleRequest(() => flightController.getFlightById(id));
  }

  async searchFlights(params) {
    return this.handleRequest(() => flightController.searchFlights(params));
  }

  async getFlightsByStatus(status) {
    return this.handleRequest(() => flightController.getFlightsByStatus(status));
  }

  async createFlight(data) {
    const result = await this.handleRequest(() => flightController.createFlight(data));
    this.handleSuccess('Flight created successfully');
    return result;
  }

  async updateFlight(id, data) {
    const result = await this.handleRequest(() => flightController.updateFlight(id, data));
    this.handleSuccess('Flight updated successfully');
    return result;
  }

  async deleteFlight(id) {
    const result = await this.handleRequest(() => flightController.deleteFlight(id));
    this.handleSuccess('Flight deleted successfully');
    return result;
  }
}

export default new FlightService();