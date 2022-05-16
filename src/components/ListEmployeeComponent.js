// import and export component, create component that display employee list on a webpage.

import React from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            employees:[ 
                {id: 0, first_name: 'John', last_name: 'Doe'},
                {id: 1, first_name: 'Johanna', last_name: 'Does'} 
        ]
        }
    }

    // componentDidMount() calls Rest API (when component is mounted)
    componentDidMount() {
        EmployeeService.getEmployees().then((response) => {
            this.setState({ employees: response.data})
        });
    }


    render (){
        return (
            <div>
                <h2 className = "text-center"> Employees list </h2>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> Id</td>
                            <td> First Name</td>
                            <td> Last Name</td>
                            <td> Email</td>
                            <td> Phone number</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                <tr key = {employee.id}>
                                    <td> {employee.id}</td>
                                    <td> {employee.first_name}</td>
                                    <td> {employee.last_name}</td>
                                    <td> {employee.email}</td>
                                    <td> {employee.phone_number}</td>

                                </tr>
                            )

                        }

                    </tbody>    
                </table>
            </div>
        )

    }

}

export default ListEmployeeComponent