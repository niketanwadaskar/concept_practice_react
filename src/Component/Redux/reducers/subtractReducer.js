const initialState = {
    num: 0,
}


const subtractReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("DECREMENT_COUNTER"):
            return {
                ...state,
                num: action.payload - 5
            }
        default: {
            return state
        }
    }
}

export default subtractReducer