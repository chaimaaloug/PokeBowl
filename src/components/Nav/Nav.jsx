import React from 'react';
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/"><img src={logo} alt="Logo" /></a>
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
