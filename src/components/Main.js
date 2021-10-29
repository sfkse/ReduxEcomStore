import { useEffect } from 'react';
import { IconContext } from 'react-icons';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../app/actionCreator';


export const Product = (product) => {
    console.log(product)
    return (
        <div className="shop__card">
            <div className="shop__card--image">
                <img src={product.product.image} alt="Product" />
                <IconContext.Provider value={{ className: "shop__card--overlay" }}>
                    <FaShoppingCart title="Add to Cart" />
                </IconContext.Provider>
            </div>

            <div className="shop__card--title">{product.product.title}</div>
            <div className="shop__card--price">${product.product.price}</div>
        </div>
    )
}

const Main = () => {
    const products = useSelector(state => state.product)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    console.log(products)
    return (
        <section className="shop">
            <div className="shop__container">
                {products[0]?.map(product => <Product key={product.id} product={product} />)}


            </div>
        </section>
    )
}


export default Main
