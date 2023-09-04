// you can remove this plug if you write in this file
import axios from 'axios';

const BASE_URL = 'https://fe-may23-bughunters.onrender.com';

export function getProductsByCategory(limit = 10, offset = 0) {
  return axios.get(`${BASE_URL}/products?limit=${limit}&offset=${offset}`);
}

export function getProductById(productId: string) {
  return axios.get(`${BASE_URL}/products/${productId}`);
}
