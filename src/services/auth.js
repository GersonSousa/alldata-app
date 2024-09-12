import instance from './apiService';

const login = async (data) => {
  try {
    const response = await instance.post('/auth/', data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to login');
  }
};

export default {
  login,
};
