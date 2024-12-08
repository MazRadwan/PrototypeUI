import { BaseService } from './base.service';
import { API_ENDPOINTS } from './config';
import cityController from '../controllers/cityController';

class CityService extends BaseService {
  constructor() {
    super(API_ENDPOINTS.CITIES);
  }

  async getCities() {
    return this.handleRequest(() => cityController.getAllCities());
  }

  async getCityById(id) {
    return this.handleRequest(() => cityController.getCityById(id));
  }

  async getCityAirports(id) {
    return this.handleRequest(() => cityController.getCityAirports(id));
  }

  async createCity(data) {
    const result = await this.handleRequest(() => cityController.createCity(data));
    this.handleSuccess('City created successfully');
    return result;
  }

  async updateCity(id, data) {
    const result = await this.handleRequest(() => cityController.updateCity(id, data));
    this.handleSuccess('City updated successfully');
    return result;
  }

  async deleteCity(id) {
    const result = await this.handleRequest(() => cityController.deleteCity(id));
    this.handleSuccess('City deleted successfully');
    return result;
  }
}

export default new CityService();