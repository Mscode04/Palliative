import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './HomeCareHome.css';

import History from './History';
import Report from './Report';


const HomeCareHome = () => {
  return (
    <Router>
      <div className="homecare-container">
        <aside className="sidebar">
          <div className="head"><h2>Home Care</h2></div>
          <ul className="menu">
            <li><Link className='the'  to="/history">History</Link></li>
            <li><Link className='the'  to="/report">Report</Link></li>
            
          </ul>
        </aside>
        <main className="content">
          <Routes>
            <Route path="/" element={<div><h1>Welcome to Home Care</h1><p>Select an option from the side menu to get started.</p></div>} />
            <Route path="/history" element={<History />} />
            <Route path="/report" element={<Report />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default HomeCareHome;
