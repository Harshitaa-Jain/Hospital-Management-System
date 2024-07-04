

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { createUrl, log } from "../../utils/utils";
import { getDoctorById } from "../../services/user";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import "../../styles/car-item.css";
//import DoctorItem from "../UI/DoctorItem";

const ServiceBook1 = () => {
  const { id, name } = useParams();
  // const [description, setDescription] = useState("");
  // const [carId, setCarId] = useState("");
  const [doctor, setDoctor] = useState([]);
  const navigate = useNavigate();

  const services = [
    { id: 1, option: 'Edit Profile' }
  ];

  const schedule =

    useEffect(() => {
      getDoctor();
    }, [])
  const getDoctor = async () => {
    try {
      debugger;
      const doctorId = sessionStorage.getItem("userId");
      console.log(doctorId);
      const response = await getDoctorById(doctorId);
      debugger;
      console.log(response);
      setDoctor(response);
      debugger;
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during getching doctor");
    }
  };

  const Back = () => {
    navigate('/DoctorServices');
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <div class="form">
            <h1>Your Profile</h1>
            <div class="mb-3">
              <div class="table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td colSpan="1"> Name:</td>
                      <td>{doctor.name} </td>
                    </tr>
                    <tr>
                      <td>Email: </td>
                      <td>{doctor.email}</td>
                    </tr>
                    <tr>
                      <td>Password:</td>
                      <td>{doctor.password} </td>
                    </tr>
                    <tr>
                      <td>Contact No: </td>
                      <td>{doctor.contactNo}</td>
                    </tr>
                    <tr>
                      <td>Specialisation: </td>
                      <td>{doctor.specialisation}</td>
                    </tr>
                    
                    <tr>
                      <td>Schedule:</td>
                      <td>
                        <ul>
                          {doctor.schedule && doctor.schedule.map((doc, index) => (
                            <li key={index}>{doc.day}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                    {/* <tr>
                      <td>Schedule</td>
                      <td>
                        <ul>
                          {doctor.schedule.map((schedules, index) => (
                              <li key={index}>{schedules.day}</li>
                            ))}
                        </ul>
                      </td>
                    </tr> */}
                    {/* <tr>
                      <td>BloodGroup: </td>
                      <td>{patient.pbloodGroup}</td>
                    </tr> */}

                    <tr></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* <button type="submit" class="btn btn-success" onClick={getPatient}>
              Submit
            </button> */}
          </div>
          <ul className='services-list'>
            {services.map((service) => (
              <li key={service.id} className='service-box'>
                <div className="service-content">
                </div>
                <Link

                  to={{
                    pathname: `/doctorEdit/${sessionStorage.getItem("userId")}`,
                    state: { serviceData: service }
                  }}
                  className="btn btn-primary"
                >
                  {service.option}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div class="col"></div>
        <div >
          <button className='btn btn-primary'
            onClick={Back}>
            Back
           </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBook1;

//mayur running code below

// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import { createUrl, log } from "../../utils/utils";
// import { getDoctorById } from "../../services/user";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";

// const ServiceBook1 = () => {
//   const { id, name } = useParams();
//   // const [description, setDescription] = useState("");
//   // const [carId, setCarId] = useState("");
//   const [doctor, setDoctor] = useState([]);
//   const navigate = useNavigate();

//   const services = [{ id: 1, option: "Edit Profile" }];

//   useEffect(() => {
//     getDoctor();
//   }, []);
//   const getDoctor = async () => {
//     try {
//       const doctorId = sessionStorage.getItem("userId");
//       console.log(doctorId);
//       const response = await getDoctorById(doctorId);
//       console.log(response);
//       setDoctor(response);
//     } catch (error) {
//       console.error(error);
//       toast.error("An error occurred during getching doctor");
//     }
//   };

//   const Back = () => {
//     navigate("/DoctorServices");
//   };

//   return (
//     <div class="container">
//       <div class="row">
//         <div class="col"></div>
//         <div class="col">
//           <div class="form">
//             <h1>Your Profile</h1>
//             <div class="mb-3">
//               <div class="table-responsive">
//                 <table class="table">
//                   <tbody>
//                     <tr>
//                       <td colSpan="1"> Name:</td>
//                       <td>{doctor.dname} </td>
//                     </tr>
//                     <tr>
//                       <td>Email: </td>
//                       <td>{doctor.email}</td>
//                     </tr>
//                     <tr>
//                       <td>Password:</td>
//                       <td>{doctor.password} </td>
//                     </tr>
//                     <tr>
//                       <td>Contact No: </td>
//                       <td>{doctor.dcontactNo}</td>
//                     </tr>
//                     <tr>
//                       <td>Specialisation: </td>
//                       <td>{doctor.dspecialisation}</td>
//                     </tr>
//                     <tr>
                  
//                       <td>Schedule Day: </td>
//                       <td><ul>
//                           {doctor.dschedule && doctor.dschedule.map((doc, index) => (
//                             <li key={index}>{doc.day}</li>
//                           ))}
//                         </ul>
//                      </td>
//                     </tr>
//                     <tr>
                  
//                       <td>Schedule Time: </td>
//                       <td><ul>
//                           {doctor.dschedule && doctor.dschedule.map((doc, index) => (
//                             <li key={index}>{doc.time}</li>
//                           ))}
//                         </ul>
//                      </td>
//                     </tr>
//                     {/* <tr>
//                       <td>Schedule: </td>
//                       <td>{doctor.dschedule}</td>
//                     </tr> */}
//                     {/* <tr>
//                       <td>BloodGroup: </td>
//                       <td>{patient.pbloodGroup}</td>
//                     </tr> */}

//                     <tr></tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* <button type="submit" class="btn btn-success" onClick={getPatient}>
//               Submit
//             </button> */}
//           </div>
//           <ul className="services-list">
//             {services.map((service) => (
//               <li key={service.id} className="service-box">
//                 <div className="service-content"></div>
//                 <Link
//                   to={{
//                     pathname: `/doctorEdit/${sessionStorage.getItem("userId")}`,
//                     state: { serviceData: service },
//                   }}
//                   className="btn btn-primary"
//                 >
//                   {service.option}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div class="col"></div>
//         <div>
//           <button className="btn btn-primary" onClick={Back}>
//             Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceBook1;

/*return (
    <div className="container">

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <h1>Book Service</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="serviceId">Service ID</label>
                <input
                  type="text"
                  id="serviceId"
                  name="serviceId"
                  value={id}
                  className="form-control"
                  disabled
                />
              </div>
              <div className="mb-3">
                <label htmlFor="serviceName">Service Name</label>
                <input
                  type="text"
                  id="serviceName"
                  name="serviceName"
                  value={name}
                  className="form-control"
                  disabled
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  placeholder="Enter description"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="carId">Car ID</label>
                <input
                  type="text"
                  id="carId"
                  name="carId"
                  placeholder="Enter car ID"
                  className="form-control"
                  value={carId}
                  onChange={(e) => setCarId(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="serviceDate">Service Date</label>
                <input
                  type="date"
                  id="serviceDate"
                  name="serviceDate"
                  className="form-control"
                  value={serviceDate}
                  onChange={(e) => setServiceDate(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );*/
