export const fetchProducts = () => async (dispatch) => {
    dispatch(showLoadingGif(true))
    return await fetch('https://fakestoreapi.com/products/')
        .then(res => {

            if (!res.ok) throw Error('Couldn\'t fetch data')
            return res.json()
        })
        .then(data => {
            dispatch(showLoadingGif(false))
            dispatch(listProducts(data))
        })
        .catch(err => console.log(err.message))


}

export const listProducts = (products) => {

    return {
        type: 'products/listProducts',
        payload: products
    }
}

export const showLoadingGif = (loading) => {
    return {
        type: 'loading/setLoading',
        payload: loading
    }
}