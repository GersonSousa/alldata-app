import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3030/api/v1',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default instance;
