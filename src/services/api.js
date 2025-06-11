import axios from 'axios';
import { parseKiValue, filterCharactersByKiRange } from '../utils/characterUtils';

const API_BASE_URL = 'https://dragonball-api.com/api';

export const searchCharacters = async (nameQuery, kiMin, kiMax) => {
  const trimmedNameQuery = nameQuery ? nameQuery.trim() : '';
  const trimmedKiMin = kiMin ? kiMin.trim() : '';
  const trimmedKiMax = kiMax ? kiMax.trim() : '';

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
    return []; 
  }
};
