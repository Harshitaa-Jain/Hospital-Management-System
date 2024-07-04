import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import DoctorItem from "../components/UI/DoctorItem";
import axios from "axios";
import { createUrl, log } from "../utils/utils";
import "../styles/header.css";
import { toast } from "react-toastify";
import { updateStatusOfDoctors }  from "../services/user";
import { getAuthorizationHeader } from "../utils/jwtUtil";
//import DeleteButton from "../components/UI/DeleteButton";

const AllDoctors = () => {

    const [doctor, setDoctor] = useState([]);
    const [loading, setLoading] = useState(true);


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

    const RemoveRecord = async (doctorId)=>{

        try{
            await updateStatusOfDoctors(doctorId);
            loadDoctors();
        
        }
         catch (error) {
            console.error(error);
            toast.error("An error occurred during deleting doctor");
        }
    };


    return (
        <div>
            <Helmet title="Doctor">
                <CommonSection title="OUR ALL DOCTORS" />
                <section>
                    <Container>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Doctor Name</th>
                                    <th>Contact Number</th>
                                    <th>Specialization</th>
                                    <th>Day</th>
                                    <th></th>
                                    <th>Remove Doctor</th>
                                    {/* <th>Time</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {doctor.map((doc, index) => (
                                    <DoctorItem key={index} doctor={doc}  onDelete={RemoveRecord}/>
                                   
                                ))}
                               
                            </tbody>
                        </Table>
                    </Container>
                </section>
            </Helmet>
        </div>



    )







};

export default AllDoctors;