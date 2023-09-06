import axios from 'axios';

const BASE_URL = 'https://fe-may23-bughunters.onrender.com/favourites';

export function getAllByUserId(userId = 1) {
  return axios.get(`${BASE_URL}/${userId}`);
}

export function addFavouriteProduct(userId = 1, productId: string) {
  return axios.post(`${BASE_URL}/${userId}/${productId}`);
}

export function removeFavouriteProduct(userId = 1, productId: string) {
  return axios.delete(`${BASE_URL}/${userId}/${productId}`);
}
