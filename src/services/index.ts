import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
  headers: { 'Content-Type': 'application/json' },
});

export const fetchProducts = async () => {
  const response = await apiClient.get('/products');
  return response.data;
};