import axios from 'axios';
import { cookieSearch, cookieRemove } from '../utils/cookie';
// const baseURL = 'http://localhost:3000/';
const baseURL = 'https://password-manager-back-production.up.railway.app/';

const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use(req => {
  const authTokens = cookieSearch('token');

  req.headers.Authorization = `Bearer ${authTokens}`;

  return req;
});

axiosInstance.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 401) {
      cookieRemove();
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export { axiosInstance };
