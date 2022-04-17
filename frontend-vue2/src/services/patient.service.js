import api from './api';

class PatientService {
  create(data) {
    return api.post("http://localhost:8080/api/patients", data);
  }
  
  update(id, data) {
    return api.put(`/patients/${id}`, data);
  }

  delete(id) {
    return api.delete("http://localhost:8080/api/patients/" + id);
  }
  

  getById(id) {
    return api.get("http://localhost:8080/api/patients/" + id);
  }
  /*
  getByPatientID(id) {
    return api.get("http://localhost:8080/api/patients/patientID/:" + id);
  }
  */
  getAllPatients(){
    return api.get("http://localhost:8080/api/patients");
  }
  
}
export default new PatientService();