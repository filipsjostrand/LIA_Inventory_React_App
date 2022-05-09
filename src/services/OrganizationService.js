import axios from 'axios'

// Rest end-point-URL
const ORGANIZATIONS_REST_API_URL = 'http://localhost:8080/api/organizations';

// Get list of employee objects from database to export (from EmployeeService class)
class OrganizationService {

    getOrganizations() {
        return axios.get(ORGANIZATIONS_REST_API_URL)
    }
}

export default new OrganizationService();