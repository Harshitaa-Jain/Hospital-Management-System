import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getPatientById } from "../../services/user";

const ServiceBook = () => {
  const { id, name } = useParams();
  const [patient, setPatient] = useState({});
  const navigate = useNavigate();

  const services = [{ id: 1, option: 'Edit Profile' }];

  useEffect(() => {
    
    getPatient();
  }, []);

  const getPatient = async () => {
    try {

      console.log(sessionStorage.getItem("userId"));
      const patientId = sessionStorage.getItem("userId");
      debugger;
      const response = await getPatientById(patientId);
      setPatient(response);
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during fetching patient");
    }
  };

  const handleBack = () => {
    navigate('/PatientServices');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col"></div>
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Hello {patient.name} this is your Profile</h2>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>{patient.name}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{patient.email}</td>
                  </tr>
                  <tr>
                    <td>Password:</td>
                    <td>{patient.password}</td>
                  </tr>
                  <tr>
                    <td>Contact No:</td>
                    <td>{patient.contactNo}</td>
                  </tr>
                  <tr>
                    <td>Age:</td>
                    <td>{patient.age}</td>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>{patient.address}</td>
                  </tr>
                  <tr>
                    <td>Blood Group:</td>
                    <td>{patient.bloodGroup}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <ul className="list-group mt-3">
            {services.map((service) => (
              <li key={service.id} className="list-group-item">
                <Link
                  to={{
                    pathname: `/patientEdit/${sessionStorage.getItem("userId")}`,
                    state: { serviceData: service }
                  }}
                  className="btn btn-primary btn-block"
                >
                  {service.option}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col"></div>
        {/* <div className="col-lg-2">
          <button className="btn btn-primary btn-block mt-3" onClick={handleBack}>
          Previous Page
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ServiceBook;


//////////running code //////////
// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import { createUrl, log } from "../../utils/utils";
// import { getPatientById } from "../../services/user";
// import { Link } from 'react-router-dom';
// import { useEffect } from "react";

// const ServiceBook = () => {
//   const { id, name } = useParams();
//   // const [description, setDescription] = useState("");
//   // const [carId, setCarId] = useState("");
//   const [patient, setPatient] = useState([]);
//   const navigate = useNavigate();

//   const services = [
//     { id: 1, option: 'Edit Profile' }
//   ];

//   useEffect(() => {
//     getPatient();
//   }, [])
//   const getPatient = async () => {
//     try {
//       const patientId = sessionStorage.getItem("userId");
//       console.log(patientId);
//       const response = await getPatientById(patientId);
//       console.log(response);
//       setPatient(response);
//     } catch (error) {
//       console.error(error);
//       toast.error("An error occurred during getching patient");
//     }
//   };

//   const Back = ()=>{
//     navigate('/PatientServices');
// }

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
//                       <td>{patient.name} </td>
//                     </tr>
//                     <tr>
//                       <td>Email: </td>
//                       <td>{patient.email}</td>
//                     </tr>
//                     <tr>
//                       <td>Password:</td>
//                       <td>{patient.password} </td>
//                     </tr>
//                     <tr>
//                       <td>Contact No: </td>
//                       <td>{patient.contactNo}</td>
//                     </tr>
//                     <tr>
//                       <td>Age: </td>
//                       <td>{patient.age}</td>
//                     </tr>
//                     <tr>
//                       <td>Address: </td>
//                       <td>{patient.address}</td>
//                     </tr>
//                     <tr>
//                       <td>BloodGroup: </td>
//                       <td>{patient.bloodGroup}</td>
//                     </tr>

//                     <tr></tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* <button type="submit" class="btn btn-success" onClick={getPatient}>
//               Submit
//             </button> */}
//           </div>
//           <ul className='services-list'>
//             {services.map((service) => (
//               <li key={service.id} className='service-box'>
//                 <div className="service-content">
//                 </div>
//                 <Link

//                   to={{
//                     pathname: `/patientEdit/${sessionStorage.getItem("userId")}`,
//                     state: { serviceData: service }
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
//         <div >
//           <button className='btn btn-primary' 
//             onClick={Back}>
//             Back
//            </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceBook;






////////////////////////////////////
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

//////
//mayur code

// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import { createUrl, log } from "../../utils/utils";
// import { getPatientById } from "../../services/user";

// const ServiceBook = () => {
//   const { id, name } = useParams();
//   const [description, setDescription] = useState("");
//   const [carId, setCarId] = useState("");
//   const [patient, setPatient] = useState("");
//   const navigate = useNavigate();

//   const getPatient = async () => {
//     try {
//       const patientId= sessionStorage.getItem("userId");
//       const response = await getPatientById(patientId);
//       console.log(response);
//       setPatient(response);
//     } catch (error) {
//       console.error(error);
//       toast.error("An error occurred during getching patient");
//     }
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
//                       <td className="p-3"> Name:{patient.name} </td>
//                     </tr>
//                     <tr>
//                       <td>Email:{patient.email} </td>
//                     </tr>
//                     <tr>
//                       <td>Password:{patient.password} </td>
//                     </tr>
//                     <tr>
//                       <td>Contact No:{patient.contactNo} </td>
//                     </tr>
                    
//                       <tr>
//                         <td>Age:{patient.age} </td>
//                       </tr>
//                       <tr>
//                         <td>Address:{patient.address} </td>
//                       </tr>
//                       <tr>
//                         <td>BloodGroup:{patient.bloodGroup} </td>
//                       </tr>
                    
//                     <tr></tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <button type="submit" class="btn btn-success" onClick={getPatient}>
//               Submit
//             </button>
//           </div>
//         </div>
//         <div class="col"></div>
//       </div>
//     </div>
//   );
// };

// export default ServiceBook;

// /*return (
//     <div className="container">

//       <div className="row">
//         <div className="col"></div>
//         <div className="col">
//           <div className="form">
//             <h1>Book Service</h1>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label htmlFor="serviceId">Service ID</label>
//                 <input
//                   type="text"
//                   id="serviceId"
//                   name="serviceId"
//                   value={id}
//                   className="form-control"
//                   disabled
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="serviceName">Service Name</label>
//                 <input
//                   type="text"
//                   id="serviceName"
//                   name="serviceName"
//                   value={name}
//                   className="form-control"
//                   disabled
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="description">Description</label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   rows="4"
//                   placeholder="Enter description"
//                   className="form-control"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="carId">Car ID</label>
//                 <input
//                   type="text"
//                   id="carId"
//                   name="carId"
//                   placeholder="Enter car ID"
//                   className="form-control"
//                   value={carId}
//                   onChange={(e) => setCarId(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="serviceDate">Service Date</label>
//                 <input
//                   type="date"
//                   id="serviceDate"
//                   name="serviceDate"
//                   className="form-control"
//                   value={serviceDate}
//                   onChange={(e) => setServiceDate(e.target.value)}
//                 />
//               </div>
//               <button type="submit" className="btn btn-success">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//         <div className="col"></div>
//       </div>
//     </div>
//   );*/
