// import and export component, create component that display organization list on a webpage.

import React from 'react';
import EquipmentTypesService from '../services/EquipmentTypeService';

class EquipmentTypeComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            equipmentypes:[ 
                {id: 0, name: 'Foneee'},
                {id: 1, name: 'Commmp'} 
        ]
        }
    }

    componentDidMount() {
        EquipmentTypesService.getEquipmentTypes().then((response) => {
            this.setState({ equipmenttypes: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Equipment Type list </h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> Id</td>
                            <td> Name</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.equipmentypes.map(
                                equipmenttype =>
                                <tr key = {equipmenttype.id}>
                                    <td> {equipmenttype.id}</td>
                                    <td> {equipmenttype.name}</td>

                                </tr>
                            )

                        }

                    </tbody>    
                </table>
            </div>
        )

    }

}

export default EquipmentTypeComponent