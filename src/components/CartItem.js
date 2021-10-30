import React from 'react'
import { IconContext } from 'react-icons'
import { FaRegWindowClose } from 'react-icons/fa'

const CartItem = ({ item }) => {

    return (
        <div key={item.id} className="cart__item">
            <img className="cart__item--image" src={item.image} alt="Cart Item" />
            <span className="cart__item--name">{item.title}</span>
            <span className="cart__item--qty">
                <span className="cart__item--decrease">-</span>
                <input min="1" value="1" className="cart__item--input" type="number" />
                <span className="cart__item--increase">+</span>
            </span>
            <span className="cart__item--price">${item.price}</span>
            <span className="cart__item--delete">
                <IconContext.Provider value={{ className: "cart__item--icon" }}>
                    <FaRegWindowClose />
                </IconContext.Provider>
            </span>
        </div>
    )
}

export default CartItem
