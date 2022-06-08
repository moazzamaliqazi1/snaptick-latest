const modal = (state = {
    patientRecordDoctorModal: false
}, action) => {
    if (action.type === "patient-record-doctor-modal") {
        return {
            ...state,
            patientRecordDoctorModal: action.payload
        }
    }
    else {
        return state;

    }
};

export default modal;