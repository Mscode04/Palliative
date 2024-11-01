import React from 'react';
import '../Styles/Home.css';
import HC from '../assets/homecare.jpg'
import VHC from '../assets/vhc.jpg'
import OP from '../assets/op.jpg'
import MED from '../assets/medicine.jpg'
function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Palliative Mkba</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <span className="nav-link">Home Care</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">OP</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Medicine</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">VHC</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="text-center mb-4">
        <h1 className="home-heading">Palliative Makkaraparamba</h1>
        <p className="home-description">
        Dedicated to Dignity and Care.
        </p>
      </header>

      {/* Card Section */}
      <div className="row justify-content-center card-sec">
        <div className="col-md-6 col-lg-3">
          <div className="card home-card mb-4">
            <img src={HC} className="card-img-top" alt="Home Care" />
            <div className="card-body text-center">
              <h5 className="card-title">Home Care</h5>
              <button className="btn btn-primary" onClick={() => alert('Home Care clicked')}>Explore</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card home-card mb-4">
            <img src={OP} className="card-img-top" alt="OP" />
            <div className="card-body text-center">
              <h5 className="card-title">OP</h5>
              <button className="btn btn-primary" onClick={() => alert('OP clicked')}>Explore</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card home-card mb-4">
            <img src={MED} className="card-img-top" alt="Medicine" />
            <div className="card-body text-center">
              <h5 className="card-title">Medicine</h5>
              <button className="btn btn-primary" onClick={() => alert('Medicine clicked')}>Explore</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card home-card mb-4">
            <img src={VHC} className="card-img-top" alt="VHC" />
            <div className="card-body text-center">
              <h5 className="card-title">VHC</h5>
              <button className="btn btn-primary" onClick={() => alert('VHC clicked')}>Explore</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-center mt-5">
        <p>Customer Care: <strong> Ph: 8157980307</strong></p>
        <p>Neuraq Technologies</p>
      </footer>
    </div>
  );
}

export default Home;
