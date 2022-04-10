import api from './api';

class PrescriptionService {
  create(data) {
    return api.post("/prescriptions", data);
  }
 /*
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
  */
}
export default new PrescriptionService();