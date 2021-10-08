import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Header() {
  return (
    <header className="header">
      <h1 className="header-logo">DataMovie</h1>
      <nav className="header-nav">
        <button className="header-nav__button" type="button"><Link to="/">Dashboard</Link></button>
        <button className="header-nav__button" type="button"><Link to="/wishlist">Wishlist</Link></button>
      </nav>
    </header>
  );
}

export default Header;
