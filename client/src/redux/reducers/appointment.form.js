const appointmentForm = (state = {
    start_time: null,
    end_time: null,
    fee: 0,
    payment_cards_id: null,
    test_reports_id: [],
    age: 0,
    height: null
}, action) => {
    if (action.type === "set-book-appointment-form") {
        return action.payload
    }
    else {
        return state;

    }
};

export default appointmentForm;