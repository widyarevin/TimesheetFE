import httpcommon from "./httpcommon";

class DataService {
  register(data) {
    return httpcommon.post("/api/userM/registerDTO");
  }
  login(data) {
    return httpcommon.post("/api/userM/registerDTO");
  }
  getTimesheet() {
    return httpcommon.get("http://localhost:8080/api/timesheet/");
  }
}
export default new DataService();
