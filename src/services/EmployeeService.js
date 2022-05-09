import axios from 'axios'

// Rest end-point-URL
const EMPLOYEES_REST_API_URL = 'http://localhost:8080/api/employees';

// Get list of employee objects from database to export (from EmployeeService class)
class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEES_REST_API_URL)
    }
}

export default new EmployeeService();