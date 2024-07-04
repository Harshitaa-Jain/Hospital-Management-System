import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/services_page.css';
import profilephoto from '../assets/all-images/service-img/profilephoto.png';
import doctorApt from '../assets/all-images/service-img/doctorApt.jpg';
import patientAppointment from '../assets/all-images/service-img/patientAppointment.jpg';
import AppointmentImage from '../assets/all-images/service-img/AppointmentImage.png';


const ServicesPage2 = () => {

    const services = [
      { id: 1, name: 'My Profile', option:'Show Profile',path:'/admin_profile/${service.id}/${service.name}'},
      { id: 2, name: 'Add Doctor',option:'Add Doctor',path:'/add_doctor/${service.id}/${service.name}'},
      { id: 3, name: 'All Appointments',option:'Show Appointments',path:'/myappointments'},
      { id: 4, name: 'All patients',option:'Show Patients',path:'/allpatients/${service.id}/${service.name}'},
      { id: 5, name : 'All Doctors',option:'Show Doctors',path:'/alldoctors/${service.id}/${service.name}'}
      // Add more services as needed
      // { id: 1, name: 'My Profile', option:'Show Profile',path:'/patient_profile/${service.id}/${service.name}'},
      // { id: 2, name: 'Book Appointment',option:'Book Appointment',path:'/appointment'},
      // { id: 3, name: 'Our Doctors',option:'Show Doctors',path:'/patient_profile/${service.id}/${service.name}'},
      // { id: 4, name: 'Your Appointments',option:'Show Appointment',path:'/cars'},
      // // Add more services as needed

    ];

    const serviceImages = {
      1: profilephoto,
      2: doctorApt,
      3: patientAppointment,
      4: AppointmentImage,
      5: patientAppointment
      // Add more image imports as needed
    };

    return(
        <div className='service_main'>

      <br />
      <br />
      { <center><h2>Welcome to our Hospital</h2></center> }
     
      <br />
      <br />
      <ul className='services-list'>
        {services.map((service) => (
          <li key={service.id} className='service-box'>
            <div className="service-content">
              <h3>{service.name}</h3>
             <img src={serviceImages[service.id]} alt={`${service.name} Image`} className="service-image" />
            </div>
            <Link
              to={`${service.path}`}
              className="btn btn-primary"
            >
              {service.option}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage2;