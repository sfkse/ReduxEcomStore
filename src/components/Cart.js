import React from 'react';
import Product from '../assets/images/product.jpg'

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart__items">
                <h2 className="cart__title">Shopping Cart</h2>
                <div className="cart__items">
                    <div className="cart__item">
                        <img src={Product} alt="Cart Item" />
                        <span className="cart__item--name">Denim Jacket</span>
                        <span className="cart__item--qty">
                            <input type="number" />
                        </span>
                        <span className="cart__item--price">$45.00</span>
                        <span className="cart__item--delete">X</span>
                    </div>
                </div>
            </div>
            <div className="cart__payment"></div>
        </div>
    )
}

export default Cart
