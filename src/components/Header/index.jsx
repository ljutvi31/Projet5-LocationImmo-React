import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'  // Chemin depuis Header vers images
import '../../styles/components/Header.scss'

function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Logo Kasa" className="logo" />
            </Link>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À Propos</Link>
            </nav>
        </header>
    )
}

export default Header