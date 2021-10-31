export const fetchProducts = () => async (dispatch) => {

    dispatch(showLoadingGif(true))
    return await fetch('https://fakestoreapi.com/products/')
        .then(res => {

            if (!res.ok) throw new Error('Error ' + res.status + ': ' + res.statusText)

            return res.json()
        }, err => { throw new Error(err.message) })
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

export const addCart = (cartItem) => {
    return {
        type: 'cart/addCart',
        payload: cartItem
    }
}

export const deleteCartItem = (index) => {

    return {
        type: 'cart/deleteCartItem',
        payload: index
    }
}

export const deleteCartPrice = (index) => {
    return {
        type: 'cartPrice/deleteCartPrice',
        payload: index
    }
}

export const addCartPrice = (cartItem) => {
    return {
        type: 'cartPrice/addPrice',
        payload: cartItem.price
    }
}

export const updateCartPrice = (price, index) => {
    return {
        type: 'cartPrice/updateCartPrice',
        payload: {
            id: index,
            price: price
        }
    }
}