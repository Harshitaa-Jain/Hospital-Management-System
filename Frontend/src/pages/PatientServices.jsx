
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/services_page.css';
import profilephoto from '../assets/all-images/service-img/profilephoto.png';
import AppointmentImage from '../assets/all-images/service-img/AppointmentImage.png';
import patientAppointment from '../assets/all-images/service-img/patientAppointment.jpg';
import engineTuneUpImage from '../assets/all-images/service-img/engineTuneUpImage.png';

const ServicesPage = () => {

  const services = [
    { id: 1, name: 'My Profile', option:'Show Profile',path:'/patient_profile/${service.id}/${service.name}'},
    { id: 2, name: 'Book Appointment',option:'Book Appointment',path:'/appointment'},
    { id: 3, name: 'Your Appointments',option:'Show Appointment',path:'/myappointments'},
    // Add more services as needed
  ];
  console.log(sessionStorage.getItem("userId"));
  const serviceImages = {
    1: profilephoto,
    2: AppointmentImage,
    3: patientAppointment,
    4: engineTuneUpImage,
    // Add more image imports as needed
  };

  return (
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

export default ServicesPage;


////////////////////

/*omkar code below* */
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/services_page.css';
// import oilChangeImage from '../assets/all-images/service-img/oilChangeImage.png';
// import tireRotationImage from '../assets/all-images/service-img/tireRotationImage.png';
// import brakeInspectionImage from '../assets/all-images/service-img/brakeInspectionImage.png';
// import engineTuneUpImage from '../assets/all-images/service-img/engineTuneUpImage.png';

// const ServicesPage = () => {

//   const services = [
//     { id: 1, name: 'My Profile', option:'Show Profile'},
//     { id: 2, name: 'Book Appointment',option:'Book Appointment' },
//     { id: 3, name: 'Our Doctors',option:'Show Doctors'},
//     { id: 4, name: 'Your Appointments',option:'Show Appointment'},
//     // Add more services as needed
//   ];
//   console.log(sessionStorage.getItem("userId"));
//   const serviceImages = {
//     1: oilChangeImage,
//     2: tireRotationImage,
//     3: brakeInspectionImage,
//     4: engineTuneUpImage,
//     // Add more image imports as needed
//   };

//   return (
//     <div className='service_main'>

//       <br />
//       <br />
//       { <center><h2>Welcome to our Hospital</h2></center> }
     
//       <br />
//       <br />
//       <ul className='services-list'>
//         {services.map((service) => (
//           <li key={service.id} className='service-box'>
//             <div className="service-content">
//               <h3>{service.name}</h3>
//              {/* <img src={serviceImages[service.id]} alt={`${service.name} Image`} className="service-image" /> */}
//             </div>
//             <Link
//               to={`/patient_profile/${service.id}/${service.name}`}
//               className="btn btn-primary"
//             >
//               {service.option}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ServicesPage;

