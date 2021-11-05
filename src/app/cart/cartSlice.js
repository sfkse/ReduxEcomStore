import { showNotification } from "../actionCreator"

const initialState = {
    cartItems: [],
    cartPrices: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'cart/addCart':
            const checkIfExist = state.cartItems.findIndex(item => item.id === action.payload.id)
            if (checkIfExist > -1) {
                showNotification('This product is already in your cart', {
                    background: "#FFC107",
                    padding: "1rem"
                })
                return state
            } else {
                showNotification('This product is added your cart', {
                    background: "#28A745",
                    padding: "1rem"
                })
            }
            return {
                ...state,
                cartItems: state.cartItems.concat(action.payload),
                cartPrices: state.cartPrices.concat(action.payload.price)
            }

        case 'cart/deleteCartItem':
            return {
                ...state,
                cartItems: [...state.cartItems.slice(0, action.payload), ...state.cartItems.slice(action.payload + 1)]
            }

        case 'cartPrice/addPrice':
            return {
                ...state,
                cartPrices: [...state.cartPrices, action.payload]
            }

        case 'cartPrice/deleteCartPrice':
            return {
                ...state,
                cartPrices: [...state.cartPrices.slice(0, action.payload), ...state.cartPrices.slice(action.payload + 1)]
            }

        case 'cartPrice/updateCartPrice':
            return {
                ...state,
                cartPrices: [...state.cartPrices.slice(0, action.payload.id), action.payload.price, ...state.cartPrices.slice(action.payload.id + 1)]
            }

        default:
            return state
    }
}