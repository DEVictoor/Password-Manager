import { axiosInstance } from './axiosInstance';

const getAuth = form =>
  axiosInstance
    .post('/auth/login', form)
    .then(res => res.data)
    .catch(error => console.log(error));

export { getAuth };
