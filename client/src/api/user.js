import axios from "axios";
const errorReturn = {
    status: 500,
    data: {
        is_success: false,
        message: 'some error from server side'
    }
}

const user = {
    getProfile: async (token) => {
        try {
            return await axios.get('/api/v1/profile', {
                headers: {
                    Authorization: token
                }
            });
        } catch (error) {
            console.log(error)
            return errorReturn;
        }
    },
    updateProfileImage: async (url, urlObject, token) => {
        try {
            return await axios.post('/api/v1/profile/image', {
                image_url: url,
                file_object: urlObject
            }, {
                headers: {
                    Authorization: token
                }
            });
        } catch (error) {
            console.log(error)
            return errorReturn;
        }
    },
    saveProfileInfo: async (data, token) => {
        try {
            return await axios.patch('/api/v1/profile', data, {
                headers: {
                    Authorization: token
                }
            });
        } catch (error) {
            console.log(error)
            return errorReturn;
        }
    },
    uploadDocumentKeys: async (keys, token) => {
        try {
            return await axios.post('/api/v1/patient/test-reports', { test_reports: keys }, {
                headers: {
                    Authorization: token
                }
            });
        } catch (error) {
            console.log(error)
            return errorReturn;
        }
    },
    uploadCertificatesKeys: async (keys, token) => {
        try {
            return await axios.post('/api/v1/doctor/certificates', { certificates: keys }, {
                headers: {
                    Authorization: token
                }
            });
        } catch (error) {
            console.log(error)
            return errorReturn;
        }
    },
    saveLanguages: async (data, token) => {
        try {
            return await axios.post('/api/v1/profile/languages', {
                languages: data
            }, {
                headers: {
                    Authorization: token
                }
            });
        } catch (error) {
            console.log(error)
            return errorReturn;
        }
    },
    profilePublished: async (status, token) => {
        try {
            return await axios.post('/api/v1/profile/published', { status }, {
                headers: {
                    Authorization: token
                }
            });
        } catch (error) {
            console.log(error)
            return errorReturn;
        }
    },
    saveAvailableTime: async (data, token) => {
        try {
            return await axios.post('/api/v1/profile/available/timings', data, {
                headers: {
                    Authorization: token
                }
            });
        } catch (error) {
            console.log(error)
            return errorReturn;
        }
    },
    deleteAvailableTiming: async (_id, token) => {
        try {
            return await axios.delete(`/api/v1/profile/available/timings/${_id}`, {
                headers: {
                    Authorization: token
                }
            });
        } catch (error) {
            console.log(error)
            return errorReturn;
        }
    },
    addPaymentCard: async (card, token) => {
        try {
            return await axios.post('/api/v1/payment/card', card, {
                headers: {
                    Authorization: token
                }
            });
        } catch (error) {
            console.log(error)
            return errorReturn;
        }
    },
    getDoctorProfile: async (_id, token) => {
        try {
            return await axios.get(`/api/v1/user/${_id}/details`, {
                headers: {
                    Authorization: token
                }
            });
        } catch (error) {
            console.log(error)
            return errorReturn;
        }
    },
    updateFirebaseToken: async (action, firebase_token, token) => {
        try {
            return await axios.post(`/api/v1/user/firebase/token`, {
                action,
                firebase_token
            }, {
                headers: {
                    Authorization: token
                }
            });
        } catch (error) {
            console.log(error)
            return errorReturn;
        }
    },
    listAppointment: async (role, token) => {
        try {
            return await axios.get(`/api/v1/users/appointments?role=${role}`, {
                headers: {
                    Authorization: token
                }
            })
        } catch (error) {
            console.log(error)
            return errorReturn;
        }
    },
    logout: async (token) => {
        try {
            return await axios.post('/api/v1/logout', {}, {
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

export default user;