import axios from 'axios';
import {getToken} from './jwt';

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
    console.log(error);
  },
);

export {http, postAxios};
