// import default style
import './App.css';
import './style.css';
import './contact.css';



// image number css
import 'react-phone-input-2/lib/material.css'
// react toastify
import 'react-toastify/dist/ReactToastify.css';

// react data grid
import '@inovua/reactdatagrid-community/index.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/effect-cards";
import "swiper/css/pagination"
import "swiper/css/navigation"

// react payment cards
import 'react-credit-cards/es/styles-compiled.css';



import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import PhotoFrame from "./pages/Phframe.jsx";
import PhotoBook from "./pages/PhBook.jsx";
import Cart from "./pages/Cart.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import TrackingPage from "./pages/TrackingPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import VerifyCodePage from "./pages/VerifyCodePage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import ChangePasswordPage from "./pages/ChangePasswordPage.jsx";
import DashboardPatientPage from "./pages/DashboardPatientPage.jsx";
import DashboardDoctorPage from "./pages/DashboardDoctorPage.jsx";
import PatientRecordPage from "./pages/PatientRecordPage.jsx";
import DoctorsPage from "./pages/DoctorsPage.jsx";
import PatientProfilePage from "./pages/PatientProfilePage.jsx";
import DoctorProfilePage from "./pages/DoctorProfilePage.jsx";
import PatientProfileSettingPage from "./pages/PatientProfileSettingPage.jsx";
import DoctorProfileSettingPage from "./pages/DoctorProfileSettingPage.jsx";
import DoctorCertificatePage from "./pages/DoctorCertificatePage.jsx";
import DoctorSetTimingPage from "./pages/DoctorSetTimingPage.jsx";
import PatientTestReportsPage from "./pages/PatientTestReportsPage.jsx";
import BookAppointmentPage from "./pages/BookAppointmentPage.jsx";
import DashboardDoctorPatientFilePage from "./pages/DashboardDoctorPatientFilePage.jsx";
import DashboardDoctorPatientRecordPage from "./pages/DashboardDoctorPatientRecordPage.jsx";
import SearchDoctorPage from "./pages/SearchDoctorPage.jsx";
import PatientMedicalTreatmentPage from "./pages/PatientMedicalTreatmentPage.jsx";
import PatientAppointmentPage from "./pages/PatientAppointmentPage.jsx";
import DoctorAppointmentPage from "./pages/DoctorAppointmentPage.jsx";
import PaymentCardPage from "./pages/PaymentCardPage.jsx";
import PatientAppointmentDetailPage from "./pages/PatientAppointmentDetailPage.jsx";
import FileViewerShared from './components/shared/FileViewerShared';
import { Backdrop } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from "react-redux";
import Meeting from "./components/patient_doctor/Meeting";


const App = () => {
  const backdropLoader = useSelector((selector) => selector.backdropLoader)
  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/photo-frame" element={<PhotoFrame />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/admin-page" element={<AdminPage />} />
          <Route exact path="/tracking-page" element={<TrackingPage />} />
          <Route exact path="/PhotoBook" element={<PhotoBook />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route exact path="/change-password/:user_id/:code" element={<ChangePasswordPage />} />
          <Route exact path="/verify-code/:email" element={<VerifyCodePage />} />
          <Route exact path="/payment-card" element={<PaymentCardPage />} />
          {
            /**
             * ! File Viewer
             */
          }
          <Route exact path="/order/photo" element={<FileViewerShared />} />
          <Route exact path="/meeting/:meeting_id/:token/:name" element={<Meeting />} />

          {
            /**
             * ! Patient Routes
            */
          }
          <Route exact path="/dashboard/patient" element={<DashboardPatientPage />} />
          <Route exact path="/search/doctors" element={<SearchDoctorPage />} />
          <Route exact path="/dashboard/patient/records" element={<PatientRecordPage />} />
          <Route exact path="/dashboard/patient/test-reports" element={<PatientTestReportsPage />} />
          <Route exact path="/dashboard/patient/doctors" element={<DoctorsPage />} />
          <Route exact path="/dashboard/patient/profile" element={<PatientProfilePage />} />
          <Route exact path="/dashboard/patient/profile/medical-treatment" element={<PatientMedicalTreatmentPage />} />
          <Route exact path="/dashboard/patient/appointments" element={<PatientAppointmentPage />} />
          <Route exact path="/dashboard/patient/appointments/:_id/details" element={<PatientAppointmentDetailPage />} />
          <Route exact path="/dashboard/patient/profile/setting" element={<PatientProfileSettingPage />} />
          <Route exact path="/dashboard/patient/:doctor_id/book-appointment" element={<BookAppointmentPage />} />
          {
            /**
             * ! Doctor Routes
            */
          }
          <Route exact path="/dashboard/doctor" element={<DashboardDoctorPage />} />
          <Route exact path="/dashboard/doctor/profile" element={<DoctorProfilePage />} />
          <Route exact path="/dashboard/doctor/profile/setting" element={<DoctorProfileSettingPage />} />
          <Route exact path="/dashboard/doctor/certificates" element={<DoctorCertificatePage />} />
          <Route exact path="/dashboard/doctor/appointment" element={<DoctorAppointmentPage />} />
          <Route exact path="/dashboard/doctor/set/timings" element={<DoctorSetTimingPage />} />
          <Route exact path="/dashboard/doctor/patient/:_id/records" element={<DashboardDoctorPatientRecordPage />} />
          <Route exact path="/dashboard/doctor/patient/:_id/records/:records_id/file/:file_id" element={<DashboardDoctorPatientFilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
