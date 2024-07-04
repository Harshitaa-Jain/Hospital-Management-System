import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getPatientById } from "../../services/user";
import axios from "axios";
import { createUrl, log } from "../../utils/utils";

const EditPatient = () => {
  const [patient, setPatient] = useState([]);
  const navigate = useNavigate();
  // const [message, setMessage] = useState("");

  // const url = "http://localhost:8080"

  const OnTextChanged = (args) => {
    debugger;
    var copyOfPatient = { ...patient };
    copyOfPatient[args.target.name] = args.target.value;
    setPatient(copyOfPatient);
    console.log(copyOfPatient);
  };
  useEffect(() => {
    getPatient();
  }, []);

  const getPatient = async () => {
    try {
      debugger;
      const patientId = sessionStorage.getItem("userId");
      console.log(patientId);
      const response = await getPatientById(patientId);
      console.log(response);
      setPatient(response);
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during getching patient");
    }
  };

  const UpdateRecord = () => {
    const patientId = sessionStorage.getItem("userId");
    var updatedUrl = createUrl(`/patient/patientId/${patientId}`);
    //   const body = {
    //     patient
    //   };
    debugger;
    console.log(patientId);
    // console.log(body);
    axios.put(updatedUrl, patient).then((result) => {
      console.log("Full Response:", result);
      //  if(result.data!==undefined &&
      //     result.data > 0)
      if (result.data) {
        // ShowMessage("Record Updated!");
        debugger;
        console.log("hi");
        toast.success("Profile Updated Successfully");
      } else {
        toast.error("An error occurred during getting response ");
      }
    });
  };
  const Back = () => {
    navigate("/patient_profile");
  };

  return (
    <div className="container">
      <hr />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">
                {patient.name} edit your profile here
              </h2>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={patient.name || ""}
                  onChange={OnTextChanged}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={patient.email || ""}
                  onChange={OnTextChanged}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={patient.password || ""}
                  onChange={OnTextChanged}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contactNo" className="form-label">
                  Contact No
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contactNo"
                  name="contactNo"
                  value={patient.contactNo || ""}
                  onChange={OnTextChanged}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  name="age"
                  value={patient.age || ""}
                  onChange={OnTextChanged}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={patient.address || ""}
                  onChange={OnTextChanged}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bloodGroup" className="form-label">
                  Blood Group
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bloodGroup"
                  name="bloodGroup"
                  value={patient.bloodGroup || ""}
                  onChange={OnTextChanged}
                />
              </div>
              <div className="mb-3">
                <button
                  type="button"
                  className="btn btn-success me-2"
                  onClick={UpdateRecord}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={Back}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPatient;

// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams, Navigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { createUrl, log } from "../../utils/utils";
// import { getPatientById } from "../../services/user";
// import axios from 'axios';

// const EditPatient = () =>{
//     const [patient ,setPatient]=useState([]);
//     const navigate = useNavigate();
//    // const [message, setMessage] = useState("");

//    // const url = "http://localhost:8080"

//     const OnTextChanged=(args)=>{
//         var copyOfPatient = {...patient};
//         copyOfPatient[args.target.name] =    args.target.value;
//         setPatient(copyOfPatient)
//     }
// useEffect ( ()=>{
//    getPatient();
// },[]);

// const getPatient = async () => {
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

//   const UpdateRecord = ()=>
//   {
//       const patientId = sessionStorage.getItem("userId");
//       var updatedUrl = createUrl(`/patient/patientId/${patientId}`)
//     //   const body = {
//     //     patient
//     //   };
//       debugger;
//       console.log(patientId);
//      // console.log(body);
//        axios.put(updatedUrl, patient).then((result)=>{
//         console.log("Full Response:", result);
//          if(result.data!==undefined &&
//             result.data > 0)
//           {
//              // ShowMessage("Record Updated!");
//              debugger;
//              console.log("hi");
//               toast.success("Profile Updated Successfully");

//           }
//            else
//            {
//             toast.error("An error occurred during getting response ");
//            }
//       });

//   }

//   const Back = ()=>{
//     navigate('/patient_profile');
// }

// // const ShowMessage=(msg)=>{
// //     setMessage(msg);
// //     setTimeout(() => {
// //             setMessage("");
// //     }, 2000);
// // }

//     return (
//     <div className='container'>
//     <hr></hr>
//    <center>
//      <div className='table-responsive'>
//         <table className='table table-bordered'>
//             <tbody>
//                 <tr>
//                     <td>Name</td>
//                     <td>
//                         <input type='text'
//                                value={patient.name}
//                                name="name"
//                                onChange={OnTextChanged}/>
//                     </td>
//                 </tr>

//                 <tr>
//                     <td>Email</td>
//                     <td>
//                         <input type='text'
//                                value={patient.email}
//                                name="email"
//                                onChange={OnTextChanged}/>
//                     </td>
//                 </tr>

//                 <tr>
//                     <td>Password</td>
//                     <td>
//                         <input type='text'
//                                value={patient.password}
//                                name="password"
//                                onChange={OnTextChanged}/>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>Contact No</td>
//                     <td>
//                         <input type='text'
//                                value={patient.contactNo}
//                                name="contactNo"
//                                onChange={OnTextChanged}/>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>Age</td>
//                     <td>
//                         <input type='text'
//                                value={patient.age}
//                                name="age"
//                                onChange={OnTextChanged}/>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>Address</td>
//                     <td>
//                         <input type='text'
//                                value={patient.address}
//                                name="address"
//                                onChange={OnTextChanged}/>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>Blood Group</td>
//                     <td>
//                         <input type='text'
//                                value={patient.bloodGroup}
//                                name="bloodGroup"
//                                onChange={OnTextChanged}/>
//                     </td>
//                 </tr>
//                     <tr>
//                     <td></td>
//                     <td>
//                          <button
//                                 className='btn btn-success'
//                                 onClick={UpdateRecord}
//                                //disabled={isDisabled}>
//                                >
//                             Update
//                         </button>
//                         {" "}
//                          <button className='btn btn-primary'
//                                 onClick={Back}>
//                             Back
//                         </button>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//      </div>
//      </center>
//      </div> )

// };

// export default EditPatient;
