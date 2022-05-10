// import and export component, create component that display equipment list on a webpage.

import React from 'react';
import EquipmentService from '../services/EquipmentService';

/* FrontEnd-formulär (i div)

<form>
    <input placeholder="Add equipment" />
    <button onClick="onSubmit()">Spara</button>
</form>
*/

class EquipmentComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            equipment:[ 
                {id: 0, unique_id_serial: '111112', model_name: 'iPhone 13', date_of_purchase: '2022-01-10'},
                {id: 1, unique_id_serial: '888AAA', model_name: 'MacBook Pro (14-inch, 2021)', date_of_purchase: '2022-01-10'},
        ]
        }
    }

    componentDidMount() {
        EquipmentService.getEquipment().then((response) => {
            console.log(response)
            this.setState({ equipment: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Equipment list </h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> Id</td>
                            <td> Unique Id Serial</td>
                            <td> Model Name</td>
                            <td> Date of Purchase</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.equipment.map(
                                equipment =>
                                <tr key = {equipment.id}>
                                    <td> {equipment.id}</td>
                                    <td> {equipment.unique_id_serial}</td>
                                    <td> {equipment.model_name}</td>
                                    <td> {equipment.date_of_purchase}</td>

                                </tr>
                            )

                        }

                    </tbody>    
                </table>

            </div>
        )

    }

}

export default EquipmentComponent