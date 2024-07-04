import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser as loginUserApi } from '../services/user';

function LoginUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const loginUser = async () => {
    if (email === '' || password === '') {
      toast.error('Please enter email and password');
      return;
    }

    try {
      const response = await loginUserApi(email, password);

      debugger;
        if (response.data.isLoggedIn) {
          const token = response.data.jwt;
          const userRoles = response.data.userRoles;
          const userId = response.data.userId;
          // sessionStorage.setItem("token", token);
          // sessionStorage.setItem("userRole", userRoles);
          // sessionStorage.setItem("userId", userId);
          // sessionStorage.setItem("isLoggedIn", true);
          // console.log(sessionStorage.getItem("token") + " " + sessionStorage.getItem("userRole") + " " + sessionStorage.getItem("userId") + sessionStorage.getItem("isLoggedIn"));
       
          
          // Check if userRoles exist in the response and handle navigation based on roles
         debugger;
          if (userRoles === 'ROLE_PATIENT') {
            navigate('/PatientServices'); // Navigate to home page for users
           // window.location.reload();
            toast.success('patient login Successful')
          } else if (userRoles === 'ROLE_ADMIN') {
            navigate('/AdminServices'); // Navigate to admin page for admins
            //window.location.reload();
            toast.success('Welcome Admin .. Sab Tumhara Hai...you are admin')
          }    else if (userRoles === 'ROLE_DOCTOR') {
            navigate('/DoctorServices');
            toast.success('Doctor Login Successfull') 
           // window.location.reload();
          }
           else {
            toast.error('Invalid role');
          }
        } else {
          toast.error('Invalid email or password');
        }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred during login');
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: 10 }}>Login</h1>

      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                type='password'
                className='form-control'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className='mb-3'>
              <div className='mb-3'>
                Don't have an account? <Link to='/register'>Register here</Link>
              </div>
              <button onClick={loginUser} className='btn btn-success'>
                Login
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  );
}

export default LoginUser;
