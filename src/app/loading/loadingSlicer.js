const initialState = {
    loading: true
}

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'loading/setLoading':
            return { ...state, loading: action.payload }

        default:
            return state;
    }
}