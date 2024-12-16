import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "../../styles/components/header.scss";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo Kasa" className="logo-kasa" />
      </Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
}

export default Header;
