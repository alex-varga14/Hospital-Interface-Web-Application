import api from './api';

class DisorderService { 
  create(data) {
    return api.post("http://localhost:8080/api/disorders", data);
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
    return api.get("http://localhost:8080/api/disorders/patientID/" + id);
  }
  
  getAllDisorders(){
    return api.get("http://localhost:8080/api/disorders");
  }
  
}
export default new DisorderService();