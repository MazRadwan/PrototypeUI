import { mockAirports } from '../data/mockAirports';

class AirportController {
  async getAllAirports() {
    try {
      // Simulating API call delay
      const airports = await new Promise((resolve) => {
        setTimeout(() => resolve(mockAirports), 1000);
      });
      return { success: true, data: airports };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch airports',
        details: error.message
      };
    }
  }

  async getAirportById(id) {
    try {
      const airport = mockAirports.find(airport => airport.id === parseInt(id));
      if (!airport) {
        return {
          success: false,
          error: 'Airport not found'
        };
      }
      return { success: true, data: airport };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch airport',
        details: error.message
      };
    }
  }

  async searchAirports(query) {
    try {
      const searchResults = mockAirports.filter(airport => 
        airport.name.toLowerCase().includes(query.toLowerCase()) ||
        airport.code.toLowerCase().includes(query.toLowerCase()) ||
        airport.city.toLowerCase().includes(query.toLowerCase()) ||
        airport.country.toLowerCase().includes(query.toLowerCase())
      );
      return { success: true, data: searchResults };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to search airports',
        details: error.message
      };
    }
  }
}

export default new AirportController();