import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.1.239:3030',
  baseURL: 'https://bethehero-fantinattoapp.herokuapp.com/',
});

export default api;
