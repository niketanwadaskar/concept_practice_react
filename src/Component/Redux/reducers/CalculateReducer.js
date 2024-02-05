// reducers.js
const initialState = {
    // your initial state properties
    num:0
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // handle different actions and update state accordingly
        case "INCREMENT_COUNTER":
            return {
                ...state,
                num: state.num + 1
            }
        default:
            return state;
    }
};

export default rootReducer;
