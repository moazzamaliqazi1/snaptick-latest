const globalMessages = (state = {
    patientProfileCompleteMessage: '',
    doctorProfileCompleteMessage: ''
}, action) => {
    if (action.type === "patient-profile-complete-message") {
        return {
            ...state,
            patientProfileCompleteMessage: action.payload,
        }
    }
    else if(action.type === "doctor-profile-complete-message"){
        return {
            ...state,
            doctorProfileCompleteMessage: action.payload,
        }
    }
    else {
        return state;

    }
};

export default globalMessages;