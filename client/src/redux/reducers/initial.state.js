const initialState = (state = {
    authDisplay: true
}, action) => {
    if (action.type === "set-auth-display") {
        return {
            ...state,
            authDisplay: action.payload,
        }
    }
    else {
        return state;

    }
};

export default initialState;