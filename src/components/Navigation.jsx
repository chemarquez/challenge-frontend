import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {

  return (
    <nav style={{ width: '1200px' }} className="navbar">
      <ul className="navbar-list">
        <li><a href="/tracks">Tracks</a></li>
        <li><a href="/search">Search</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
