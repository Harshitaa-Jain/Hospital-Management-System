import React, { useEffect, useState } from "react";
import { Container, Row, Col,Table } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import DoctorItem from "../components/UI/DoctorItem";
//import drItem from "../pages/AddCar";
import axios from "axios";
import { createUrl, log } from '../utils/utils';



const DoctorListing = () => {
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = () => {
    const url = createUrl("/doctor");
    axios
      .get(url)
      .then(function (response) {
        setDoctor(response.data);
        log(response);
      })
      .catch(function (error) {
        log(error);
      });
  };

  return (
    <Helmet title="Doctor">
      <CommonSection title="Doctor List" />
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
              {doctor.map((doctor, index) => (
                <DoctorItem key={index} doctor={doctor} />
              ))}
            </tbody>
          </Table>
        </Container>
      </section>
    </Helmet>
  );
};
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

export default DoctorListing;
