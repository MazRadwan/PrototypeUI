import { mockCities } from '../data/mockCities';

class CityController {
  async getAllCities() {
    try {
      // Simulating API call delay
      const cities = await new Promise((resolve) => {
        setTimeout(() => resolve(mockCities), 1000);
      });
      return { success: true, data: cities };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch cities',
        details: error.message
      };
    }
  }

  async getCityById(id) {
    try {
      const city = mockCities.find(city => city.id === parseInt(id));
      if (!city) {
        return {
          success: false,
          error: 'City not found'
        };
      }
      return { success: true, data: city };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch city',
        details: error.message
      };
    }
  }

  async getCityAirports(id) {
    try {
      // In a real application, this would fetch airports associated with the city
      const airports = [];
      return { success: true, data: airports };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch city airports',
        details: error.message
      };
    }
  }

  async createCity(data) {
    try {
      // Simulating API call delay
      const newCity = {
        id: mockCities.length + 1,
        ...data
      };
      return { success: true, data: newCity };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to create city',
        details: error.message
      };
    }
  }

  async updateCity(id, data) {
    try {
      const city = mockCities.find(city => city.id === parseInt(id));
      if (!city) {
        return {
          success: false,
          error: 'City not found'
        };
      }
      const updatedCity = { ...city, ...data };
      return { success: true, data: updatedCity };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to update city',
        details: error.message
      };
    }
  }

  async deleteCity(id) {
    try {
      const city = mockCities.find(city => city.id === parseInt(id));
      if (!city) {
        return {
          success: false,
          error: 'City not found'
        };
      }
      return { success: true, data: { id } };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to delete city',
        details: error.message
      };
    }
  }
}

export default new CityController();