import api from './api';

class EmergencyContactService {
  create(data) {
    return api.post("http://localhost:8080/api/emergency-contacts", data);
  }
  
  update(id, data) {
    return api.put(`/emergency-contacts/${id}`, data);
  }

  delete(id) {
    return api.delete("http://localhost:8080/api/emergency-contacts/" + id);
  }
  
  getContactByPatientID(id) {
    return api.get("http://localhost:8080/api/emergency-contacts/patientID/" + id);
  }
  
  getAllContacts(){
    return api.get("http://localhost:8080/api/emergency-contacts");
  }
  
}
export default new EmergencyContactService();