import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './Header.css';

function Header() {
  const handleLogout = () => {
    // Your logout logic remains the same
    console.log('User logged out!');
  };

  return (
    <header className="header">
      {/* Make the logo and app title a clickable link to the homepage */}
      <Link to="/" className="logo-section">
        <span className="logo">🏛️</span>
        <h1 className="app-title">when_where&how</h1>
      </Link>

      <div className="header-actions">
        {/* Add the Home button that also links to the homepage */}
        <Link to="/" className="home-btn">
          Home
        </Link>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;