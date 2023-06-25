import React from 'react';
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="/">Accueil</a>
        <a href="/pokebowls">Nos Pokebowls</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
