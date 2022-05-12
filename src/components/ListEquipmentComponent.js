// import and export component, create component that display equipment list on a webpage.

import React from 'react';
import { useNavigate } from 'react-router-dom';
import EquipmentService from '../services/EquipmentService';



/* Stackoverflow (History -> Navigate #1)
const navigate = useNavigate();


const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
}


navigate({ pathname: './add-Equipment' }) 

navigate({ pathname: '/add-Equipment' }, { replace: true })
*/


/* Stackoverflow (History -> Navigate #2)
function App() {
    let navigate = useNavigate();
    let [error, setError] = React.useState(null);
  
    async function handleSubmit(event) {
      event.preventDefault();
      let result = await submitForm(event.target);
      if (result.error) {
        setError(result.error);
      } else {
        navigate('success');
      }
    }
  
    return (
      <form onSubmit={handleSubmit}>
        // ...
      </form>
    );
*/

/* FrontEnd-formulär (i div)

<form>
    <input placeholder="Add equipment" />
    <button onClick="onSubmit()">Spara</button>
</form>
*/

class ListEquipmentComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            equipment:[ 
                {id: 0, unique_id_serial: '111112', model_name: 'iPhone 13', date_of_purchase: '2022-01-10'},
                {id: 1, unique_id_serial: '888AAA', model_name: 'MacBook Pro (14-inch, 2021)', date_of_purchase: '2022-01-10'},
        ]
        }

        /* Binding an event (click on addEquipment-button) in a constructor "addEquipment(){}".     (Fullstack-CRUD-tutorial)
        this.addEquipment = this.addEquipment.bind(this);
        */
    }


    componentDidMount() {
        EquipmentService.getEquipment().then((response) => {
            console.log(response)
            this.setState({ equipment: response.data})
        });
    }

    /* Constructor "addEquipment(){}"   (navigate to AddEquipmentComponent)                         (Fullstack-CRUD-tutorial, "history" obsolete in React v6)

    addEquipment(){
        //this.props.history.push('/add-equipment');
        this.props.navigate.push('/add-equipment');
    }
    */

    render (){
        return (
            <div>
                <h2 className = "text-center"> Equipment list </h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEquipment}> Add Equipment</button>
                </div>
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

export default ListEquipmentComponent