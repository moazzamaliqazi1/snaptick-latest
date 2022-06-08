import axios from "axios";
const errorReturn = {
    status: 500,
    data: {
        is_success: false,
        message: 'some error from server side'
    }
}
const onboarding = {
    login: async(email, password) =>{
        try {
            return await axios.post('/api/v1/auth/login', {
                email: email.toLowerCase(), password
            })
        } catch (error) {
            console.log(error);
            return errorReturn
        }
    },
    register: async(username, email, password, role) =>{
        try {
            return await axios.post('/api/v1/auth/register', {
                username, email: email.toLowerCase(), password, role
            })
        } catch (error) {
            console.log(error);
            return errorReturn
        }
    },
    verifyCode: async(email, code) =>{
        try {
            return await axios.post('/api/v1/auth/verify-code', {
                email, code, password: "s"
            })
        } catch (error) {
            console.log(error);
            return errorReturn
        }
    },
    resendCode: async(email) =>{
        try {
            return await axios.post('/api/v1/auth/resend-code', {
                email, password: "s"
            })
        } catch (error) {
            console.log(error);
            return errorReturn
        }
    },
    sendEmailForgotPassword: async (email) =>{
        try {
            return await axios.post('/api/v1/auth/forget-password/email', {
                email, password: "s"
            })
        } catch (error) {
            console.log(error);
            return errorReturn
        }
    },
    forgetPasswordChange: async(_id, code, password)=>{
        try {
            return await axios.post('/api/v1/auth/forget-password/change-password', {
                _id, code, password
            })
        } catch (error) {
            console.log(error);
            return errorReturn
        }
    }
}

export default onboarding;