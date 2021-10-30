
const initialState = []

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'cart/addCart':
            return [...state, action.payload]
        default:
            return state
    }
}