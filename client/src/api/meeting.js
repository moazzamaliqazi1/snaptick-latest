import axios from "axios";
const errorReturn = {
    status: 500,
    data: {
        is_success: false,
        message: 'some error from server side'
    }
}
// API call to create meeting
const meeting = {
    createMeeting: async(token)=>{
        try {
            return await axios.post('https://api.videosdk.live/v1/meetings', {}, {
                headers: {
                    authorization: token,
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.log(error)
            return errorReturn;
        }
    },
    getMeetingDocuments: async (appointmentId, token)=>{
        try {
            return await axios.get(`/api/v1/appointments/${appointmentId}/documents`, {
                headers: {
                    authorization: token,
                }
            })
        } catch (error) {
            console.log(error)
            return errorReturn;
        }
    }
}

export default meeting;