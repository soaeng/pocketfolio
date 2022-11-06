import axios from 'axios';
import {getToken} from './jwt';

const http = axios.create({
  baseURL: 'https://k7e101.p.ssafy.io/api/',
  headers: {
    'Content-type': 'application/json',
  },
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
      reponse: {status},
    } = error;
    console.log(error);
  },
);

export {http};
