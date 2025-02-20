const initialState = {
    num: 1,
}

const divideReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("DIVIDE_COUNTER"):
            return {
                ...state,
                num: action.payload / 5
            }
        default:
            return state
    }
}

export default divideReducer