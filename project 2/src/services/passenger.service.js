import { BaseService } from './base.service';
import { API_ENDPOINTS } from './config';
import passengerController from '../controllers/passengerController';

class PassengerService extends BaseService {
  constructor() {
    super(API_ENDPOINTS.PASSENGERS);
  }

  async getPassengers() {
    return this.handleRequest(() => passengerController.getAllPassengers());
  }

  async getPassengerById(id) {
    return this.handleRequest(() => passengerController.getPassengerById(id));
  }

  async getPassengerFlights(id) {
    return this.handleRequest(() => passengerController.getPassengerFlights(id));
  }

  async createPassenger(data) {
    const result = await this.handleRequest(() => passengerController.createPassenger(data));
    this.handleSuccess('Passenger created successfully');
    return result;
  }

  async updatePassenger(id, data) {
    const result = await this.handleRequest(() => passengerController.updatePassenger(id, data));
    this.handleSuccess('Passenger updated successfully');
    return result;
  }

  async deletePassenger(id) {
    const result = await this.handleRequest(() => passengerController.deletePassenger(id));
    this.handleSuccess('Passenger deleted successfully');
    return result;
  }
}

export default new PassengerService();