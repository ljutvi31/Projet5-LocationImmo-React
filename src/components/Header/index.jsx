import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/components/Header.scss";

function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À Propos</Link>
            </nav>
        </header>
    )
}

export default Header