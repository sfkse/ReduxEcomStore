import { IconContext } from 'react-icons'
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, addCartPrice } from '../app/actionCreator';

const Product = (product) => {
    const cartItems = useSelector(state => state.cart)
    const dispatch = useDispatch()


    const handleAddCart = (addProduct) => {

        dispatch(addCart(addProduct))
        dispatch(addCartPrice(addProduct))
    }
    return (
        <div className="shop__card">
            <div className="shop__card--image">
                <img src={product.product.image} alt="Product" />
                <IconContext.Provider value={{ className: "shop__card--overlay" }}>
                    <FaShoppingCart onClick={() => handleAddCart(product.product)} title="Add to Cart" />
                </IconContext.Provider>
            </div>
            <div className="shop__card--title">{product.product.title}</div>
            <div className="shop__card--price">${product.product.price}</div>
        </div>
    )
}

export default Product
