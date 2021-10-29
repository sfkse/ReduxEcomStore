export const fetchProducts = () => async (dispatch) => {

    return await fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(data => dispatch(listProducts(data)))
}

export const listProducts = (products) => {
    console.log(products)
    return {
        type: 'products/listProducts',
        payload: products
    }
}