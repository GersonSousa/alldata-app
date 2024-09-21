import instance from './ApiService';

const users = async () => {
  try {
    const response = await instance.get('/users/');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default { users };
