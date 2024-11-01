import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './OpHome.css'; // Create this CSS file for styling

import AddNew from './AddNew'; // Import the components for each route
import Search from './Search';
import History from './History';
import Report from './Report';

const OpHome = () => {
  return (
    <Router>
      <div className="ophome-container">
        <aside className="sidebar">
          <div className="head"><h2>OP</h2></div>
          <ul className="menu">
            <li><Link className='the' to="/add-new">Add New</Link></li>
            <li><Link className='the' to="/search">Search</Link></li>
            <li><Link className='the' to="/history">History</Link></li>
            <li><Link className='the' to="/report">Report</Link></li>
          </ul>
        </aside>
        <main className="content">
          <Routes>
            <Route path="/" element={<div><h1>Welcome to OP</h1><p>Select an option from the side menu to get started.</p></div>} />
            <Route path="/add-new" element={<AddNew />} />
            <Route path="/search" element={<Search />} />
            <Route path="/history" element={<History />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default OpHome;
