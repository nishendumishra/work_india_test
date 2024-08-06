import React from 'react';
import './Header.css';

const Header = ({ setSearchQuery }) => {
  return (
    <header>
      <div className="header-content">
        <h1>Explore</h1>
        <input
          type="text"
          placeholder="Search"
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;
