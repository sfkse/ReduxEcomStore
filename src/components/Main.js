import { useState } from 'react';
import { useEffect } from 'react';
import { IconContext } from 'react-icons';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, showLoadingGif } from '../app/actionCreator';
import Loading from './Loading';


export const Product = (product) => {
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
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch();
    console.log(loading)
    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(showLoadingGif(true))

    }, [])

    return (
        <section className="shop">
            <div className="shop__container">
                {loading.loading ? <Loading /> : products[0]?.map(product => <Product key={product.id} product={product} />)}


            </div>
        </section>
    )
}


export default Main
