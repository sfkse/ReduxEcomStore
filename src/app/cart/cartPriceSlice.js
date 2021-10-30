const initialValues = []

export const cartPriceReducer = (state = initialValues, action) => {
    switch (action.type) {
        case 'cartPrice/addPrice':
            return [...state, action.payload]

        default:
            return state;
    }
}