import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (e) => {
        if (e) e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="logo-nav w-inline-block">
                    <div className="w-embed">
                       <img src="Logo-RB.svg" alt="logo" />
                    </div>
                </Link>
                <div className="nav-r">
                    <Link to="/" className="nav-link hide-mob">Home</Link>
                    <Link to="/company" className="nav-link hide-mob">Company</Link>
                    <Link to="/mine" className="nav-link hide-mob">Mines</Link>
                    {/* <Link to="/refine" className="nav-link hide-mob">Refine</Link>
                    <Link to="/trading" className="nav-link hide-mob">Trading</Link> */}
                    <Link to="/1-mg" className="nav-link hide-mob">1mg Gold</Link>
                     {/* <Link to="/projets" className="nav-link hide-mob">projets</Link>
                    <Link to="/mgc-conference-2026" className="nav-link hide-mob">MGC 2026</Link> */}
                    <Link to="/divisions"
                        className="nav-link hide-mob">Divisions</Link>
                
                    <Link to="/blog"
                        className="nav-link hide-mob">Blog</Link>
                    <Link to="/shariah"
                        className="nav-link hide-mob">Shariah</Link>
                  
                    <Link to="/contact"
                        className="nav-link hide-mob">contact</Link>
                  

                    <a href="#" className="nav-link menu" onClick={toggleMenu}>menu</a>
                </div>
            </nav>
            <Menu isOpen={isMenuOpen} onClose={closeMenu} />
        </>
    );
};

export default Navbar;