import React from 'react';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 sidebar">
          <div className="mt-4">
            <h4 className="text-light">Admin Dashboard</h4>
            <hr className="bg-light" />
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link text-light" href="#"><i className="fas fa-tachometer-alt mr-2"></i>Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#"><i className="fas fa-users mr-2"></i>Users</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#"><i className="fas fa-chart-line mr-2"></i>Analytics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#"><i className="fas fa-cog mr-2"></i>Settings</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <div className="mt-4">
            <h2>Welcome to the Admin Dashboard</h2>
            <p>Here we can manage users, view analytics, and configure settings.</p>

            {/* Add your main content here */}
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Users</h5>
                    <p className="card-text">Manage user accounts.</p>
                    <a href="#" className="btn btn-primary">View Users</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Analytics</h5>
                    <p className="card-text">View website and app analytics.</p>
                    <a href="#" className="btn btn-primary">View Analytics</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Settings</h5>
                    <p className="card-text">Configure website and app settings.</p>
                    <a href="#" className="btn btn-primary">View Settings</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
