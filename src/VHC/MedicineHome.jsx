import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './MedicineHome.css'; // Create this CSS file for styling

import AddPatient from './AddPatient'; // Import the components for each route
import SearchPatient from './SearchPatient';
import Report from './Report';
import History from './History';

const MedicineHome = () => {
  return (
    <Router>
      <div className="medicine-home-container">
        <aside className="sidebar">
          <div className="head"><h2>Medicine</h2></div>
          <ul className="menu">
            <li><Link className='the' to="/add-patient">Add New</Link></li>
            <li><Link className='the' to="/search-patient">Search</Link></li>
            <li><Link className='the' to="/report">Report</Link></li>
            <li><Link className='the' to="/history">History</Link></li>
          </ul>
        </aside>
        <main className="content">
          <Routes>
            <Route path="/" element={<div><h1>Welcome to Medicine Home</h1><p>Select an option from the side menu to get started.</p></div>} />
            <Route path="/add-patient" element={<AddPatient />} />
            <Route path="/search-patient" element={<SearchPatient />} />
            <Route path="/report" element={<Report />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default MedicineHome;
