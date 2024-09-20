import instance from './ApiService';

const login = async (data) => {
  try {
    const response = await instance.post('/auth/', {
      email: data.email,
      password: data.password,
    });

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to login';
    throw new Error(errorMessage);
  }
};

export default { login };
