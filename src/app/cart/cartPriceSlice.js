const initialValues = []

export const cartPriceReducer = (state = initialValues, action) => {
    switch (action.type) {
        case 'cartPrice/addPrice':
            return [...state, action.payload]

        case 'cartPrice/deleteCartPrice':
            return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]

        case 'cartPrice/updateCartPrice':
            return [...state.slice(0, action.payload.id), action.payload.price, ...state.slice(action.payload.id + 1)]

        default:
            return state;
    }
}