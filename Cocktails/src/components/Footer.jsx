import { NavLink, Link } from "react-router";

function Footer() {
    return(
        <footer class="footer">
            <nav className="footer__nav">
                <ul className="footer_list">
                    <li>Labb 2</li>
                    <li>Evan Bergqvist</li>
                </ul>
                <NavLink to="/home" className="footer__nav-link">
                    Cocktails
                </NavLink>
            </nav>
        </footer>
    );
}

export default Footer;