import api from './api';

class AppointmentService {
  create(data) {
    return api.post("/appointments", data);
  }

  update(id, data) {
    return api.put(`/appointments/${id}`, data);
  }

  delete(id) {
    return api.delete("http://localhost:8080/api/appointments/" + id);
  }

  getById(id) {
    return api.get("http://localhost:8080/api/appointments/" + id);
  }

  getByPatientID(id) {
    return api.get("http://localhost:8080/api/appointments/patientID/:" + id);
  }
}
export default new AppointmentService();

// import axios from 'axios';
// const API_URL = 'http://localhost:8080/api/test/';
// class AppointmentService {
//   getPublicContent() {
//     return axios.get(API_URL + 'all');
//   }
//   getUserBoard() {
//     return axios.get(API_URL + 'user', { headers: authHeader() });
//   }
//   getModeratorBoard() {
//     return axios.get(API_URL + 'mod', { headers: authHeader() });
//   }
//   getAdminBoard() {
//     return axios.get(API_URL + 'admin', { headers: authHeader() });
//   }
// }
// export default new UserService();