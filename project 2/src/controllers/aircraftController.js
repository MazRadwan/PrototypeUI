import { mockAircraft } from '../data/mockAircraft';

class AircraftController {
  async getAllAircraft() {
    try {
      // Simulating API call delay
      const aircraft = await new Promise((resolve) => {
        setTimeout(() => resolve(mockAircraft), 1000);
      });
      return { success: true, data: aircraft };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch aircraft',
        details: error.message
      };
    }
  }

  async getAircraftById(id) {
    try {
      const aircraft = mockAircraft.find(aircraft => aircraft.id === parseInt(id));
      if (!aircraft) {
        return {
          success: false,
          error: 'Aircraft not found'
        };
      }
      return { success: true, data: aircraft };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch aircraft',
        details: error.message
      };
    }
  }

  async getAircraftFlights(id) {
    try {
      // In a real application, this would fetch flights associated with the aircraft
      const flights = [];
      return { success: true, data: flights };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch aircraft flights',
        details: error.message
      };
    }
  }

  async createAircraft(data) {
    try {
      // Simulating API call delay
      const newAircraft = {
        id: mockAircraft.length + 1,
        ...data
      };
      return { success: true, data: newAircraft };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to create aircraft',
        details: error.message
      };
    }
  }

  async updateAircraft(id, data) {
    try {
      const aircraft = mockAircraft.find(aircraft => aircraft.id === parseInt(id));
      if (!aircraft) {
        return {
          success: false,
          error: 'Aircraft not found'
        };
      }
      const updatedAircraft = { ...aircraft, ...data };
      return { success: true, data: updatedAircraft };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to update aircraft',
        details: error.message
      };
    }
  }

  async deleteAircraft(id) {
    try {
      const aircraft = mockAircraft.find(aircraft => aircraft.id === parseInt(id));
      if (!aircraft) {
        return {
          success: false,
          error: 'Aircraft not found'
        };
      }
      return { success: true, data: { id } };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to delete aircraft',
        details: error.message
      };
    }
  }
}

export default new AircraftController();