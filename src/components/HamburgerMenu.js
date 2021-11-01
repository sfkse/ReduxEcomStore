import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring';

const toggleScroll = document.querySelector('body')

const HamburgerMenu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleClick = () => {
        setShowMenu(!showMenu)
        toggleScroll.classList.toggle('scroll__hidden')

    }

    const line = useSpring(
        showMenu ? {
            to: { borderColor: '#fff' },
            from: { borderColor: '#d32020' },
            delay: 500
        } : {
            to: { borderColor: '#d32020' },
            from: { borderColor: '#fff' },
            delay: 500
        }
    )

    const props = useSpring(
        showMenu ? {
            to: { opacity: 1, left: 0 },
            from: { opacity: 0, left: 1000 },
            delay: 500
        } :
            {
                to: { opacity: 0, left: 1000 },
                // from: { opacity: 1, left: 0 },
                delay: 300
            })
    return (

        <>
            <div className="hamburger__tab" onClick={handleClick}>
                <animated.div style={line} className="hamburger__tab--line"></animated.div>
                <animated.div style={line} className="hamburger__tab--line"></animated.div>
                <animated.div style={line} className="hamburger__tab--line"></animated.div>
            </div>

            {

                <animated.div style={props} className={`hamburger ${showMenu ? 'd-flex' : 'd-none'}`}>
                    <h1 className="hamburger__logo">Just Shop.</h1>
                    <ul className="hamburger__menu">
                        <li className="hamburger__item" >
                            <Link to="/" className="hamburger__link" >Home</Link>
                        </li>
                        <li className="hamburger__item" >
                            <a href="/contact" className="hamburger__link" >Contact</a>
                        </li>
                    </ul>
                    <div className="hamburger__search">
                        <input type="text" placeholder="Search..." />
                    </div>
                    <div className="hamburger__account">
                        <IconContext.Provider value={{ className: "hamburger__icon" }}>
                            <FaUserAlt />
                        </IconContext.Provider>
                        <Link to="/cart" className="hamburger__cart">
                            <IconContext.Provider value={{ className: "hamburger__icon" }}>
                                <FaShoppingCart />
                            </IconContext.Provider>
                            {/* <span className="navbar__icon navbar__cart--qty">{cartItems.cartItems.length}</span> */}
                        </Link>
                    </div>
                </animated.div>
            }

        </>

    )
}

export default HamburgerMenu
