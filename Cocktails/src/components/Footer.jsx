import { NavLink, Link } from "react-router";

function Footer() {
    return(
        <footer class="footer">

            <nav className="footer__nav">
                <NavLink to="/home" className="footer__nav-link">
                    Cocktails
                </NavLink>
                <NavLink to="/contact" className="footer__nav-link">
                    Contact
                </NavLink>
                <NavLink to="/about" className="footer__nav-link">
                    About
                </NavLink>
            </nav>
        </footer>
    );
}

export default Footer;