import flightController from '../controllers/flightController';

export const getFlights = async () => {
  const result = await flightController.getAllFlights();
  if (!result.success) {
    throw new Error(result.error);
  }
  return { data: result.data };
};

export const getFlightById = async (id) => {
  const result = await flightController.getFlightById(id);
  if (!result.success) {
    throw new Error(result.error);
  }
  return { data: result.data };
};

export const searchFlights = async (params) => {
  const result = await flightController.searchFlights(params);
  if (!result.success) {
    throw new Error(result.error);
  }
  return { data: result.data };
};

export const getFlightsByStatus = async (status) => {
  const result = await flightController.getFlightsByStatus(status);
  if (!result.success) {
    throw new Error(result.error);
  }
  return { data: result.data };
};