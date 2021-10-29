const initialState = []

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'products/listProducts':
            return [...state, action.payload]

        default:
            return state
    }
}