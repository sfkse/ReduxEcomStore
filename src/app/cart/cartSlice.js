
const initialState = []

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'cart/addCart':
            return [...state, action.payload]

        case 'cart/deleteCartItem':
            return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]

        default:
            return state
    }
}