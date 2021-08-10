import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.59:3333',
  // baseURL: 'http://10.0.0.101:3333',
});

export default api;
