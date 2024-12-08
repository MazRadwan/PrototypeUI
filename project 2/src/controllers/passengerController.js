import { mockPassengers } from '../data/mockPassengers';

class PassengerController {
  async getAllPassengers() {
    try {
      // Simulating API call delay
      const passengers = await new Promise((resolve) => {
        setTimeout(() => resolve(mockPassengers), 1000);
      });
      return { success: true, data: passengers };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch passengers',
        details: error.message
      };
    }
  }

  async getPassengerById(id) {
    try {
      const passenger = mockPassengers.find(passenger => passenger.id === parseInt(id));
      if (!passenger) {
        return {
          success: false,
          error: 'Passenger not found'
        };
      }
      return { success: true, data: passenger };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch passenger',
        details: error.message
      };
    }
  }

  async getPassengerFlights(id) {
    try {
      // In a real application, this would fetch flights associated with the passenger
      const flights = [];
      return { success: true, data: flights };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch passenger flights',
        details: error.message
      };
    }
  }

  async createPassenger(data) {
    try {
      // Simulating API call delay
      const newPassenger = {
        id: mockPassengers.length + 1,
        ...data
      };
      return { success: true, data: newPassenger };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to create passenger',
        details: error.message
      };
    }
  }

  async updatePassenger(id, data) {
    try {
      const passenger = mockPassengers.find(passenger => passenger.id === parseInt(id));
      if (!passenger) {
        return {
          success: false,
          error: 'Passenger not found'
        };
      }
      const updatedPassenger = { ...passenger, ...data };
      return { success: true, data: updatedPassenger };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to update passenger',
        details: error.message
      };
    }
  }

  async deletePassenger(id) {
    try {
      const passenger = mockPassengers.find(passenger => passenger.id === parseInt(id));
      if (!passenger) {
        return {
          success: false,
          error: 'Passenger not found'
        };
      }
      return { success: true, data: { id } };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to delete passenger',
        details: error.message
      };
    }
  }
}

export default new PassengerController();