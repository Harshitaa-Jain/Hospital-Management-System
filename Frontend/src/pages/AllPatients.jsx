import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import { createUrl, log } from "../utils/utils";
import { getAllPatients } from "../services/user";
import { updateStatusOfPatient } from "../services/user";
import { Container, Table, Button } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
const AllPatients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    GetAllPatients();
  }, []);

  const GetAllPatients = async () => {
    try {
      const response = await getAllPatients();
      console.log(response);
      setPatients(response);
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during getching patient");
    }
  };

  const RemoveRecord = async (patientId) => {
    try {
      debugger;
      await updateStatusOfPatient(patientId);
      GetAllPatients();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during deleting patient");
    }
  };

  return (
   
    <div>
      <Helmet title="Patients">
        <CommonSection title="OUR ALL PATIENTS" />
        <section>
          <Container>
            <Table striped>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact No</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Blood Group</th>
                  <th>Delete Patient</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => {
                  return (
                    <tr key={patient.id}>
                      <td>{patient.name}</td>
                      <td>{patient.contactNo}</td>
                      <td>{patient.age}</td>
                      <td>{patient.address}</td>
                      <td>{patient.bloodGroup}</td>
                      <td>
                        {
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              RemoveRecord(patient.id);
                            }}
                          >
                            Delete
                          </button>
                        }
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </section>
      </Helmet>
    </div>
  );
};

export default AllPatients;
