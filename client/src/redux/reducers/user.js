const user = (state = {}, action) => {
    if (action.type === "add-user") {
        return action.payload
    }
    else {
        return state;

    }
};

export default user;