import axios from 'axios';
import { parseKiValue, filterCharactersByKiRange } from '../utils/characterUtils';

const API_BASE_URL = 'https://dragonball-api.com/api';

const searchCharacters = async (searchParams) => {
  const { name, minKi, maxKi } = searchParams || {};

  const trimmedNameQuery = name ? name.trim() : '';
  const trimmedKiMin = minKi ? minKi.trim() : '';
  const trimmedKiMax = maxKi ? maxKi.trim() : '';

  if (!trimmedNameQuery && !trimmedKiMin && !trimmedKiMax) {
    return [];
  }

  try {
    const params = {};

    if (trimmedNameQuery) {
      params.name = trimmedNameQuery;
    }

    const response = await axios.get(`${API_BASE_URL}/characters`, { params });
    let results = Array.isArray(response?.data) ? response.data : (response.data.items || []);

    if (!trimmedKiMin && !trimmedKiMax) {
        return results;
    }

    const kiMinNumerical = trimmedKiMin ? parseKiValue(trimmedKiMin) : null;
    const kiMaxNumerical = trimmedKiMax ? parseKiValue(trimmedKiMax) : null;

    results = filterCharactersByKiRange(results, kiMinNumerical, kiMaxNumerical);

    return results;
  } catch (error) {
    console.error('Error searching characters:', error);
    let errorMessage = 'An unexpected error occurred while fetching characters.';

    if (error.response) {
      const status = error.response.status;
      if (status === 404) {
        errorMessage = 'The resource you requested could not be found on the server (Error 404).';
      } else if (status >= 500) {
        errorMessage = `The server encountered an internal error (Error ${status}). Please try again later.`;
      } else {
        errorMessage = `There was a problem with the request (Error ${status}).`;
      }
    } else if (error.request) {
      errorMessage = 'Network Error: No response received from the server. Please check your connection.';
    } else {
      errorMessage = `Error: ${error.message}`;
    }
    throw new Error(errorMessage); 
  }
};

const api = {
  searchCharacters,
};

export default api;
