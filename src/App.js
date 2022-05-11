import React from 'react';
//import logo from './logo.svg';
import './App.css';
import EmployeeComponent from './components/EmployeeComponent';
import OrganizationComponent from './components/OrganizationComponent';
import ListEquipmentComponent from './components/ListEquipmentComponent';
import EquipmentTypeComponent from './components/EquipmentTypeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

// Add-import components Employee, Organization, Equipment, Equipment_Type
function App() {
  return (
    <div>
      <HeaderComponent/>
          <div className="Container">
            <br></br>
            <EmployeeComponent />
            <br></br>
            <OrganizationComponent />
            <br></br>
            <ListEquipmentComponent />
            <br></br>
            <EquipmentTypeComponent />
          </div>
        <FooterComponent />
    </div>

  );
}

export default App;
