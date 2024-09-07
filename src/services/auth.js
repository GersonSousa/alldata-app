import api from '@/services/apiService';

const login = async (data) => {
  try {
    const response = await api.post('auth/', data);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to login';
    throw new Error(errorMessage);
  }
};

const forgot = async (data) => {
  try {
    const response = await api.post('auth/forgot', data);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to send forgot password';
    throw new Error(errorMessage);
  }
};
const reset = async (id, forgotToken, data) => {
  try {
    const response = await api.post(`auth/reset-password/${id}/${forgotToken}`, data);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to reset password';
    throw new Error(errorMessage);
  }
};

const home = async () => {
  try {
    const response = await api.get('users/home');
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to get home data';
    throw new Error(errorMessage);
  }
};

export default { login, forgot, reset, home };
