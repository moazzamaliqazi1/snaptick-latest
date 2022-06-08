import axios from "axios";
const errorReturn = {
    status: 500,
    data: {
        is_success: false,
        message: 'some error from server side'
    }
}
const admin = {
    getPublicData: async() =>{
        try {
            return await axios.get('/api/v1/public/data')
        } catch (error) {
            console.log(error);
            return errorReturn
        }
    },
}

export default admin;