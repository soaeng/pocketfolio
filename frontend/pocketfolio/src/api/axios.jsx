import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://k7e101.p.ssafy.io/api/',
  headers: {
    'Content-type': 'application/json',
  },
});