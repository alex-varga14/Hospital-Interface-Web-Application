import api from './api';

class FacilityService {
  create(data) {
    return api.post("http://localhost:8080/api/facilities", data);
  }
  /*
  update(id, data) {
    return api.put(`/facilities/${id}`, data);
  }

  delete(id) {
    return api.delete("http://localhost:8080/api/facilities/" + id);
  }
  */

  /*
  getByFacilityID(id) {
    return api.get("http://localhost:8080/api/facilities/:" + id);
  }
  */
  getAll(){
    return api.get("http://localhost:8080/api/facilities");
  }
  
}
export default new FacilityService();