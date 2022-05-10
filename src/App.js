import React from 'react';
//import logo from './logo.svg';
import './App.css';
import EmployeeComponent from './components/EmployeeComponent';
import OrganizationComponent from './components/OrganizationComponent';
import EquipmentComponent from './components/EquipmentComponent';
import EquipmentTypeComponent from './components/EquipmentTypeComponent';

// Add-import components Employee, Organization, Equipment, Equipment_Type
function App() {
  return (
    <div className="App">
        <br></br>
        <br></br>
        <EmployeeComponent />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <OrganizationComponent />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <EquipmentComponent />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <EquipmentTypeComponent />

    </div>
  );
}

export default App;
