import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ isOpen, onClose }) => {
    return (
        <div className="menu_w" style={{ display: isOpen ? 'flex' : 'none', flexDirection: 'column' }}>
            <div className="nav-menu">
                <a href="#" className="nav-link menu" onClick={(e) => { e.preventDefault(); onClose(); }}>
                    Close
                </a>
            </div>
            <div className="menu_w_item">
                <div></div>
                <div className="nav-r mob">
                    <Link to="/" className="nav-link mob" onClick={onClose}>Home</Link>
                    <Link to="/company" className="nav-link mob" onClick={onClose}>Company</Link>
                    <Link to="/mine" className="nav-link mob" onClick={onClose}>Mine</Link>
                    {/* <Link to="/refine" className="nav-link mob" onClick={onClose}>Refine</Link>
                    <Link to="/trading" className="nav-link mob" onClick={onClose}>Trading</Link> */}
                    <Link to="/1-mg" className="nav-link mob" onClick={onClose}>1mg Gold</Link>
                    {/* <Link to="/projets" className="nav-link mob" onClick={onClose}>projets</Link>
                    <Link to="/divisions" className="nav-link mob" onClick={onClose}>Divisions</Link> */}
                    <Link to="/process" className="nav-link mob" onClick={onClose}>process</Link>
                    {/* <Link to="/shop" className="nav-link mob" onClick={onClose}>shop</Link> */}
                    <Link to="/contact" className="nav-link mob" onClick={onClose}>contact</Link>
                    
                </div>
                <div>
                    <img
                        loading="eager"
                        src="https://cdn.prod.website-files.com/69689842a40a17ac45e5418a/697789c86edef1bdfa53ecf5_MS%20BIG%20-%20Creme.webp"
                        alt=""
                        className="logo-landing-big menu"
                    />
                    
                </div>
            </div>
        </div>
    );
};

export default Menu;
