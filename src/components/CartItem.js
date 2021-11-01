import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { FaRegWindowClose } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteCartItem, deleteCartPrice, updateCartPrice } from '../app/actionCreator';

const CartItem = ({ item }) => {
    const [qty, setQty] = useState(1)
    const cartItems = useSelector(state => state.cart);
    // const cartPrices = useSelector(state => state.cartPrice);
    const dispatch = useDispatch();
    const index = cartItems.cartItems.findIndex(updated => updated === item);
    const qtyOfItems = cartItems.cartPrices[index] / item.price;
    let finalPrice;

    useEffect(() => {
        setQty(qtyOfItems)
    }, [qtyOfItems])


    const handleChange = (e) => {
        setQty(e.target.value)
    }
    const handleAddQty = () => {
        setQty(qty + 1)
        //using qty+1 because of delayed render
        finalPrice = (qty + 1) * item.price
        dispatch(updateCartPrice(finalPrice, index))

    }
    const handleDecreaseQty = () => {
        if (qty > 1) {
            setQty(qty - 1)
            //using qty-1 because of delayed render
            finalPrice = (qty - 1) * item.price
            dispatch(updateCartPrice(finalPrice, index))
        }
    }
    const handleDelete = (id) => {

        const deletedItem = cartItems.cartItems.find(item => item.id === id);
        const index = cartItems.cartItems.findIndex(item => item === deletedItem);

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
            <span className="cart__item--price">${(qtyOfItems * item?.price).toFixed(2)}</span>
            <span className="cart__item--delete" onClick={() => handleDelete(item?.id)}>
                <IconContext.Provider value={{ className: "cart__item--icon" }}>
                    <FaRegWindowClose />
                </IconContext.Provider>
            </span>
        </div>
    )
}

export default CartItem
