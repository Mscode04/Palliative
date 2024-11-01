import React from 'react';
import './History.css'
const History = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1>History Page</h1>
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
        <select className="category-select">
          <option value="">Date</option>
          <option value="2024-10-01">2024-10-01</option>
          <option value="2024-10-02">2024-10-02</option>
        </select>
        <select className="category-select">
          <option value="">Homecare Plan</option>
          <option value="Plan1">Plan 1</option>
          <option value="Plan2">Plan 2</option>
        </select>
        <select className="category-select">
          <option value="">Category</option>
          <option value="Category1">Category 1</option>
          <option value="Category2">Category 2</option>
        </select>
        <button className="filter-button">Filter</button>
      </div>

      {/* Data Table */}
      <table className="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Patient Name</th>
            <th>Disease</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index}>
              <td>2024-10-{(index + 1).toString().padStart(2, '0')}</td>
              <td>Patient {index + 1}</td>
              <td>Disease {index % 3 + 1}</td>
              <td>Category {index % 2 + 1}</td>
              <td>
                <button className="explore-button">Explore More</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
