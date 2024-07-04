import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/services_page.css';
import doctorProfile from '../assets/all-images/service-img/doctorProfile.jpg';
import AppointmentImage from '../assets/all-images/service-img/AppointmentImage.png';
import patientAppointment from '../assets/all-images/service-img/patientAppointment.jpg';
import engineTuneUpImage from '../assets/all-images/service-img/engineTuneUpImage.png';


const ServicesPage1 = () => {

    const services = [
      { id: 1, name: 'My Profile', option:'Show Profile',path:'/doctor_profile/:id/:name'},
        { id: 2, name: 'My Appointments',option:'Show Appointment',path:'/myappointments'},
      // Add more services as needed
    ];
    const serviceImages = {
      1: doctorProfile,
      2: AppointmentImage,
      3: patientAppointment,
      4: engineTuneUpImage,
      // Add more image imports as needed
    };
    return(
        <div className='service_main'>

      <br />
      <br />
      { <center><h2>Welcome Dr name tp our hopsital </h2></center> }
     
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

export default ServicesPage1;