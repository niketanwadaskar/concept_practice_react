const initialState = {
    num: 1,
}

const multiplyDivideReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("MULTIPLY_COUNTER"):
            return {
                ...state,
                num: action.payload * action.payload
            }
        default:
            return state
    }
}

export default multiplyDivideReducer;