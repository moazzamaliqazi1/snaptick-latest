export const patientRecordDoctorModal = (value) => {
    return {
      type: "patient-record-doctor-modal",
      payload: value,
    };
};

export const patientRecordDoctorDialogBox = (value) => {
  return {
    type: "patient-record-doctor-dialog-box",
    payload: value,
  };
};
export const backdropLoaderState = (value) => {
  return {
    type: 'change-backdrop-loader-state',
    payload: value
  }
}
export const addUser = (value)=>{
  return {
    type: 'add-user',
    payload: value
  }
}
export const patientProfileCompleteMessage = (value)=>{
  return {
    type: 'patient-profile-complete-message',
    payload: value
  }
}
export const doctorProfileCompleteMessage = (value) => {
  return {
    type: 'doctor-profile-complete-message',
    payload: value
  }
}
export const setAuthDisplay = (value)=>{
  return {
    type: 'set-auth-display',
    payload: value
  }
}
export const setDoctorSearch = (value)=>{
  return {
    type: 'set-doctor-search',
    payload: value
  }
}
export const setBookAppointmentForm = (value)=>{
  return {
    type: 'set-book-appointment-form',
    payload: value
  }
}
