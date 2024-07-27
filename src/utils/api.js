// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000',
});

export const fetchTasks = () => api.get('/tasks');
export const generateTask = (task) => api.post('/generate_task', { task });
