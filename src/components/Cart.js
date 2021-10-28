import React from 'react';
import Product from '../assets/images/product.jpg';
import { FaRegWindowClose } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart__list">
                <h2 className="cart__title">Shopping Cart</h2>
                <div className="cart__items">
                    <div className="cart__item">
                        <img className="cart__item--image" src={Product} alt="Cart Item" />
                        <span className="cart__item--name">Denim Jacket</span>
                        <span className="cart__item--qty">
                            <span className="cart__item--decrease">-</span>
                            <input min="1" className="cart__item--input" type="number" />
                            <span className="cart__item--increase">+</span>
                        </span>
                        <span className="cart__item--price">$45.00</span>
                        <span className="cart__item--delete">
                            <IconContext.Provider value={{ className: "cart__item--icon" }}>
                                <FaRegWindowClose />
                            </IconContext.Provider>
                        </span>
                    </div>
                    <div className="cart__item">
                        <img className="cart__item--image" src={Product} alt="Cart Item" />
                        <span className="cart__item--name">Denim Jacket</span>
                        <span className="cart__item--qty">
                            <span className="cart__item--decrease">-</span>
                            <input min="1" className="cart__item--input" type="number" />
                            <span className="cart__item--increase">+</span>
                        </span>
                        <span className="cart__item--price">$45.00</span>
                        <span className="cart__item--delete">
                            <IconContext.Provider value={{ className: "cart__item--icon" }}>
                                <FaRegWindowClose />
                            </IconContext.Provider>
                        </span>
                    </div>
                    <div className="cart__item">
                        <img className="cart__item--image" src={Product} alt="Cart Item" />
                        <span className="cart__item--name">Denim Jacket</span>
                        <span className="cart__item--qty">
                            <span className="cart__item--decrease">-</span>
                            <input min="1" className="cart__item--input" type="number" />
                            <span className="cart__item--increase">+</span>
                        </span>
                        <span className="cart__item--price">$45.00</span>
                        <span className="cart__item--delete">
                            <IconContext.Provider value={{ className: "cart__item--icon" }}>
                                <FaRegWindowClose />
                            </IconContext.Provider>
                        </span>
                    </div>
                    <div className="cart__item">
                        <img className="cart__item--image" src={Product} alt="Cart Item" />
                        <span className="cart__item--name">Denim Jacket</span>
                        <span className="cart__item--qty">
                            <span className="cart__item--decrease">-</span>
                            <input min="1" className="cart__item--input" type="number" />
                            <span className="cart__item--increase">+</span>
                        </span>
                        <span className="cart__item--price">$45.00</span>
                        <span className="cart__item--delete">
                            <IconContext.Provider value={{ className: "cart__item--icon" }}>
                                <FaRegWindowClose />
                            </IconContext.Provider>
                        </span>
                    </div>

                </div>
                <div className="cart__subtotal">
                    <span className="cart__subtotal--price">Subtotal: $180.00</span>
                </div>
            </div>
            <div className="cart__payment">
                <h2 className="cart__title">Payment Details</h2>
                <div className="cart__payment--wrapper">
                    <span className="cart__payment--item">Subtotal</span>
                    <span className="cart__payment--price">$180.00</span>
                </div>
                <div className="cart__payment--wrapper">
                    <span className="cart__payment--item">Discount</span>
                    <span className="cart__payment--price">$180.00</span>
                </div>
                <div className="cart__payment--wrapper">
                    <span className="cart__payment--item">VAT(20%)</span>
                    <span className="cart__payment--price">$36.00</span>
                </div>
                <div className="cart__payment--wrapper cart-total">
                    <span className="cart__payment--item">Total</span>
                    <span className="cart__payment--price ">$216.00</span>
                </div>
                <button className="cart__payment--button" >GO TO PAYMENT</button>

            </div>
        </div>
    )
}

export default Cart
