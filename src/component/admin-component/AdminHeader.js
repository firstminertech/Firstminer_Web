// src/components/Header.js
import React from 'react';

const AdminHeader = () => {
    const handleLogout = () => {
        // Add your logout logic here
        alert("Logged out");
    };

    return (
        <header className="bg-info text-white py-2 shadow-sm">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Brand Name */}
                <div className="h4 mb-0 d-flex align-items-center justify-content-center">
                    <img
                        src="assets/img/logo-final.png"
                        alt="Firstminer"
                        className="img-fluid"
                    />
                </div>

                {/* Logout Button */}
                <button
                    className="btn btn-outline-light d-flex align-items-center"
                    onClick={handleLogout}
                    style={{ borderRadius: '20px', padding: '8px 16px' }}
                >
                    Logout
                </button>
            </div>
        </header>
    );
};

export default AdminHeader;
