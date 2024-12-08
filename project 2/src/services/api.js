import { mockAirports } from '../data/mockAirports';
import { mockGates } from '../data/mockGates';
import { mockAircraft } from '../data/mockAircraft';

// Simulated API response delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const airportApi = {
  getAll: async () => {
    await delay(500);
    return { data: mockAirports };
  },
  getById: async (id) => {
    await delay(500);
    const airport = mockAirports.find(a => a.id === id);
    return { data: airport };
  },
  create: async (data) => {
    await delay(500);
    const newAirport = {
      id: mockAirports.length + 1,
      ...data
    };
    return { data: newAirport };
  },
  update: async (id, data) => {
    await delay(500);
    const updatedAirport = { ...data, id };
    return { data: updatedAirport };
  },
  delete: async (id) => {
    await delay(500);
    return { data: { id } };
  },
  getGates: async (airportId) => {
    await delay(500);
    const gates = mockGates.filter(gate => gate.airport_id === airportId);
    return { data: gates };
  }
};

export const gateApi = {
  getAll: async () => {
    await delay(500);
    return { data: mockGates };
  },
  getById: async (id) => {
    await delay(500);
    const gate = mockGates.find(g => g.id === id);
    return { data: gate };
  },
  create: async (data) => {
    await delay(500);
    const newGate = {
      id: mockGates.length + 1,
      ...data
    };
    return { data: newGate };
  },
  update: async (id, data) => {
    await delay(500);
    const updatedGate = { ...data, id };
    return { data: updatedGate };
  },
  delete: async (id) => {
    await delay(500);
    return { data: { id } };
  }
};

export const aircraftApi = {
  getAll: async () => {
    await delay(500);
    return { data: mockAircraft };
  },
  getById: async (id) => {
    await delay(500);
    const aircraft = mockAircraft.find(a => a.id === id);
    return { data: aircraft };
  },
  create: async (data) => {
    await delay(500);
    const newAircraft = {
      id: mockAircraft.length + 1,
      ...data
    };
    return { data: newAircraft };
  },
  update: async (id, data) => {
    await delay(500);
    const updatedAircraft = { ...data, id };
    return { data: updatedAircraft };
  },
  delete: async (id) => {
    await delay(500);
    return { data: { id } };
  }
};

export const flightApi = {
  // ... existing flight API methods
};

export const passengerApi = {
  // ... existing passenger API methods
};

export const cityApi = {
  // ... existing city API methods
};