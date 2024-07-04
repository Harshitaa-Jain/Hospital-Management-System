import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../components/UI/CarDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import FinancePage from "../pages/Finance";
import PatientServices from "../pages/PatientServices";
import TestDrivePage from "../pages/TestDrive";
import Login from "../Authentication/Login";
import RegisterUser from "../Authentication/Registration";
import BookService from "../components/UI/BookService";
//import PatientProfile from "../components/UI/PatientProfile";
import Appointment from "../pages/Appointment";

//Import a toastify to use
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "../pages/Admin";
import Patient from "../pages/Patient";
import AddCar from "../pages/AddCar";
import BookingPage from "../components/UI/BookingPage";
import DoctorListing from "../pages/DoctorList";

///
import DoctorServices from "../pages/DoctorServices";
import AdminServices from "../pages/AdminServices";
import Allpatients from "../pages/AllPatients";

import PatientProfile from "../components/UI/PatientProfile";
import DoctorProfile from "../components/UI/DoctorProfile";
import AdminProfile from "../components/UI/AdminProfile";

import EditPatient from "../components/UI/editPatient";
import EditDoctor from "../components/UI/editDoctor";
import EditAdmin from "../components/UI/editAdmin";

import MyAppointment from "../pages/MyAppointment";
import AppointmentItem from "../components/UI/AppointmentItem";

///
import AddDoctor from "../components/UI/AddDoctor";
import AllDoctors from "../pages/AllDoctors";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<CarListing />} />
        <Route path="/docs" element={<DoctorListing />} />
        <Route path="/carDetails/:id" element={<CarDetails />} />
        <Route path="/finance" element={<FinancePage />} />
        <Route path="/PatientServices" element={<PatientServices />} />
        <Route path="/test_drive" element={<TestDrivePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/book_service/:id/:name" element={<BookService />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/patient_profile/:id/:name" element={<PatientProfile />} />
        <Route path="/appointment" element={<Appointment />} />

        <Route path="/DoctorServices" element={<DoctorServices />} />
        <Route path="/AdminServices" element={<AdminServices />} />

        <Route path="/patientEdit/:id" element={<EditPatient />} />
        <Route path="/patient_profile" element={<PatientProfile />} />

        <Route path="/doctor_profile/:id/:name" element={<DoctorProfile />} />
        <Route path="/doctorEdit/:id" element={<EditDoctor />} />
        <Route path="/doctor_profile" element={<DoctorProfile />} />

        {/* <Route path="/admin_profile/:id/:name" element={<AdminProfile />} /> */}
        {/* <Route path="/adminEdit/:id" element={<EditAdmin />} /> */}
        {/* <Route path="/admin_profile" element={<AdminProfile />} /> */}
        {/* <Route path="/allpatients/:id/:name" element={<Allpatients />} /> */}

        <Route path="/myappointments" element={<MyAppointment />} />
        <Route path="/appointmentItem" element={<AppointmentItem />} />

        {/* <Route path="/add_doctor/:id/:name" element={<AddDoctor />} /> */}
        <Route path="/alldoctors/:id/:name" element={<AllDoctors />} />




        <Route
          path="/allpatients/:id/:name"
          element={
            <ProtectedRoute role={"ROLE_ADMIN"}>
             <Allpatients />
            </ProtectedRoute>
          }
        />



        <Route
          path="/doctor_profile/:id/:name"
          element={
            <ProtectedRoute role={"ROLE_DOCTOR"}>
              <DoctorProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add_doctor/:id/:name"
          element={
            <ProtectedRoute role={"ROLE_ADMIN"}>
              <AddDoctor />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin_profile/:id/:name"
          element={
            <ProtectedRoute role={"ROLE_ADMIN"}>
              <AdminProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminEdit/:id"
          element={
            <ProtectedRoute role={"ROLE_ADMIN"}>
              <EditAdmin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin_profile"
          element={
            <ProtectedRoute role={"ROLE_ADMIN"}>
              <AdminProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default Routers;

// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import CarListing from "../pages/CarListing";
// import CarDetails from "../components/UI/CarDetails";
// import NotFound from "../pages/NotFound";
// import Contact from "../pages/Contact";
// import FinancePage from "../pages/Finance";
// import PatientServices from "../pages/PatientServices";
// import TestDrivePage from "../pages/TestDrive";
// import Login from "../Authentication/Login";
// import RegisterUser from "../Authentication/Registration";
// import BookService from "../components/UI/BookService";
// //import PatientProfile from "../components/UI/PatientProfile";
// import Appointment from "../pages/Appointment";

// //Import a toastify to use
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Admin from "../pages/Admin";
// import Patient from "../pages/Patient";
// import AddCar from "../pages/AddCar";
// import BookingPage from "../components/UI/BookingPage";
// import DoctorListing from "../pages/DoctorList";

// ///
// import DoctorServices from "../pages/DoctorServices";
// import AdminServices from "../pages/AdminServices";
// import Allpatients from "../pages/AllPatients";

// import PatientProfile from "../components/UI/PatientProfile";
// import DoctorProfile from "../components/UI/DoctorProfile";
// import AdminProfile from "../components/UI/AdminProfile";

// import EditPatient from "../components/UI/editPatient";
// import EditDoctor from "../components/UI/editDoctor";
// import EditAdmin from "../components/UI/editAdmin";

// import MyAppointment from "../pages/MyAppointment";
// import AppointmentItem from "../components/UI/AppointmentItem";

// ///
// import AddDoctor from "../Authentication/AddDoctor";
// import AllDoctors from "../pages/AllDoctors";

// const Routers = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/cars" element={<CarListing />} />
//         <Route path="/docs" element={<DoctorListing />} />
//         <Route path="/carDetails/:id" element={<CarDetails />} />
//         <Route path="/finance" element={<FinancePage />} />
//         <Route path="/PatientServices" element={<PatientServices />} />
//         <Route path="/test_drive" element={<TestDrivePage />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<RegisterUser />} />
//         <Route path="/booking/:id" element={<BookingPage />} />
//         <Route path="/book_service/:id/:name" element={<BookService />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/patient" element={<Patient />} />
//         <Route path="/addcar" element={<AddCar />} />
//         <Route path="/patient_profile/:id/:name" element={<PatientProfile />} />
//         <Route path="/appointment" element={<Appointment />} />

//         <Route path="/DoctorServices" element={<DoctorServices />} />
//         <Route path="/AdminServices" element={<AdminServices />} />

//         <Route path="/patientEdit/:id" element={<EditPatient />} />
//         <Route path="/patient_profile" element={<PatientProfile />} />

//         <Route path="/doctor_profile/:id/:name" element={<DoctorProfile />} />
//         <Route path="/doctorEdit/:id" element={<EditDoctor />} />
//         <Route path="/doctor_profile" element={<DoctorProfile />} />

//         <Route path="/admin_profile/:id/:name" element={<AdminProfile />} />
//         <Route path="/adminEdit/:id" element={<EditAdmin />} />
//         <Route path="/admin_profile" element={<AdminProfile />} />
//         <Route path="/allpatients/:id/:name" element={<Allpatients />} />

//         <Route path="/myappointments" element={<MyAppointment />} />
//         <Route path="/appointmentItem" element={<AppointmentItem />} />

//         <Route path="/add_doctor/:id/:name" element={<AddDoctor />} />
//         <Route path="/alldoctors/:id/:name" element={<AllDoctors />} />
//       </Routes>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Routers;
