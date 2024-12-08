import { BaseService } from './base.service';
import { API_ENDPOINTS } from './config';
import airportController from '../controllers/airportController';

class AirportService extends BaseService {
  constructor() {
    super(API_ENDPOINTS.AIRPORTS);
  }

  async getAirports() {
    return this.handleRequest(() => airportController.getAllAirports());
  }

  async getAirportById(id) {
    return this.handleRequest(() => airportController.getAirportById(id));
  }

  async searchAirports(query) {
    return this.handleRequest(() => airportController.searchAirports(query));
  }

  async createAirport(data) {
    const result = await this.handleRequest(() => airportController.createAirport(data));
    this.handleSuccess('Airport created successfully');
    return result;
  }

  async updateAirport(id, data) {
    const result = await this.handleRequest(() => airportController.updateAirport(id, data));
    this.handleSuccess('Airport updated successfully');
    return result;
  }

  async deleteAirport(id) {
    const result = await this.handleRequest(() => airportController.deleteAirport(id));
    this.handleSuccess('Airport deleted successfully');
    return result;
  }
}

export default new AirportService();