import axios from 'axios';

const api = axios.create({
  baseURL: 'https://alldata-api.onrender.com/api/v1/',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

