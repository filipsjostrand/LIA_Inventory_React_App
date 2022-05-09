// import and export component, create component that display organization list on a webpage.

import React from 'react';
import OrganizationService from '../services/OrganizationService';

class OrganizationComponent extends React.Component {

    constructor() {
        //super(props)
        super()
        this.state = {
            organizations:[ 
                //{id: 0, first_name: 'John', last_name: 'Doe', email: 'jd@demail.com'},
                //{id: 1, first_name: 'Johanna', last_name: 'Does', email: 'jdd@demail.com'}
                {id: 0, name: 'JKP', location: 'Jöönköping'},
                {id: 1, name: 'VX', location: 'Växjöö'} 
        ]
        }
    }

    // componentDidMount() calls Rest API (when component is mounted)
    componentDidMount() {
        OrganizationService.getOrganizations().then((response) => {
            this.setState({ organizations: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Organizations list </h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> Id</td>
                            <td> Name</td>
                            <td> Location</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.organizations.map(
                                organization =>
                                <tr key = {organization.id}>
                                    <td> {organization.id}</td>
                                    <td> {organization.name}</td>
                                    <td> {organization.location}</td>

                                </tr>
                            )

                        }

                    </tbody>    
                </table>
            </div>
        )

    }

}

export default OrganizationComponent