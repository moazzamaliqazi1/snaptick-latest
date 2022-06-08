const doctorSearch = (state = {
    days: []
}, action) => {
    if (action.type === "set-doctor-search") {
        return {
            ...state,
            ...action.payload,
        }
    }
    else {
        return state;

    }
};

export default doctorSearch;