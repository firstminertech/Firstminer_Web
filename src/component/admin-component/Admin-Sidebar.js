import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {

  return (
    <div>
  
    <div className="d-flex border shadow">
      {/* Sidebar */}
      <div className="bg-light p-3 shadow-sm" style={{ minHeight: '100vh', width: '250px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="text-center mb-0">Admin Dashboard</h4>
          
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/admin/dashboard" className="nav-link text-dark">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/get-teams-details" className="nav-link text-dark">Teams</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/contacts" className="nav-link text-dark">User Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default AdminSidebar;
