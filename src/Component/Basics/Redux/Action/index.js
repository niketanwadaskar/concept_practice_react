export const add = (payload) => {
    return {
        type: "INCREMENT_COUNTER",
        payload
    }
}

export const subtract = (payload) => {
    return {
        type: "DECREMENT_COUNTER",
        payload
    }
}

export const multiply = (payload) => {
    return {
        type: "MULTIPLY_COUNTER",
        payload
    }
}

export const divide = (payload) => {
    return {
        type: "DIVIDE_COUNTER",
        payload
    }
}