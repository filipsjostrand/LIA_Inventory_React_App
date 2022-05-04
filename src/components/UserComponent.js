// import and export component, create component that display user list on a webpage.

import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {

    constructor() {
        //super(props)
        super()
        this.state = {
            users:[ 
                {id: 0, firstname: 'John', lastname: 'Doe', email: 'jd@demail.com'},
                {id: 1, firstname: 'Johanna', lastname: 'Does', email: 'jdd@demail.com'}
        ]
        }
    }

    // componentDidMount() calls Rest API (when component is mounted)
    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Users list </h1>
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
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                    <td> {user.id}</td>
                                    <td> {user.firstname}</td>
                                    <td> {user.lastname}</td>
                                    <td> {user.email}</td>
                                </tr>
                            )

                        }

                    </tbody>    
                </table>
            </div>
        )

    }

}

export default UserComponent