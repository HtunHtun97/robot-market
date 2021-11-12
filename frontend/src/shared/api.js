import axios from '../axios-robot';

export function fetchRobots() {
  return axios.get('/api/robots');
}
