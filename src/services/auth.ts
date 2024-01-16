import axios from 'axios';

export function login(value: Record<string, unknown>) {
  return axios.post('/authentication/login', value);
}
