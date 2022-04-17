import api from './api';

class VaccineService { 
  create(data) {
    return api.post("http://localhost:8080/api/vaccines", data);
  }

  update(id, data) {
    return api.put(`/vaccines/${id}`, data);
  }

  delete(id) {
    return api.delete("http://localhost:8080/api/vaccines/" + id);
  }
  
  getByPatientID(id) {
    return api.get("http://localhost:8080/api/vaccines/patientID/" + id);
  }
  
  getAllVaccines(){
    return api.get("http://localhost:8080/api/vaccines");
  }
  
}
export default new VaccineService();