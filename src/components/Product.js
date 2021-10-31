import { IconContext } from 'react-icons'
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addCart } from '../app/actionCreator';

const Product = (product) => {
    const dispatch = useDispatch()


    const handleAddCart = (addProduct) => {

        dispatch(addCart(addProduct))
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
