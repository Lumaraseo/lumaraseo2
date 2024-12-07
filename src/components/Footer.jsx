import '../styles/components/footer.css';
import { Link } from "react-router-dom";
import Logoweb from '../assets/logoweb.webp';

const Footer = () => {

    return (
        <footer >
            <div className="containListFooter">
                <ul className="ulListFooter">
                    <li>
                        <Link className="underline-text-footer" to="/home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="underline-text-footer" to="/about-us">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link className="underline-text-footer" to="/services">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link className="underline-text-footer" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sectionFooter">
                <div className="containLogoFooter">
                    <Link to="/home">
                        <img
                            className="iconLogoFooter"
                            src={Logoweb}
                            alt="Logo Footer"
                        />
                    </Link>
                </div>
                <div className="containIconFooter">
                    <a
                        href="https://www.tiktok.com/@lumara.seo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="iconTikFooter"
                        aria-label="Visitar TikTok de LumaraSEO"
                    >
                        <i className="bi-tiktok"></i>
                        <span className="hidden-text">TikTok</span>
                    </a>
                    <a
                        href="https://www.instagram.com/lumaraseo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="iconInstaFooter"
                        aria-label="Visitar Instagram de LumaraSEO"
                    >
                        <i className="bi-instagram"></i>
                        <span className="hidden-text">Instagram</span>
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=573042135572&text=Hello! I would like to get in touch with you."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="iconWhatssapFooterr"
                        aria-label="Contactar via WhatsApp"
                    >
                        <i className="bi-whatsapp"></i>
                        <span className="hidden-text">WhatsApp</span>
                    </a>
                </div>
            </div>
            <div className='cnt-divider'><hr className='divider'></hr></div>
            <div className='cnt-CopyRight'>
                <p className="copyRight">Copyright 2024 All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
