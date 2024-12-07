import { useState } from "react";
import "../styles/components/navbar.css";
import LogoHeader from "../assets/logoweb.webp";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Cambia el estado de apertura del menú
    const toggleMenu = () => {
        setIsOpen(!isOpen); // Cambia entre abierto y cerrado
    };

    // Cierra el menú cuando se hace clic en un enlace
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header>
            <div className="navbar">
                <div className="nav_logo">
                    <Link to="/home">
                        <img className="logoHeader" src={LogoHeader} alt="Logo" />
                    </Link>
                </div>
                {/* Menú principal */}
                <div className={`nav_items ${isOpen ? "open" : ""}`}>
                    <ul>
                        <li className={location.pathname === "/home" ? "active" : ""}>
                            <Link to="/home" onClick={handleLinkClick}>
                                Home
                            </Link>
                        </li>
                        <li className={location.pathname === "/about-us" ? "active" : ""}>
                            <Link to="/about-us" onClick={handleLinkClick}>
                                About Us
                            </Link>
                        </li>
                        <li className={location.pathname === "/services" ? "active" : ""}>
                            <Link to="/services" onClick={handleLinkClick}>
                                Services
                            </Link>
                        </li>
                        <li className={location.pathname === "/contact" ? "active" : ""}>
                            <Link to="/contact" onClick={handleLinkClick}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Botón para abrir/cerrar el menú */}
                <div
                    className={`nav_toggle ${isOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
