import axios from 'axios';
import {formatResponse} from '../utils/responseFormatter';

const BASE_URL = 'https://api.jsonbin.io'; 

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

async function fetchData(endpoint, params = {}) {
  try {
    const response = await api.get(endpoint, { params });
    return await formatResponse(response.data)
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
}

export { fetchData };