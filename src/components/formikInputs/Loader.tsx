import React from 'react';
import './Loader.css';

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="logo-wrapper">
        <img src="/logoHalf.png" alt="Logo Part 1" className="logo-part" />
        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <img src="/logoHalf2.png" alt="Logo Part 2" className="logo-part" />
      </div>
    </div>
  );
};

export default Loader;
