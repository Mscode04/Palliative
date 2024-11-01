import React from 'react';

import '../Styles/Login.css';

function Login() {
  return (
    <div className="container-fluid login-container">
      <div className="row justify-content-center">
        <div className="col-11 col-sm-8 col-md-6 col-lg-4 login-card">
          <h2 className="text-center mb-4">Palliative Makkaraparamba</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Username</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your Username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-4">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
