import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaRegWindowClose } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteCartItem, deleteCartPrice, updateCartPrice } from '../app/actionCreator';

const CartItem = ({ item }) => {
    const [qty, setQty] = useState(1)
    const [price, setPrice] = useState(item.price)
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const index = cartItems.findIndex(updated => updated === item);
    let finalPrice;

    const handleChange = (e) => {
        setQty(e.target.value)
    }
    const handleAddQty = () => {
        setQty(qty + 1)
        finalPrice = (qty + 1) * item.price
        setPrice(finalPrice)
        dispatch(updateCartPrice(finalPrice, index))

    }
    const handleDecreaseQty = () => {
        if (qty > 1) {
            setQty(qty - 1)
            finalPrice = (qty - 1) * item.price
            setPrice(finalPrice)
            dispatch(updateCartPrice(finalPrice, index))
        }
    }
    const handleDelete = (id) => {

        const deletedItem = cartItems.find(item => item.id === id);
        const index = cartItems.findIndex(item => item === deletedItem);

        dispatch(deleteCartItem(index));
        dispatch(deleteCartPrice(index))
    }
    return (
        <div key={item?.id} className="cart__item">
            <img className="cart__item--image" src={item?.image} alt="Cart Item" />
            <span className="cart__item--name">{item?.title}</span>
            <span className="cart__item--qty">
                <button className="cart__item--decrease" onClick={handleDecreaseQty}>-</button>
                <input
                    type="number"
                    value={qty}
                    onChange={handleChange}
                    className="cart__item--input"
                    readOnly />
                <button className="cart__item--increase" onClick={handleAddQty}>+</button>
            </span>
            <span className="cart__item--price">${price}</span>
            <span className="cart__item--delete" onClick={() => handleDelete(item?.id)}>
                <IconContext.Provider value={{ className: "cart__item--icon" }}>
                    <FaRegWindowClose />
                </IconContext.Provider>
            </span>
        </div>
    )
}

export default CartItem
