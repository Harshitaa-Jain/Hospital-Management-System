import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { createUrl, log } from "../../utils/utils";
import { getAdminById } from "../../services/user";
import { Link } from 'react-router-dom';
import { useEffect } from "react";

const ServiceBook1 = () => {
  const { id, name } = useParams();
  // const [description, setDescription] = useState("");
  // const [carId, setCarId] = useState("");
  const [admin, setAdmin] = useState([]);
  const navigate = useNavigate();

  const services = [
    { id: 1, option: 'Edit Profile' }
  ];

  useEffect(() => {
    getAdmin();
  }, [])
  const getAdmin= async () => {
    try {
      const adminId = sessionStorage.getItem("userId");
      console.log(adminId);
      const response = await getAdminById(adminId);
      console.log(response);
      setAdmin(response);
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during getching admin");
    }
  };

  const Back = ()=>{
    navigate('/AdminServices');
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
                      <td>{admin.aname} </td>
                    </tr>
                    <tr>
                      <td>Email: </td>
                      <td>{admin.email}</td>
                    </tr>
                    <tr>
                      <td>Password:</td>
                      <td>{admin.password} </td>
                    </tr>
                    <tr>
                      <td>Contact No: </td>
                      <td>{admin.acontactNo}</td>
                    </tr>
                    <tr>
                      <td>Age: </td>
                      <td>{admin.aage}</td>
                    </tr>
                    <tr>
                      <td>Address: </td>
                      <td>{admin.aaddress}</td>
                    </tr>

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
                    pathname: `/adminEdit/${sessionStorage.getItem("userId")}`,
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
