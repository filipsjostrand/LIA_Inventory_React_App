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
import AddEquipmentComponent from './components/AddEquipmentComponent';
import UpdateEquipmentComponent from './components/UpdateEquipmentComponent';
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <nav className="header">
        <HeaderComponent />
      </nav>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/equipment" element={<ListEquipmentComponent />} />
            <Route path="/equipmenttype" element={<ListEquipmentTypeComponent />} />
            <Route path="/organization" element={<ListOrganizationComponent />} />
            <Route path="/add-equipment" element={<AddEquipmentComponent />} />
            <Route path="/update-equipment/:id" element={<UpdateEquipmentComponent />} />
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
