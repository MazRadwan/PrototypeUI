import { mockFlights } from '../data/mockFlights';

class FlightController {
  async getAllFlights() {
    try {
      const flights = await new Promise((resolve) => {
        setTimeout(() => resolve(mockFlights), 1000);
      });
      return { success: true, data: flights };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch flights',
        details: error.message
      };
    }
  }

  async getFlightById(id) {
    try {
      const flight = mockFlights.find(flight => flight.id === parseInt(id));
      if (!flight) {
        return {
          success: false,
          error: 'Flight not found'
        };
      }
      return { success: true, data: flight };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch flight',
        details: error.message
      };
    }
  }

  async searchFlights(params) {
    try {
      const { origin, destination, departureDate } = params;
      const searchResults = mockFlights.filter(flight => {
        const matchesOrigin = flight.origin.toLowerCase().includes(origin.toLowerCase());
        const matchesDestination = flight.destination.toLowerCase().includes(destination.toLowerCase());
        const matchesDate = flight.departureTime.includes(departureDate);
        
        return matchesOrigin && matchesDestination && matchesDate;
      });
      return { success: true, data: searchResults };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to search flights',
        details: error.message
      };
    }
  }

  async getFlightsByStatus(status) {
    try {
      const flights = mockFlights.filter(flight => 
        flight.status.toLowerCase() === status.toLowerCase()
      );
      return { success: true, data: flights };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch flights by status',
        details: error.message
      };
    }
  }
}

export default new FlightController();