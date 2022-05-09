import React from 'react';
//import logo from './logo.svg';
import './App.css';
import EmployeeComponent from './components/EmployeeComponent';
import OrganizationComponent from './components/OrganizationComponent';

// Add-import component EmployeeComponent
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

    </div>
  );
}

export default App;
