import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../app/actionCreator';
import Product from './Product'
import Loading from './Loading';



const Main = () => {
    const products = useSelector(state => state.product)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
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
