import instance from './apiService';

const getUsers = async () => {
  const response = await instance.get('/users');
  return response.data;
};

export default { getUsers };
