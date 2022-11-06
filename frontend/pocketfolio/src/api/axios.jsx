import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://k7e101.p.ssafy.io/api/',
  headers: {
    'Content-type': 'application/json',
  },
});

// add access token to header
axios.interceptors.request.use(config => {
  config.headers['access-Token'] = window.localStorage.getItem('access-Token');
  console.log(config)
  return config
});

