// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container">
      <img
          src={process.env.PUBLIC_URL + '/images/Faisal.png'}
          alt="Faisal"
          className="profile-pic"
        />
        <h1>Muhammed Faisal P J</h1>
        <p>Data Scientist, AI Engineer</p>
      </div>
    </header>
  );
};

export default Header;
