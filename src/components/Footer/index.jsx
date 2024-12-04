import React from "react";
import footerlogo from '../images/footerlogo.png';
import "../../styles/components/Footer.scss"
function Footer () {
    return (
        <footer>
            <img src={footerlogo} alt="Kasa logo" className="footer-logo"/>
            <p> © 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer