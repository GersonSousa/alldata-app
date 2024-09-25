import instance from './ApiService';

const users = async () => {
  try {
    const response = await instance.get('/users/');

    const users = await response.data.users;

    return { users: users };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default { users };
