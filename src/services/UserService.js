import axios from 'axios'

// Rest end-point-URL
const USERS_REST_API_URL = 'http://localhost:8080/api/users';

// Get list of user objects from database to export (from UserService class)
class UserService {

    getUsers() {
        return axios.get(USERS_REST_API_URL)
    }
}

export default new UserService();