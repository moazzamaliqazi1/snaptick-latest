const dialogBox = (state = {
    patientRecordDoctorDialog: false
}, action) => {
    if (action.type === "patient-record-doctor-dialog-box") {
        return {
            ...state,
            patientRecordDoctorDialog: action.payload,
        }
    }
    else {
        return state;

    }
};

export default dialogBox;