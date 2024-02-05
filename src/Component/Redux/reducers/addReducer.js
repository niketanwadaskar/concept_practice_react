// reducers.js
const initialState = {
    // your initial state properties
    num: 0
};

const addReducer = (state = initialState, action) => {
    switch (action.type) {
        // handle different actions and update state accordingly
        case "INCREMENT_COUNTER":
            return {
                ...state,
                num: 5 + action.payload
            }
        default:
            return state;
    }
};

export default addReducer;