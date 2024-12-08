import airportController from '../controllers/airportController';

export const getAirports = async () => {
  const result = await airportController.getAllAirports();
  if (!result.success) {
    throw new Error(result.error);
  }
  return { data: result.data };
};

export const getAirportById = async (id) => {
  const result = await airportController.getAirportById(id);
  if (!result.success) {
    throw new Error(result.error);
  }
  return { data: result.data };
};

export const searchAirports = async (query) => {
  const result = await airportController.searchAirports(query);
  if (!result.success) {
    throw new Error(result.error);
  }
  return { data: result.data };
};