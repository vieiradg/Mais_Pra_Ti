import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <Link to="/" className="logo">VieiraFilmes</Link>
      <nav>
        <NavLink to="/" end>Busca</NavLink>
        <NavLink to="/favorites">Favoritos</NavLink>
      </nav>
    </header>
  );
};

export default Header;