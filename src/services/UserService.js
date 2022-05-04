import axios from 'axios'

// Rest end-point-URL
const USERS_REST_API_URL = "'http://localhost:8080/api/users'";

// Export objects from UserService-class
class UserService {

    getUsers() {
        axios.get(USERS_REST_API_URL)
    }
}

export default new UserService();