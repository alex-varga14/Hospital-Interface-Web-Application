import api from './api';

class DoctorService { 
  create(data) {
    return api.post("http://localhost:8080/api/doctors", data);
  }
  /*
  update(id, data) {
    return api.put(`/patients/${id}`, data);
  }

  delete(id) {
    return api.delete("http://localhost:8080/api/patients/" + id);
  }
  */

  getByPatientID(id) {
    return api.get("http://localhost:8080/api/doctors/patientID/" + id);
  }
  
  getAllDoctors(){
    return api.get("http://localhost:8080/api/doctors");
  }
  
}
export default new DoctorService();