import React from 'react';
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <div className="navbar" >
            <div className="navbar__container">
                <div className="navbar__logo">
                    <h1 className="navbar__logo-text">Just Shop.</h1>
                </div>
                <div className="navbar__menu">
                    <ul className="navbar__nav">
                        <li className="navbar__item" >
                            <Link to="/" className="navbar__link" >Home</Link>
                        </li>
                        <li className="navbar__item" >
                            <a href="/contact" className="navbar__link" >Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar__search">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="navbar__account">
                    <FaUserAlt className="navbar__icon" />
                    <Link to="/cart" className="navbar__cart">
                        <FaShoppingCart className="navbar__icon navbar__cart--icon" />
                        <span className="navbar__icon navbar__cart--qty">0</span>
                    </Link>

                </div>
            </div>
        </div>

    )
}

export default Navbar
