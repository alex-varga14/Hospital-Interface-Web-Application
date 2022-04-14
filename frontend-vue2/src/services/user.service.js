import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/test/';
class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }
  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
  getDoctorBoard() {
    return axios.get(API_URL + 'doctor', { headers: authHeader() });
  }
  getPatientBoard() {
    return axios.get(API_URL + 'patient', { headers: authHeader() });
  }
  getSurgeonBoard() {
    return axios.get(API_URL + 'surgeon', { headers: authHeader() });
  }
}
export default new UserService();
/*import api from './api';

class UserService {
  getPublicContent() {
    return api.get('/test/all');
  }

  getUserBoard() {
    return api.get('/test/user');
  }

  getModeratorBoard() {
    return api.get('/test/mod');
  }

  getAdminBoard() {
    return api.get('/test/admin');
  }
}

export default new UserService();
*/