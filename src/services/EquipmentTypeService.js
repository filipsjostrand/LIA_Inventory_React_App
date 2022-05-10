import axios from 'axios'

// Rest end-point-URL
const EQUIPMENTTYPE_REST_API_URL = 'http://localhost:8080/api/equipmenttype';

// Get list of equipment_type objects from database to export (from EquipmentTypeService class)
class EquipmentTypeService {

    getEquipmentTypes() {
        return axios.get(EQUIPMENTTYPE_REST_API_URL)
    }
}

export default new EquipmentTypeService();