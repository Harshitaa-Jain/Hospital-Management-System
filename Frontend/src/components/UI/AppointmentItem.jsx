import React, { useState } from "react";
import { Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/car-item.css";
import { createUrl } from "../../utils/utils";
import axios from "axios";
import { toast } from "react-toastify";
import { getAuthorizationHeader } from "../../utils/jwtUtil";

const AppointmentItem = ({ appointment }) => {
  const [appointmentStatus, setAppointmentStatus] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState(true);
  const navigate = useNavigate();
  const handleStatusChange = (id) => {
    //    const patientId = sessionStorage .getItem("userId");
    var updatedUrl = createUrl(`/appoinment/${id}`);

    console.log(id);
    debugger;
    axios
      .put(updatedUrl, {
        headers: {
          Authorization: getAuthorizationHeader(),
        },
      })
      .then((result) => {
        console.log("Full Response:", result);
        setAppointmentStatus(false);
        window.location.reload();
      })
      .catch((error) => {
        // Handle network errors
        console.error("Network Error:", error);
        // You can also use toast.error("Network Error: " + error.message);
        toast.error("Network Error: Unable to reach the server");
      });
  };

  //mrehto for change payment status

  const handlePaymentStatusChange = (id) => {
    //    const patientId = sessionStorage .getItem("userId");
    var updatedUrl = createUrl(`/appoinment/paymentStatus/${id}`);

    console.log(id);
    debugger;
    axios
      .put(updatedUrl, {},{
        headers: {
          Authorization: getAuthorizationHeader(),
        },
      })
      .then((result) => {
        console.log("Full Response:", result);
        setPaymentStatus(false);
        window.location.reload();
      })
      .catch((error) => {
        // Handle network errors
        console.error("Network Error:", error);
        // You can also use toast.error("Network Error: " + error.message);
        toast.error("Network Error: Unable to reach the server");
      });
  };
  return (
    <tr>
      <td>{appointment.name}</td>

      <td>{appointment.age}</td>
      <td>{appointment.relation}</td>

      <td>
        <ul>
          {appointment.doctor.schedule.map((schedule, index) => (
            <li key={index}>{schedule.day}</li>
          ))}
        </ul>
      </td>
      <td>
        <ul>
          {appointment.doctor.schedule.map((schedule, index) => (
            <li key={index}>{schedule.time}</li>
          ))}
        </ul>
      </td>
      
      {sessionStorage.getItem("userRoles") === "ROLE_ADMIN" && (
      <td>{appointment.paymentAmount}</td>                                      
                                    )}

      <td>{appointment.timestamp}</td>

      {sessionStorage.getItem("userRoles") === "ROLE_DOCTOR" && (
        <>
          <td>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => handleStatusChange(appointment.id)}
              disabled={!appointmentStatus}
            >
              Resolved
            </button>
          </td>
        </>
      )}
      {sessionStorage.getItem("userRoles") === "ROLE_ADMIN" && (
        <>
          <td>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => handlePaymentStatusChange(appointment.id)}
              disabled={!paymentStatus}
            >
              Resolved
            </button>
          </td>
        </>
      )}
      <td>{appointment.paymentStatus}</td>
    </tr>
  );
};
export default AppointmentItem;

// {sessionStorage.getItem("userRoles")==="Patient" && (
//   <>        <div className="container">
//   <form onSubmit={bookAppointment}>
//       <div className="table-responsive">
//          <table className="table table-bordered">
//           <thead>
//              <tr>
//                <th colSpan="2" className="text-center">
//                  <strong>Fill Appointment Details</strong>
//                </th>
//   </tr>
//           </thead>
//              <tbody>
//            <tr>
//              <td>
//                  <strong>Patient Name:</strong>
//                </td>
//                <td>
//                  <input
//                    type="text"
//                    className="form-control"
//                    name="name"
//                    value={formData.name}
//                    onChange={handleInputChange}
//                    placeholder="Enter patient name"
//                    required
//                  />
//                </td>
//              </tr>
//             <tr>
//               <td>
//                 <strong>Patient Age:</strong>
//                </td>
//                <td>
//                  <input
//                    type="text"
//                  className="form-control"
//                    name="age"
//                    value={formData.age}
//                    onChange={handleInputChange}
//                    placeholder="Enter patient age"
//                    required
//                  />
//                </td>
//              </tr>
//              <tr>
//                <td>
//                  <strong>Patient Contact No:</strong>
//                </td>
//                <td>
//                  <input
//                    type="text"
//                    className="form-control"
//                    name="contactNo"
//                   value={formData.contactNo}
//                   onChange={handleInputChange}
//                   placeholder="Enter contact number"
//                   required
//                 />
//                </td>
//              </tr>
//              <tr>
//                <td>
//                  <strong>Relation with the Patient:</strong>
//                </td>
//                <td>
//                  <input
//                    type="text"
//                    className="form-control"
//                    name="relation"
//                    value={formData.relation}
//                    onChange={handleInputChange}
//                    placeholder="Enter relation"
//                    required
//                  />
//                </td>
//              </tr>
//              <tr>
//               <td></td>

//              </tr>
//              {loading ? ( // Show loading indicator if data is being fetched
//                <tr>
//                  <td colSpan="2" className="text-center">
//                    Loading...
//                  </td>
//                </tr>
//              ) : doctor.length > 0 ? ( // Render select options if doctor data is available
//                <tr>
//                  <td>
//                    <strong>Select Doctor:</strong>
//                  </td>
//                  <td>
//                    <select
//                      className="form-select select-doctor"
//                      aria-label="Select doctor"
//                      onChange={(e) => setSelectedDoctor(e.target.value)}
//                      required
//                    >
//                      <option value="">Select a doctor</option>
//                      {doctor.map((doc, index) => (
//                        <option key={index} value={doc.id}>
//                          {doc.dname}
//                        </option>

//                      ))}
//                    </select>
//                  </td>

//                </tr>

//              ) : (
//                <tr>
//                  <td colSpan="2" className="text-center">
//                    No doctors available
//                  </td>
//                </tr>
//              )}
//            </tbody>
//          </table>
//        </div>
//        <div className="text-center">
//          <button type="submit" className="btn btn-primary">
//            Submit
//        </button>
//      </div>
//      </form>
//    </div>

// </>
// )}

/////
//running code
// import React from "react";
// import { Col } from "reactstrap";
// import { Link, useNavigate } from "react-router-dom";
// import "../../styles/car-item.css";
// import { createUrl } from "../../utils/utils";

// const AppointmentItem = ({ appointment }) => {
//   return (
//     <tr>
//       <td>{appointment.name}</td>

//       <td>{appointment.age}</td>
//       <td>{appointment.relation}</td>

//        <td>
//         <ul>
//           {appointment.doctor.dschedule.map((schedule, index) => (
//             <li key={index}>{schedule.day}</li>
//           ))}
//         </ul>
//       </td>
//       <td>
//         <ul>
//           {appointment.doctor.dschedule.map((schedule, index) => (
//             <li key={index}>{schedule.time}</li>
//           ))}
//         </ul>
//       </td>
//       <td>{appointment.paymentAmount}</td>
//       <td>{appointment.timestamp}</td>
//       <td>
//               <button
//                 type="button"
//                 className={`btn btn-${appointment.appointmentStatus === "success" ? "success" : "default"}`}
//               >
//                 {appointment.appointmentStatus}
//               </button>
//             </td>
//       <td>{appointment.paymentStatus}</td>

//     </tr>
//   );
// };
// export default AppointmentItem;

/////
/*const CarItem = (props) => {
  const {  id,  modelName, brandName, automatic, speed, price } = props.item;
  const imageUrl = createUrl(`/cars/images/${id}`);
  

  const navigate = useNavigate();
  
  //You Have To get the insurance First 
  const BookNow = () => {
    // navigate("/cars/bookingForm");
    navigate(`/booking/${id}`, { state: { car: props.item } });
  }

  const carDetails = () => {

    navigate(`/carDetails/${id}`);
    console.log(id);
    debugger
  }

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img className="w-100 image_car" src={imageUrl} alt=""  />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{brandName}</h4>
          <h6 className="rent__price text-center mt-">
            ₹{price}.00 
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {modelName}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent" onClick= {BookNow}>
            
            <Link to={`/cars/${id}`}>Book</Link>  
          </button>

          <button className=" w-50 car__item-btn car__btn-details" onClick={carDetails}>
            Details
          </button>
        </div>
      </div>
    </Col>
  );
};
*/

{
  /* {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.dname}</td>
              <td>{doctor.dcontactNo}</td>
              <td>{doctor.dspecialisation}</td>
              <td>
                <ul>
                  {doctor.dschedule.map((schedule, index) => (
                    <li key={index}>{schedule.day}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {doctor.dschedule.map((schedule, index) => (
                    <li key={index}>{schedule.time}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody> */
}
