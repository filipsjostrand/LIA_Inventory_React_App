// import and export component, create component that display user list on a webpage.

import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {

    constructor() {
        this.state = {
            users:[]
        }
    }

    // componentDidMount() calls Rest API
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
                        
                            <td> User Id</td>
                            <td> User First Name</td>
                            <td> User Last Name</td>
                            <td> User Email Id</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.user.map(
                                user =>
                                <tr key = {user.id}>
                                    <td> {user.id}</td>
                                    <td> {user.firstname}</td>
                                    <td> {user.lastname}</td>
                                    <td> {user.emailId}</td>
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