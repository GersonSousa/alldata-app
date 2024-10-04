import instance from './ApiService';
const login = async (data) => {
  try {
    const response = await instance.post('/auth/', {
      email: data.email,
      password: data.password,
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Falha ao fazer login';
    throw new Error(errorMessage);
  }
};

const checkAuth = async () => {
  try {
    const response = await instance.get('/auth/check-auth');
    return response.data.user;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Erro ao verificar autenticação.';
    console.error('Erro ao verificar autenticação:', errorMessage);
    return false;
  }
};

const logout = async () => {
  try {
    await instance.post('/auth/logout');
    return true;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Falha ao fazer logout.';
    console.error('Erro ao fazer logout:', errorMessage);
    return false;
  }
};

export default { login, checkAuth, logout };
