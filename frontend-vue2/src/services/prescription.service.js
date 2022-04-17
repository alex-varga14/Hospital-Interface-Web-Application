import api from './api';

class PrescriptionService {
  create(data) {
    return api.post("/prescriptions", data);
  }
 
  update(id, data) {
    return api.put(`/prescriptions/${id}`, data);
  }

  delete(id) {
    return api.delete("http://localhost:8080/api/prescriptions/" + id);
  }

  getById(id) {
    return api.get("http://localhost:8080/api/prescriptions/" + id);
  }

  getByPatientID(id) {
    return api.get("http://localhost:8080/api/prescriptions/patientID/" + id);
  }
  
}
export default new PrescriptionService();