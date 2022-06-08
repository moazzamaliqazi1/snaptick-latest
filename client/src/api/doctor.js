import axios from "axios";
const errorReturn = {
    status: 500,
    data: {
        is_success: false,
        message: 'some error from server side'
    }
}

const doctor = {
    getAllDoctorsByQuery: async (page, query) => {
        try {
            return await axios.post(`/api/v1/public/doctors/${page}`, {
                query: query
            });
        } catch (error) {
            console.log(error)
            return errorReturn;
        }
    },
}

export default doctor;