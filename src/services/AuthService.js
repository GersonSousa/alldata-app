import instance from './ApiService';
import Cookies from 'js-cookie';

const login = async (data) => {
  try {
    const response = await instance.post('/auth/', {
      email: data.email,
      password: data.password,
    });
    // Cookies.set('token', response.data.token, {
    //   expires: 7,
    //   secure: false,
    // });

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Falha ao fazer login';
    throw new Error(errorMessage);
  }
};

export default { login };
