import axios from 'axios';
import { createUrl, log } from '../utils/utils';
import { toast } from 'react-toastify';
import { getAuthorizationHeader } from '../utils/jwtUtil';

export async function registerUser(
  name,
  email,
  password,
  contactNo,
  age,
  bloodGroup,
  address,
  role
) {
  const url = createUrl('/patient/register');
  const body = {
    name,
    email,
    password,
    contactNo,
    age,
    bloodGroup,
    address,
    role
  };

  try {
   // Check if the user already exists by email
    // try {
    //   const getUserResponse = await axios.get(url);
    //   debugger;
    //   if (getUserResponse.data && getUserResponse.data.email === email) {
    //     console.log(getUserResponse.data);
    //     return { email: '' }; // Return an empty object to indicate existing email
    //   }
    //   if(getUserResponse.data && getUserResponse.data.role === 'Patient'){
    //     return {userRoles : 'Patient'}
    //   }
    //   else if (getUserResponse.data && getUserResponse.data.userRoles === 'Admin'){
    //     return {userRoles : 'Admin'}
    //   }
    //   else if (getUserResponse.data && getUserResponse.data.userRoles === 'Doctor'){
    //     return {userRoles : 'Doctor'}
    //   }
    // } catch (getUserEx) {
    //    log('Error fetching user data by email:', getUserEx);
    // }

    // Proceed with registration if the email is not found in the database
    debugger;
    const response = await axios.post(url, body);
    log(response.data);
    return response.data;
  } catch (ex) {
    log('Error registering user:', ex);
    return null;
  }
}

export async function loginUser(email, password) {
  //const url = createUrl('/auth/signin')
  const url = createUrl('/authenticate/login')
  const body = {
    email,
    password,
  }

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response.data)
    debugger; 
    const token = response.data.jwt;
    const userRoles = response.data.userRoles;
    const userId = response.data.userId;
    const isLoggedIn = response.data.isLoggedIn; //true;

    debugger;
    sessionStorage.setItem("token" , token);
    sessionStorage.setItem("userRoles", userRoles);
    sessionStorage.setItem("userId", userId);
    sessionStorage.setItem("isLoggedIn", isLoggedIn);
    console.log(sessionStorage.getItem("userId"));
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function getPatientById(patientId){
  const url = createUrl(`/patient/${patientId}`)
debugger;
  // const body = {
  //   patientId
  // }
  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    })
    log(response.data)
    debugger; 
    const token = response.data.password;
    const userRoles = response.data.role;
    const userId = response.data.id;
    const isLoggedIn = true;//response.data.isLoggedIn;

    sessionStorage.setItem("token" , token);
    sessionStorage.setItem("userRoles",userRoles) ;
    sessionStorage.setItem("userId", userId);
    sessionStorage.setItem("isLoggedIn", isLoggedIn);
    return response.data
  } catch (ex) {
    log(ex)
    return null
  }
}


/////////omkar fun ////

export async function getDoctorById(doctorId){
  const url = createUrl(`/doctor/${doctorId}`)
  debugger;

  try {
    const response = await axios.get(url,{
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    })
    log(response.data)
    debugger; 
    return response.data
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function getAdminById(adminId){

  debugger;
  const url = createUrl(`/admin/${adminId}`)
  debugger;

  try {
    //const response = await axios.get(url)
    const response = await axios.get(url,{}, {
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    });
    
    log(response.data)
    debugger; 
    return response.data
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function getAllPatients(){
  const url = createUrl(`/admin/patientList`)
  debugger;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    })
    log(response.data)
    debugger; 
    return response.data
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function updateStatusOfPatient(patientId){
  const url = createUrl(`/admin/patientstatus/${patientId}`)
  debugger;

  try {
    const response = await axios.put(url,{},{
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    })
    log(response.data)
    if(response.data)
    {
       // ShowMessage("Record Updated!");
       debugger;
       console.log("hi");
        toast.success("Patient Deleted Successfully");
        
        

    }
     else
     {
      toast.error("An error occurred during getting response ");
     }
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function registerDoctor(doctor) {
  const url = createUrl('/admin/doctor');
  // const body = {
  //   doctor
  // };

  try {
   
    debugger;
    const response = await axios.post(url, doctor , {
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    });
    log(response.data);
    return response.data;
  } catch (ex) {
    log('Error registering user:', ex);
    return null;
  }
}

export async function updateStatusOfDoctors(doctorId) {
  const url = createUrl(`/admin/doctorstatus/${doctorId}`)
  debugger;

  try {
    const response = await axios.put(url, {
      headers: {
        Authorization: getAuthorizationHeader(),
      },
    })
    log(response.data)
    if (response.data ) {
      // ShowMessage("Record Updated!");
      debugger;
      console.log("hi");
      toast.success("Doctor Removed Successfully");



    }
    else {
      toast.error("An error occurred during getting response ");
    }
  } catch (ex) {
    log(ex)
    return null
  }
}



