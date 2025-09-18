import {NavLink, Link} from "react-router";

function Header() {
    return (
        <header class="header">
            <h1>
                <Link to="/" class="header__title-text">Cocktails</Link>
            </h1>
            
            <nav className="header__nav">
                <NavLink to="/" className="header__nav-link" exact>
                    Home
                </NavLink>
                <NavLink to="/cocktails" className="header__nav-link">
                    Cocktails
                </NavLink>
                <NavLink to="/savedCocktails" className="header__nav-link">
                    Saved Cocktails
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;