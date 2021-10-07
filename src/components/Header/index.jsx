import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>DataMovie</h1>
      <button type="button"><Link to="/">Go to collection</Link></button>
      <button type="button"><Link to="/wishlist">Go to wishlist</Link></button>
    </header>
  );
}

export default Header;
