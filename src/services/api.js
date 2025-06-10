import axios from 'axios';

const API_BASE_URL = 'https://dragonball-api.com/api';

export const searchCharacters = async (nameQuery) => {
  try {
    const params = {};
    const trimmedQuery = nameQuery ? nameQuery.trim() : '';

    if (trimmedQuery) {
      params.name = trimmedQuery;
    } else {
      return [];
    }

    const response = await axios.get(`${API_BASE_URL}/characters`, { params });
    
    return Array.isArray(response?.data) ? response.data : [];
  } catch (error) {
    console.error('Error searching characters:', error);
    return []; 
  }
};
