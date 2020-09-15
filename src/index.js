import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './assets/main.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token)
      config.headers.authorization = `Bearer ${token}`;
    return config
  },
  error => {
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
