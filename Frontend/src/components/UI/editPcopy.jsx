

import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUrl, log } from "../../utils/utils";
import { getPatientById } from "../../services/user";
import axios from 'axios';




const EditPatient = () =>{
    const [patient ,setPatient]=useState([]);
    const navigate = useNavigate();
   // const [message, setMessage] = useState("");

   // const url = "http://localhost:8080"

    const OnTextChanged=(args)=>{
        var copyOfPatient = {...patient};
        copyOfPatient[args.target.name] =    args.target.value;
        setPatient(copyOfPatient)
    }
useEffect ( ()=>{
   getPatient();
},[]);

const getPatient = async () => {
    try {
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

  const UpdateRecord = ()=>
  {
      const patientId = sessionStorage.getItem("userId");
      var updatedUrl = createUrl(`/patient/patientId/${patientId}`)
    //   const body = {
    //     patient
    //   };
      debugger;
      console.log(patientId);
     // console.log(body);
       axios.put(updatedUrl, patient).then((result)=>{
        console.log("Full Response:", result);
         if(result.data!==undefined &&
            result.data > 0)
          {
             // ShowMessage("Record Updated!");
             debugger;
             console.log("hi");
              toast.success("Profile Updated Successfully");
              
              

          }
           else
           {
            toast.error("An error occurred during getting response ");
           }
      });
          
  }

  const Back = ()=>{
    navigate('/patient_profile');
}

// const ShowMessage=(msg)=>{
//     setMessage(msg);
//     setTimeout(() => {
//             setMessage("");
//     }, 2000);
// }

    return (
    <div className='container'>
    <hr></hr>
   <center>
     <div className='table-responsive'>
        <table className='table table-bordered'>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>
                        <input type='text'
                               value={patient.name}
                               name="name"
                               onChange={OnTextChanged}/>
                    </td>
                </tr>

                <tr>
                    <td>Email</td>
                    <td>
                        <input type='text'
                               value={patient.email}
                               name="email"
                               onChange={OnTextChanged}/>
                    </td>
                </tr>

                <tr>
                    <td>Password</td>
                    <td>
                        <input type='text'
                               value={patient.password}
                               name="password"
                               onChange={OnTextChanged}/>
                    </td>
                </tr>
                <tr>
                    <td>Contact No</td>
                    <td>
                        <input type='text'
                               value={patient.contactNo}
                               name="contactNo"
                               onChange={OnTextChanged}/>
                    </td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>
                        <input type='text'
                               value={patient.age}
                               name="age"
                               onChange={OnTextChanged}/>
                    </td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>
                        <input type='text'
                               value={patient.address}
                               name="address"
                               onChange={OnTextChanged}/>
                    </td>
                </tr>
                <tr>
                    <td>Blood Group</td>
                    <td>
                        <input type='text'
                               value={patient.bloodGroup}
                               name="bloodGroup"
                               onChange={OnTextChanged}/>
                    </td>
                </tr>
                    <tr>
                    <td></td>
                    <td>
                         <button 
                                className='btn btn-success' 
                                onClick={UpdateRecord}
                               //disabled={isDisabled}>
                               >
                            Update
                        </button>
                        {" "}
                         <button className='btn btn-primary' 
                                onClick={Back}>
                            Back
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
     </div> 
     </center> 
     </div> )
     
};

export default EditPatient;
