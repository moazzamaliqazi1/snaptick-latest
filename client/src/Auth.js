import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addUser, backdropLoaderState, setAuthDisplay } from "./redux/action"
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom"
import user from "./api/user"
const Auth = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cookies = new Cookies()
    const token = cookies.get('token')
    const getUserProfile = async () => {
        try {
            dispatch(backdropLoaderState(true))
            const response = await user.getProfile(token)
            dispatch(backdropLoaderState(false))
            if (response.status === 200 && response.data.is_success) {
                cookies.set('token', response.data.data.jwt_token, { path: '/' });
                const { data } = response.data
                dispatch(setAuthDisplay(false))
                dispatch(addUser(data))
                if (data.user_type === 'admin') {
                    navigate(`/admin-page`)
                }
                else if (data.user_type === 'user'){
                    if(location.pathname === '/admin-page'){
                        navigate(`/`)
                    }
                    else if(!data.phone_number || !data.address){
                        navigate(`/user-profile`)
                    }
                }
                /*if (data.user_type === 'user') {
                    dispatch(addUser(data))
                    if (!data.name || !data.phone_number) {
                        dispatch(patientProfileCompleteMessage("Please complete your profile first"))
                        navigate(`/dashboard/patient/profile/setting`)
                    }
                }
                else if (data.user_type === 'admin') {
                    dispatch(addUser(data))
                    console.log(data.fee)
                    if (!data.name || !data.bio || !data.phone_number || data.languages.length === 0 || !data.fee || data.fee === 0) {
                        dispatch(doctorProfileCompleteMessage("Please complete your profile first"))
                        navigate(`/dashboard/doctor/profile/setting`)
                    }
                }
                else {
                    dispatch(setAuthDisplay(false))
                    navigate(`/login`)
                }*/
            }
            else {
                dispatch(setAuthDisplay(false))
                if(location.pathname !== '/'){
                    navigate(`/login`)
                }
            }
        } catch (error) {
            console.log(error)
            if(location.pathname !== '/'){
                navigate(`/login`)
            }
            toast.error('Some error with server, please wait')
        }
    }
    useEffect(() => {
        getUserProfile()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (<>
        <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
        />
    </>)
}

export default Auth;