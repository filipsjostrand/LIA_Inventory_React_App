// import and export component, create component that display user list on a webpage.

import React from 'react';
import EmployeeService from '../services/EmployeeService';

class EmployeeComponent extends React.Component {

    constructor() {
        //super(props)
        super()
        this.state = {
            employees:[ 
                {id: 0, firstname: 'John', lastname: 'Doe', email: 'jd@demail.com'},
                {id: 1, firstname: 'Johanna', lastname: 'Does', email: 'jdd@demail.com'}
        ]
        }
    }

    // componentDidMount() calls Rest API (when component is mounted)
    componentDidMount() {
        EmployeeService.getEmployees().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Employees list </h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                        
                            <td> Id</td>
                            <td> First Name</td>
                            <td> Last Name</td>
                            <td> Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                <tr key = {employee.id}>
                                    <td> {employee.id}</td>
                                    <td> {employee.firstname}</td>
                                    <td> {employee.lastname}</td>
                                    <td> {employee.email}</td>
                                </tr>
                            )

                        }

                    </tbody>    
                </table>
            </div>
        )

    }

}

export default employeeComponent