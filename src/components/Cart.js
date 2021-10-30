import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    const cartItemsPrice = useSelector(state => state.cartPrice);
    const subTotal = cartItemsPrice.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    const vat = parseFloat((parseFloat(subTotal).toFixed(2) * 0.20).toFixed(2));
    const total = subTotal + vat;



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
                    <span className="cart__subtotal--price">Subtotal: ${subTotal}</span>
                </div>
            </div>
            <div className="cart__payment">
                <h2 className="cart__title">Payment Details</h2>
                <div className="cart__payment--wrapper">
                    <span className="cart__payment--item">Subtotal</span>
                    <span className="cart__payment--price">${subTotal}</span>
                </div>
                <div className="cart__payment--wrapper">
                    <span className="cart__payment--item">Discount</span>
                    <span className="cart__payment--price">-</span>
                </div>
                <div className="cart__payment--wrapper">
                    <span className="cart__payment--item">VAT(20%)</span>
                    <span className="cart__payment--price">${vat}</span>
                </div>
                <div className="cart__payment--wrapper cart-total">
                    <span className="cart__payment--item">Total</span>
                    <span className="cart__payment--price ">${total}</span>
                </div>
                <button className="cart__payment--button" >GO TO PAYMENT</button>

            </div>
        </div>
    )
}

export default Cart
