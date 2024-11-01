import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './MedHome.css'; // Create this CSS file for styling

import Purchase from './Purchase'; // Import your components for each route
import MainStock from './MainStock';
import History from './History';
import PurchaseHistory from './PurchaseHistory';

const MedHome = () => {
  return (
    <Router>
      <div className="medhome-container">
        <aside className="sidebar">
          <div className="head"><h2>Medical</h2></div>
          <ul className="menu">
            <li><Link className='the' to="/purchase">Purchase</Link></li>
            <li><Link className='the' to="/pur-home">Purchase History </Link></li>
            <li><Link className='the' to="/main-stock">Main Stock</Link></li>
            <li><Link className='the' to="/history">History</Link></li>
          </ul>
        </aside>
        <main className="content">
          <Routes>
            <Route path="/" element={<div><h1>Welcome to Medical Management</h1><p>Select an option from the side menu to get started.</p></div>} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/main-stock" element={<MainStock />} />
            <Route path="/history" element={<History />} />
            <Route path="/pur-home" element={<PurchaseHistory />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default MedHome;
