const backdrop = (state = false, action) => {
    if (action.type === "change-backdrop-loader-state") {
        return action.payload
    }
    else {
        return state;

    }
};

export default backdrop;