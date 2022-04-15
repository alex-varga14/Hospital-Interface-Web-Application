import api from './api';

class BillService {
  create(data) {
    return api.post("http://localhost:8080/api/bills", data);
  }
  
//   update(id, data) {
//     return api.put(`/bills/${id}`, data);
//   }

  delete(id) {
    return api.delete("http://localhost:8080/api/bills/" + id);
  }
  
  getById(id) {
    return api.get("http://localhost:8080/api/bills/" + id);
  }
  
}
export default new BillService();