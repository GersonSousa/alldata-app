import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_ROOT_API,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
