// import React from "react";
// import { Col } from "reactstrap";
// import { Link, useNavigate } from "react-router-dom";
// import "../../styles/car-item.css";
// import { createUrl } from "../../utils/utils";
// import { Button } from "reactstrap";



//   return (
//     <tr>
//       <td>{doctor.name}</td>
    
//       <td>{doctor.contactNo}</td>
//       <td>{doctor.specialisation}</td>
//       <td>
//         <ul>
//           {doctor.schedule.map((schedule, index) => (
//             <li key={index}>{schedule.day}</li>
//           ))}
//         </ul>
//       </td>
//       <td>
//         <ul>
//           {doctor.schedule.map((schedule, index) => (
//             <li key={index}>{schedule.time}</li>
//           ))}
//         </ul>
//       </td>
      // <td>
      //   <Button color="danger" onClick={handleDelete}>
      //     Delete
      //   </Button>
      // </td>
//     </tr>
//   );
// };
// export default DoctorItem;


////

import React from "react";
import { Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/car-item.css";
import { createUrl } from "../../utils/utils";
import { Button } from "reactstrap";

//const DoctorItem = ({ doctor ,onDelete }) => {
 

const DoctorItem = ({ doctor,onDelete }) => {

  const handleDelete = () => {
    onDelete(doctor.id); // Pass the doctorId to the onDelete function
  };
  return (
    <tr>
      <td>{doctor.name}</td>
    
      <td>{doctor.contactNo}</td>
      <td>{doctor.specialisation}</td>
      <td>
        <ul>
          {doctor.schedule.map((schedule, index) => (
            <li key={index}>{schedule.day}</li>
          ))}
        </ul>
      </td>
      <td>
        <ul>
          {doctor.schedule.map((schedule, index) => (
            <li key={index}>{schedule.time}</li>
          ))}
        </ul>
      </td>
      {sessionStorage.getItem("userRoles") === "ROLE_ADMIN" && (
        <>
          <td>
          <td>
        <Button color="danger" onClick={handleDelete}>
          Delete
        </Button>
      </td>
            </td>
        </>
      )}
    </tr>
  );
};
export default DoctorItem;
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


        {/* {doctors.map((doctor) => (
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
        </tbody> */}
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


        {/* {doctors.map((doctor) => (
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
        </tbody> */}
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


        {/* {doctors.map((doctor) => (
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
        </tbody> */}