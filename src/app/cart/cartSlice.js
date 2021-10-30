
const initialState = []

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'cart/addCart':
            console.log(action.payload)
            return [...state, action.payload]
        default:
            return state
    }
}