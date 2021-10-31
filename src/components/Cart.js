import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { useHistory } from 'react-router-dom'

const Cart = () => {
    const cartItems = useSelector(state => state.cart);

    const subTotal = (parseFloat(cartItems.cartPrices.reduce(((previousValue, currentValue) => previousValue + currentValue), 0))).toFixed(2);
    const vat = (parseFloat(subTotal).toFixed(2) * 0.20).toFixed(2);
    const total = (parseFloat(subTotal) + parseFloat(vat)).toFixed(2);
    const history = useHistory()

    const handleRedirect = () => {
        history.push('/')
    }
    return (
        <div className="cart">
            <div className="cart__list">
                <h2 className="cart__title">Shopping Cart</h2>
                <div className="cart__items">
                    {
                        cartItems.length === 0 ?
                            <div className="cart__empty" >
                                Your cart is empty. Let's shop <span className="cart__redirect" onClick={handleRedirect}>here</span>
                            </div> :
                            cartItems.cartItems?.map(item => <CartItem key={item.id} item={item} />)
                    }
                </div>
                {
                    cartItems.length === 0 ? '' :
                        <div className="cart__subtotal">
                            <span className="cart__subtotal--price">Subtotal: ${subTotal}</span>
                        </div>
                }

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
