import { BaseService } from './base.service';
import { API_ENDPOINTS } from './config';
import aircraftController from '../controllers/aircraftController';

class AircraftService extends BaseService {
  constructor() {
    super(API_ENDPOINTS.AIRCRAFT);
  }

  async getAircraft() {
    return this.handleRequest(() => aircraftController.getAllAircraft());
  }

  async getAircraftById(id) {
    return this.handleRequest(() => aircraftController.getAircraftById(id));
  }

  async getAircraftFlights(id) {
    return this.handleRequest(() => aircraftController.getAircraftFlights(id));
  }

  async createAircraft(data) {
    const result = await this.handleRequest(() => aircraftController.createAircraft(data));
    this.handleSuccess('Aircraft created successfully');
    return result;
  }

  async updateAircraft(id, data) {
    const result = await this.handleRequest(() => aircraftController.updateAircraft(id, data));
    this.handleSuccess('Aircraft updated successfully');
    return result;
  }

  async deleteAircraft(id) {
    const result = await this.handleRequest(() => aircraftController.deleteAircraft(id));
    this.handleSuccess('Aircraft deleted successfully');
    return result;
  }
}

export default new AircraftService();