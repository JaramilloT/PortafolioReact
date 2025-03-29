import React, { useState } from 'react';
import { Navbar } from '../../../ui/Navbar';
import './header.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className='jj'>Santiago</h1>
        <button 
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        {isOpen && <Navbar />}
      </div>
    </header>
  );
}
