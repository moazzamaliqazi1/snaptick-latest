import axios from "axios";
const errorReturn = {
    status: 500,
    data: {
        is_success: false,
        message: 'some error from server side'
    }
}

const patient = {
    getRandomDoctorsBookingTime: async (doctor_id, token) => {
        try {
            return await axios.get(`/api/v1/doctor/${doctor_id}/guess/time`, {
                headers: {
                    Authorization: token
                }
            });
        } catch (error) {
            console.log(error)
            return errorReturn;
        }
    },
    bookAppointment: async (data, token) => {
        try {
            return await axios.post('/api/v1/patient/appointment', data, {
                headers: {
                    Authorization: token
                }
            });
        } catch (error) {
            console.log(error)
            return errorReturn;
        }
    }
}

export default patient;