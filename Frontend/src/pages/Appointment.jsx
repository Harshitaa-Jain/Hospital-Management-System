import React, { useEffect, useState } from "react";
import { Container, Table } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import DoctorItem from "../components/UI/DoctorItem";
import axios from "axios";
import { createUrl, log } from "../utils/utils";
import "../styles/header.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getAuthorizationHeader } from "../utils/jwtUtil";

const DoctorListing = () => {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contactNo: "",
    relation: "",
  });

  const patientId = sessionStorage.getItem("userId");

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = () => {
    const url = createUrl("/admin/doctorList");
    axios
      .get(url, {
        headers: {
          Authorization: getAuthorizationHeader(),
        },
      })
      .then(function (response) {
        setDoctor(response.data);
        setLoading(false); // Set loading to false after fetching data
        log(response);
      })
      .catch(function (error) {
        log(error);
        setLoading(false); // Set loading to false in case of error
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const bookAppointment = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const url = createUrl("/appoinment");
    console.log(selectedDoctor);
    const Body = {
      ...formData,
      patientId: sessionStorage.getItem("userId"),
      doctorId: selectedDoctor,
    };
    debugger;
    try {
      const response = await axios.post(url, Body,{
        headers: {
          Authorization: getAuthorizationHeader(),
        },
      });
      debugger;
      console.log("Appointment booked successfully:", response.data);
      toast.success("Appointment booked successfully");
      navigate("/PatientServices");
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };

  const getMinDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Add leading zeros if month or day is less than 10
    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <div>
        <Helmet title="Doctor">
          <CommonSection title="Appointment Form" />
          <section>
            <Container>
              <Table striped>
                <thead>
                  <tr>
                    <th>Doctor Name</th>
                    <th>Contact Number</th>
                    <th>Specialization</th>
                    <th>Day</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {doctor.map((doc, index) => (
                    <DoctorItem key={index} doctor={doc} />
                  ))}
                </tbody>
              </Table>
            </Container>
          </section>
        </Helmet>

        <div>
          <hr />
        </div>
      </div>
      {sessionStorage.getItem("userRoles") === "ROLE_PATIENT" && (
        <>
          {" "}
          <div className="container">
            <form onSubmit={bookAppointment}>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th colSpan="2" className="text-center">
                        <strong>Fill Appointment Details</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Patient Name:</strong>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter patient name"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Patient Age:</strong>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          placeholder="Enter patient age"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Patient Contact No:</strong>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="contactNo"
                          value={formData.contactNo}
                          onChange={handleInputChange}
                          placeholder="Enter contact number"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Relation with the Patient:</strong>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="relation"
                          value={formData.relation}
                          onChange={handleInputChange}
                          placeholder="Enter relation"
                          required
                        />
                      </td>
                    </tr>

                    {/* <tr>
                      <td>
                        <strong>Appointment Date:</strong>
                      </td>
                      <td>
                        <input
                          type="date"
                          className="form-control"
                          name="appointmentDate"
                          value={formData.appointmentDate}
                          onChange={handleInputChange}
                          required
                        />
                      </td>
                    </tr> */}

                    <td>
                      <strong>Appointment Date:</strong>  
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleInputChange}
                        min={getMinDate()} // Set the minimum date dynamically
                        required
                      />
                    </td>

                    <tr>
                      <td></td>
                    </tr>
                    {loading ? ( // Show loading indicator if data is being fetched
                      <tr>
                        <td colSpan="2" className="text-center">
                          Loading...
                        </td>
                      </tr>
                    ) : doctor.length > 0 ? ( // Render select options if doctor data is available
                      <tr>
                        <td>
                          <strong>Select Doctor:</strong>
                        </td>
                        <td>
                          <select
                            className="form-select select-doctor"
                            aria-label="Select doctor"
                            onChange={(e) => setSelectedDoctor(e.target.value)}
                            required
                          >
                            <option value="">Select a doctor</option>
                            {doctor.map((doc, index) => (
                              <option key={index} value={doc.id}>
                                {doc.name}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    ) : (
                      <tr>
                        <td colSpan="2" className="text-center">
                          No doctors available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default DoctorListing;

////******************************************************************************* */

// import React, { useEffect, useState } from "react";
// import { Container, Table } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import DoctorItem from "../components/UI/DoctorItem";
// import axios from "axios";
// import { createUrl, log } from "../utils/utils";
// import "../styles/header.css";

// const DoctorListing = () => {
//   const [doctor, setDoctor] = useState([]);
//   const [selectedDoctor, setSelectedDoctor] = useState("");
//   const [loading, setLoading] = useState(true);

//   const patientId = sessionStorage.getItem("userId");

//   useEffect(() => {
//     loadDoctors();
//   }, []);

//   const loadDoctors = () => {
//     const url = createUrl("/doctor");
//     axios
//       .get(url)
//       .then(function (response) {
//         setDoctor(response.data);
//         setLoading(false); // Set loading to false after fetching data
//         log(response);
//       })
//       .catch(function (error) {
//         log(error);
//         setLoading(false); // Set loading to false in case of error
//       });
//   };

//   const bookAppointment = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     const formData = new FormData(event.target); // Get form data
// console.log(formData);
// debugger;
// const Body = {
//   name: formData.get("patientName"),
//   age: formData.get("patientAge"),
//   contactNo: formData.get("patientContactNo"),
//   relation: formData.get("relation"),

// };

// const url = createUrl("/appointment");

// /* post(url, null, {
//   params: { patientId: appointmentData.patientId, doctorId: appointmentData.doctorId },
//   data: appointmentData.aptDto
// })*/
// axios.post(url, Body,{
//   params: { patientId: sessionStorage.getItem("userId"), doctorId: selectedDoctor }
// })
//   .then(function (response) {
//     // Handle success
//     console.log("Appointment booked successfully:", response.data);
//     //toast.success("Appointment booked successfully !")
//     // Optionally, you can reset the form fields here
//   })
//   .catch(function (error) {
//     // Handle error
//     console.error("Error booking appointment:", error);
//   });
//   };

//   return (
//     <div>
//       <Helmet title="Doctor">
//         <CommonSection title="Doctor List" />
//         <section>
//           <Container>
//             <Table striped>
//               <thead>
//                 <tr>
//                   <th>Doctor Name</th>
//                   <th>Contact Number</th>
//                   <th>Specialization</th>
//                   <th>Day</th>
//                   <th>Time</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {doctor.map((doc, index) => (
//                   <DoctorItem key={index} doctor={doc} />
//                 ))}
//               </tbody>
//             </Table>
//           </Container>
//         </section>
//       </Helmet>

//       <div>
//         <hr />
//       </div>

//       <div className="container">
//         <form onSubmit={bookAppointment}>
//           <div className="table-responsive">
//             <table className="table table-bordered">
//               <thead>
//                 <tr>
//                   <th colSpan="2" className="text-center">
//                     <strong>Fill Appointment Details</strong>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td><strong>Patient Name:</strong></td>
//                   <td><input type="text" className="form-control" name="patientName" placeholder="Enter patient name" required /></td>
//                 </tr>
//                 <tr>
//                   <td><strong>Patient Age:</strong></td>
//                   <td><input type="text" className="form-control" name="patientAge" placeholder="Enter patient age" required /></td>
//                 </tr>
//                 <tr>
//                   <td><strong>Patient Contact No:</strong></td>
//                   <td><input type="text" className="form-control" name="patientContactNo" placeholder="Enter contact number" required /></td>
//                 </tr>
//                 <tr>
//                   <td><strong>Relation with the Patient:</strong></td>
//                   <td><input type="text" className="form-control" name="relation" placeholder="Enter relation" required /></td>
//                 </tr>
//                 {loading ? ( // Show loading indicator if data is being fetched
//                   <tr>
//                     <td colSpan="2" className="text-center">
//                       Loading...
//                     </td>
//                   </tr>
//                 ) : doctor.length > 0 ? ( // Render select options if doctor data is available
//                   <tr>
//                     <td><strong>Select Doctor:</strong></td>
//                     <td>
//                       <select className="form-select select-doctor" aria-label="Select doctor" onChange={(e) => setSelectedDoctor(e.target.value)} required>
//                         <option value="">Select a doctor</option>
//                         {doctor.map((doc, index) => (
//                           <option key={index} value={doc.dname}>{doc.dname}</option>
//                         ))}
//                       </select>
//                     </td>
//                   </tr>
//                 ) : (
//                   <tr>
//                     <td colSpan="2" className="text-center">
//                       No doctors available
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//           <div className="text-center">
//             <button type="submit" className="btn btn-primary">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DoctorListing;
////////////////////////////**************************************************** */
// import React, { useEffect, useState } from "react";
// import { Container, Table } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import DoctorItem from "../components/UI/DoctorItem";
// import axios from "axios";
// import { createUrl, log } from "../utils/utils";
// import "../styles/header.css";
// import { toast } from "react-toastify";

// const DoctorListing = () => {
//   const [doctor, setDoctor] = useState([]);
//   const [selectedDoctor, setSelectedDoctor] = useState("");
//   const [loading, setLoading] = useState(true);

//   const patientId = sessionStorage.getItem("userId");
//   useEffect(() => {
//     loadDoctors();
//   }, []);

//   const loadDoctors = () => {
//     const url = createUrl("/doctor");
//     axios
//       .get(url)
//       .then(function (response) {
//         setDoctor(response.data);
//         setLoading(false); // Set loading to false after fetching data
//         log(response);
//       })
//       .catch(function (error) {
//         log(error);
//         setLoading(false); // Set loading to false in case of error
//       });
//   };

// const bookAppointment = (event) => {
//   debugger;
//   event.preventDefault(); // Prevent default form submission behavior
//   const formData = new FormData(event.target); // Get form data

//   const Body = {
//     name: formData.get("patientName"),
//     age: formData.get("patientAge"),
//     contactNo: formData.get("patientContactNo"),
//     relation: formData.get("relation"),

//   };

//   const url = createUrl("/appointment");

//   /* post(url, null, {
//     params: { patientId: appointmentData.patientId, doctorId: appointmentData.doctorId },
//     data: appointmentData.aptDto
//   })*/
//   axios.post(url, Body,{
//     params: { patientId: sessionStorage.getItem("userId"), doctorId: selectedDoctor }
//   })
//     .then(function (response) {
//       // Handle success
//       console.log("Appointment booked successfully:", response.data);
//       toast.success("Appointment booked successfully !")
//       // Optionally, you can reset the form fields here
//     })
//     .catch(function (error) {
//       // Handle error
//       console.error("Error booking appointment:", error);
//     });
// };

//   return (
//     <div>
//       <Helmet title="Doctor">
//         <CommonSection title="Doctor List" />
//         <section>
//           <Container>
//             <Table striped>
//               <thead>
//                 <tr>
//                   <th>Doctor Name</th>
//                   <th>Contact Number</th>
//                   <th>Specialization</th>
//                   <th>Day</th>
//                   <th>Time</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {doctor.map((doc, index) => (
//                   <DoctorItem key={index} doctor={doc} />
//                 ))}
//               </tbody>
//             </Table>
//           </Container>
//         </section>
//       </Helmet>

//       <div>
//         <hr />
//       </div>

//       <div className="container">
//         <form onSubmit={bookAppointment}>
//           <div className="table-responsive">
//             <table className="table table-bordered">
//               <thead>
//                 <tr>
//                   <th colSpan="2" className="text-center">
//                     <strong>Fill Appointment Details</strong>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td><strong>Patient Name:</strong></td>
//                   <td><input type="text" className="form-control" placeholder="Enter patient name" /></td>
//                 </tr>
//                 <tr>
//                   <td><strong>Patient Age:</strong></td>
//                   <td><input type="text" className="form-control" placeholder="Enter patient age" /></td>
//                 </tr>
//                 <tr>
//                   <td><strong>Patient Contact No:</strong></td>
//                   <td><input type="text" className="form-control" placeholder="Enter contact number" /></td>
//                 </tr>
//                 <tr>
//                   <td><strong>Relation with the Patient:</strong></td>
//                   <td><input type="text" className="form-control" placeholder="Enter relation" /></td>
//                 </tr>
//                 {loading ? ( // Show loading indicator if data is being fetched
//                   <tr>
//                     <td colSpan="2" className="text-center">
//                       Loading...
//                     </td>
//                   </tr>
//                 ) : doctor.length > 0 ? ( // Render select options if doctor data is available
//                   <tr>
//                     <td><strong>Select Doctor:</strong></td>
//                     <td>
//                       <select className="form-select select-doctor" aria-label="Select doctor" onChange={(e) => setSelectedDoctor(e.target.value)}>
//                         <option selected>Select a doctor</option>
//                         {doctor.map((doc, index) => (
//                           <option key={index} value={doc.dname}>{doc.dname}</option>
//                         ))}
//                       </select>
//                     </td>
//                   </tr>
//                 ) : (
//                   <tr>
//                     <td colSpan="2" className="text-center">
//                       No doctors available
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//           <div className="text-center">
//             <button type="submit" className="btn btn-primary">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DoctorListing;

// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Table, Dropdown } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import DoctorItem from "../components/UI/DoctorItem";
// //import drItem from "../pages/AddCar";
// import axios from "axios";
// import { createUrl, log } from "../utils/utils";

// const DoctorListing = () => {
//   const [doctor, setDoctor] = useState([]);
//   const [selectedDoctor, setSelectedDoctor] = useState("");
//   console.log(selectedDoctor);
//   useEffect(() => {
//     loadDoctors();
//   }, []);

//   const loadDoctors = () => {
//     const url = createUrl("/doctor");
//     axios
//       .get(url)
//       .then(function (response) {
//         setDoctor(response.data);
//         log(response);
//       })
//       .catch(function (error) {
//         log(error);
//       });
//   };

//   return (
//     <div>
//       <Helmet title="Doctor">
//         <CommonSection title="Doctor List" />
//         <section>
//           <Container>
//             <Table striped>
//               <thead>
//                 <tr>
//                   <th>Doctor Name</th>
//                   <th>Contact Number</th>
//                   <th>Specialization</th>
//                   <th>Day</th>
//                   <th>Time</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {doctor.map((doctor, index) => (
//                   <DoctorItem key={index} doctor={doctor} />
//                 ))}
//               </tbody>
//             </Table>
//           </Container>
//         </section>
//       </Helmet>

//       <div>

//         <hr></hr>
//       </div>

//       <div class="container">
//   <form>
//     <div class="table-responsive">
//       <table class="table table-bordered">
//         <thead>
//           <tr>
//             <th colspan="2" class="text-center"><strong>Fill Appointment Details</strong></th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td><strong>Patient Name:</strong></td>
//             <td><input type="text" class="form-control" placeholder="Enter patient name"/></td>
//           </tr>
//           <tr>
//             <td><strong>Patient Age:</strong></td>
//             <td><input type="text" class="form-control" placeholder="Enter patient age"/></td>
//           </tr>
//           <tr>
//             <td><strong>Patient Contact No:</strong></td>
//             <td><input type="text" class="form-control" placeholder="Enter contact number"/></td>
//           </tr>
//           <tr>
//             <td><strong>Relation with the Patient:</strong></td>
//             <td><input type="text" class="form-control" placeholder="Enter relation"/></td>
//           </tr>
//           <tr>
//           <td><strong>Select Doctor:</strong></td>
//                     <td>
//                       <select className="form-select" aria-label="Select doctor" onChange={(e) => setSelectedDoctor(e.target.value)}>
//                         <option selected>Select a doctor</option>
//                         {doctor.map((doc, index) => (
//                           <option key={index} value={doc.name}>{doc.name}</option>
//                         ))}
//                       </select>
//                     </td>
//                   </tr>
//                 ) : (
//                   <tr>
//                     <td colSpan="2" className="text-center">
//                       No doctors available
//                     </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//     <div class="text-center">
//       <button type="submit" class="btn btn-primary">Submit</button>
//     </div>
//   </form>
// </div>

//     </div>
//   );
// };

// export default DoctorListing;

// const DoctorListing = () => {
//   //const [cars, setCars] = useState([]);
//   const [doctor, setDoctor] = useState([]);

//   useEffect( () => {
//     loadDoctors();
//   }, []);

//   const loadDoctors = () => {
//     const url = createUrl('/doctor');
//     axios.get(url)
//     .then(function (response) {
//       debugger;
//       setDoctor(response.data);
//       log(response);
//     })
//     .catch(function (error) {

//       log(error);
//     })
//     .finally(function () {

//     });
//   }
//   return (
//     <Helmet title="Doctor">
//       <CommonSection title="Doctor List" />
//       <section>
//         <Container>
//           <Row>
//             {/* {doctor.map((doctors) => (
//               <DoctorItem doctors={doctor} />
//             ))} */}
//           {/* {doctor.map((doctor) => (
//               <Col md={6} lg={4} key={doctor.id}>
//                 <DoctorItem doctor={doctor} />
//               </Col>
//             ))} */}

//           {doctor.map((doctors, index) => (
//             <DoctorItem key={index} doctors={doctors} />
//           ))}
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };
