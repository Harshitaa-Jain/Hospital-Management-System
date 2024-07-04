import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUrl, log } from "../../utils/utils";
import { getAdminById } from "../../services/user";
import axios from 'axios';
import { getAuthorizationHeader } from "../../utils/jwtUtil";




const EditAdmin = () =>{
    const [admin ,setAdmin]=useState([]);
    const navigate = useNavigate();
   // const [message, setMessage] = useState("");

   // const url = "http://localhost:8080"

    const OnTextChanged=(args)=>{
        var copyOfAdmin = {...admin};
        copyOfAdmin[args.target.name] =    args.target.value;
        setAdmin(copyOfAdmin)
    }
useEffect ( ()=>{
   getAdmin();
},[]);

const getAdmin = async () => {
    try {
      const adminId = sessionStorage.getItem("userId");
      console.log(adminId);
      const response = await getAdminById(adminId);
      console.log(response);
      setAdmin(response);
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during getching patient");
    }
  };

  const UpdateRecord = ()=>
  {
      const adminId = sessionStorage.getItem("userId");
      var updatedUrl = createUrl(`/admin/adminUpdate/${adminId}`)
      debugger;
      console.log(adminId);
     // console.log(body);

       axios.put(updatedUrl, admin,{
        headers: {
          Authorization: getAuthorizationHeader(),
        },
      }).then((result)=>{
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
    navigate('/admin_profile');
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
                               value={admin.aname}
                               name="aname"
                               onChange={OnTextChanged}/>
                    </td>
                </tr>

                <tr>
                    <td>Email</td>
                    <td>
                        <input type='text'
                               value={admin.email}
                               name="email"
                               onChange={OnTextChanged}/>
                    </td>
                </tr>

                <tr>
                    <td>Password</td>
                    <td>
                        <input type='text'
                               value={admin.password}
                               name="password"
                               onChange={OnTextChanged}/>
                    </td>
                </tr>
                <tr>
                    <td>Contact No</td>
                    <td>
                        <input type='text'
                               value={admin.acontactNo}
                               name="acontactNo"
                               onChange={OnTextChanged}/>
                    </td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>
                        <input type='text'
                               value={admin.aage}
                               name="aage"
                               onChange={OnTextChanged}/>
                    </td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>
                        <input type='text'
                               value={admin.aaddress}
                               name="aaddress"
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

export default EditAdmin;
