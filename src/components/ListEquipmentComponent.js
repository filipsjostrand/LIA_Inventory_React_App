// import and export component, create component that display equipment list on a webpage.

import React from 'react';
import { Navigate } from 'react-router-dom';
import EquipmentService from '../services/EquipmentService';
import {withRouter} from '../helpers/withRouter';

export class ListEquipmentComponent extends React.Component {

    constructor() {
        super()
        this.state = { addIsToggleOn: true };
        // this.state = { updateIsToggleOn: true };
        this.addEquipmentButton = this.addEquipmentButton.bind(this);
        //this.updateEquipmentButton = this.updateEquipmentButton.bind(this);
        this.navigateFunction = this.navigateFunction.bind(this);
        this.state = {
            equipment: [
                { id: 0, unique_id_serial: '111112', model_name: 'iPhone 13', date_of_purchase: '2022-01-10' },
                { id: 1, unique_id_serial: '888AAA', model_name: 'MacBook Pro (14-inch, 2021)', date_of_purchase: '2022-01-10' },
            ]
        }
    }

    addEquipmentButton() {
        this.setState(prevState => ({
            addIsToggleOn: !prevState.addIsToggleOn
        }));
    }

    navigateFunction(id)
    {
        console.log(id);
        this.props.navigate(`/update-equipment/${id}`)
    }

    componentDidMount() {
        EquipmentService.getEquipment().then((response) => {
            console.log(response)
            this.setState({ equipment: response.data })
        });
    }

// <button onClick = { () => this.updateEquipmentButton(equipment.id)} className="btn btn-info">Update</button>

    render() {

const addIsToggleOn = this.state.addIsToggleOn;

if (addIsToggleOn) {
    return <Navigate to="/add-equipment"/>
}

        return (
            <div>
                <h2 className="text-center"> Equipment list </h2>
                <div className="row">

                    <button className="btn btn-primary" id="add-equipment-button" onClick={this.addEquipmentButton}> Add Equipment</button>

                </div>
                <table className="table table-striped">
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
                                    <tr key={equipment.id}>
                                        <td> {equipment.id}</td>
                                        <td> {equipment.unique_id_serial}</td>
                                        <td> {equipment.model_name}</td>
                                        <td> {equipment.date_of_purchase}</td>
                                        <td>
                                            <button onClick = { () => this.navigateFunction(equipment.id)} className="btn btn-info">Update</button>
                                        </td>

                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withRouter(ListEquipmentComponent)