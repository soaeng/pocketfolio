import axios from 'axios';
import {deleteAllToken, getRefreshToken, getToken, saveToken} from './jwt';

const http = axios.create({
  baseURL: 'https://k7e101.p.ssafy.io/api/',
  // baseURL: 'http://localhost:8081/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const postAxios = axios.create({
  baseURL: 'https://k7e101.p.ssafy.io/api/',
  // baseURL: 'http://localhost:8081/api/',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

postAxios.interceptors.request.use(function (config) {
  config.headers['Authorization'] = `Bearer ${getToken()}`;
  return config;
});

http.interceptors.request.use(function (config) {
  config.headers['Authorization'] = `Bearer ${getToken()}`;
  return config;
});

http.interceptors.response.use(
  res => res,
  async error => {
    const {
      config,
      response: {status},
    } = error;

    const originalRequest = config;

    if (status === 403) {
      const refreshToken = getRefreshToken();
      try {
        const {data} = await axios({
          method: 'get',
          url: `users/refresh`,
          data: {refreshToken},
        });

        const newAccessToken = data;

        originalRequest.headers = {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + newAccessToken,
        };
        saveToken(newAccessToken);
        return await axios(originalRequest);
      } catch (err) {
        deleteAllToken();
      }
    }
    return Promise.reject(error);
  },
);

export {http, postAxios};
