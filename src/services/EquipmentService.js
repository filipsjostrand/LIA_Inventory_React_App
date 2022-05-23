import axios from 'axios'


// Rest end-point-URL
const EQUIPMENT_REST_API_URL = 'http://localhost:8080/api/equipment';

// Get list of equipment objects from database to export (from EquipmentService class)
class EquipmentService {

    getEquipment() {
        return axios.get(EQUIPMENT_REST_API_URL)
    }

    addEquipment(equipment) {
        return axios.post(EQUIPMENT_REST_API_URL, equipment);
    }

    //getEquipmentById(equipmentId) {
    getEquipmentById(equipmentId) {
        console.log(EQUIPMENT_REST_API_URL + '/' + equipmentId);
        return axios.get(EQUIPMENT_REST_API_URL + '/' + equipmentId);
    }

    updateEquipment(equipment, equipmentId) {
        console.log(equipmentId);
        return axios.put(EQUIPMENT_REST_API_URL + '/' + equipmentId, equipment)
    }
}

export default new EquipmentService();