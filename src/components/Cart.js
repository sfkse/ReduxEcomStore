import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
    const cartItems = useSelector(state => state.cart)
    return (
        <div className="cart">
            <div className="cart__list">
                <h2 className="cart__title">Shopping Cart</h2>
                <div className="cart__items">
                    {
                        cartItems.map(item => <CartItem item={item} />)
                    }
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
