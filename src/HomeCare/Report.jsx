import React from 'react';
import './Report.css';

const Report = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1>Report Page</h1>
        <input type="text" placeholder="Search..." className="search-bar" />
      </nav>

{/* Category Section */}
<div className="category-section">
        <select className="category-select">
          <option value="">Disease</option>
          <option value="Disease1">Disease 1</option>
          <option value="Disease2">Disease 2</option>
        </select>
        <select className="category-select">
          <option value="">Nurse</option>
          <option value="Nurse1">Nurse 1</option>
          <option value="Nurse2">Nurse 2</option>
        </select>
        <input type="date" className="category-select" placeholder="Start Date" />
        <input type="date" className="category-select" placeholder="End Date" />
        <select className="category-select">
          <option value="">Category</option>
          <option value="Category1">NHC</option>
          <option value="Category2">DHC</option>
        </select>
        <select className="category-select">
          <option value="">Doctor</option>
          <option value="Doctor1">Doctor 1</option>
          <option value="Doctor2">Doctor 2</option>
        </select>
        <button className="filter-button">Filter</button>
        <button className="filter-button print">Print</button>
      </div>

      {/* Data Table */}
      <table className="data-table">
        <thead>
          <tr>
            <th>Number</th>
            <th>Patient Name</th>
            <th>Disease</th>
            <th>Place</th>
            <th>Homecare Plan</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>Patient {index + 1}</td>
              <td>Disease {index % 3 + 1}</td>
              <td>Place {index % 2 + 1}</td>
              <td>Plan {index % 2 + 1}</td>
              <td>
                <button className="show-more-button">Show More</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
