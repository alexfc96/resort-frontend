import axios from "axios";

class ApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: "http://localhost:3005/",
    });
  }

  getAllResorts() {
    return this.apiClient.get("/resorts");
  }

  getOneResort(id) {
    return this.apiClient.get(`/resorts/${id}`);
  }

  createResort(body) {
    return this.apiClient.post("/resorts", body);
  }

  updateResort(id, body){
    return this.apiClient.put(`/resorts/${id}`, body)
  }

  deleteResort(id) {
    return this.apiClient.delete(`/resorts/${id}`);
  }
}

const apiClient = new ApiClient();
export default apiClient;
