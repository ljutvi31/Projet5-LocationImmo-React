import React from "react";
import footerlogo from '../images/footerlogo.png';
<images></images>
import "../../styles/components/Footer.scss"
function Footer () {
    return (
        <footer>
            <div className="footer-logo">
                <img src={footerlogo} alt="Kasa logo" />
            </div>
        </footer>
    )
}

export default Footer