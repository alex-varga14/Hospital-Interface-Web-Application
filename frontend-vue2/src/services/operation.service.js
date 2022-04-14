import api from './api';

class OperationService {
  create(data) {
    return api.post("http://localhost:8080/api/operations", data);
  }

  update(id, data) {
    return api.put(`/operations/${id}`, data);
  }

  delete(id) {
    return api.delete("http://localhost:8080/api/operations/" + id);
  }

  getById(id) {
    return api.get("http://localhost:8080/api/operations/" + id);
  }

  getByPatientID(id) {
    return api.get("http://localhost:8080/api/operations/patientID/:" + id);
  }

  getAllOperations(){
    return api.get("http://localhost:8080/api/operations");
  }
}
export default new OperationService();