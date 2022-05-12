import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Home from "./pages/Home";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import ListEquipmentComponent from './components/ListEquipmentComponent';
import ListEquipmentTypeComponent from './components/ListEquipmentTypeComponent';
import ListOrganizationComponent from './components/ListOrganizationComponent';
import ErrorPage from "./pages/ErrorPage";

// Add-import components Employee, Organization, Equipment, Equipment_Type
function App() {
  return (
    <div>
      <nav className="header">
        <HeaderComponent />
      </nav>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/equipment" element={<ListEquipmentComponent />} />
            <Route path="/equipmenttype" element={<ListEquipmentTypeComponent />} />
            <Route path="/organization" element={<ListOrganizationComponent />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
      <div className="footer">
        <FooterComponent />
      </div>
    </div>

  );
}

export default App;
