import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000"
})

//AUTH

//LOGIN
export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  localStorage.setItem('authToken', resp.data.auth_token);
  return resp.data.user;
}

//REGISTER
export const registerUser = async (registerData) => {
  const resp = await api.post('/signup', registerData);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  localStorage.setItem('authToken', resp.data.auth_token);
  return resp.data.user;
}

