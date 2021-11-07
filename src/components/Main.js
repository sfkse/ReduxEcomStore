import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../app/actionCreator';
import Product from './Product';
import Loading from './Loading';
import ProductNotFound from '../assets/images/ProductNotFound.png'



const Main = ({ search }) => {
    const products = useSelector(state => state.product)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch();

    const filteredProducts = products[0]?.filter(product => product.title.toLowerCase().includes(search))

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <section className="shop">
            <div className="shop__container">
                {loading.loading ? <Loading /> :
                    (search && filteredProducts?.length > 0) ?
                        filteredProducts?.map(product => <Product key={product.id} product={product} />) :
                        (search && filteredProducts?.length === 0) ? <img src={ProductNotFound} alt='Product Not Found' /> :
                            products[0]?.map(product => <Product key={product.id} product={product} />)
                }

            </div>
        </section>
    )
}


export default Main
