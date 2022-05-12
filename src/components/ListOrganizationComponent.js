// import and export component, create component that display organization list on a webpage.

import React from 'react';
import OrganizationService from '../services/OrganizationService';

class ListOrganizationComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            organizations:[ 
                {id: 0, name: 'JKP', location: 'Jöönköping'},
                {id: 1, name: 'VX', location: 'Växjöö'} 
        ]
        }
    }

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

export default ListOrganizationComponent