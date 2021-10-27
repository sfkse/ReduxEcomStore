import React from 'react'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP } from 'react-icons/fa'

const Slider = () => {
    return (
        <section className="slider">
            <div className="slider__container">
                <div className="slider__social">
                    <FaFacebookF className="slider__icon" />
                    <FaTwitter className="slider__icon" />
                    <FaGooglePlusG className="slider__icon" />
                    <FaPinterestP className="slider__icon" />
                </div>
                <div className="slider__text">
                    <span className="slider__label">Trending</span>
                    <h1 className="slider__title">Regular Cotton Shirt</h1>
                    <a href="/" className="slider__link">Discover More</a>
                </div>
            </div>
        </section>
    )
}

export default Slider
