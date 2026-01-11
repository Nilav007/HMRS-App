import axios from 'axios';

const API_BASE_URL = 'http://localhost:8082/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const employerAPI = {
  getAll: () => api.get('/employers/getall'),
  getById: (id) => api.get(`/employers/getbyid?id=${id}`),
  add: (employer) => api.post('/employers/add', employer),
  update: (employer) => api.put('/employers/update', employer),
  delete: (id) => api.delete(`/employers/delete?id=${id}`),
};

export const jobSeekerAPI = {
  getAll: () => api.get('/jobseekers/getall'),
  getById: (id) => api.get(`/jobseekers/getbyid?id=${id}`),
  add: (jobSeeker) => api.post('/jobseekers/add', jobSeeker),
  update: (jobSeeker) => api.put('/jobseekers/update', jobSeeker),
  delete: (id) => api.delete(`/jobseekers/delete?id=${id}`),
};

export const jobPositionAPI = {
  getAll: () => api.get('/jobpositions/getall'),
  getById: (id) => api.get(`/jobpositions/getbyid?id=${id}`),
  add: (jobPosition) => api.post('/jobpositions/add', jobPosition),
  update: (jobPosition) => api.put('/jobpositions/update', jobPosition),
  delete: (id) => api.delete(`/jobpositions/delete?id=${id}`),
};

export default api;
