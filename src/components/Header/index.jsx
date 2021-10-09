import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

function Header() {
  return (
    <header className="header">
      <h1 className="header-logo">DataMovies APP</h1>
      <nav className="header-nav">
        <button className="header-nav__button" type="button"><NavLink exact activeStyle={{ color: '#ffe300' }} to="/">Dashboard</NavLink></button>
        <button className="header-nav__button" type="button"><NavLink activeStyle={{ color: '#ffe300' }} to="/wishlist">Wishlist</NavLink></button>
      </nav>
    </header>
  );
}

export default Header;
