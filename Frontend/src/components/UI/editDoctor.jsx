import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUrl, log } from "../../utils/utils";
import { getDoctorById } from "../../services/user";
import axios from 'axios';
import { getAuthorizationHeader } from "../../utils/jwtUtil";


//old code 

const EditDoctor = () => {
    ////// New code

    const [doctor, setDoctor] = useState({
        name: '',
        email: '',
        password: '',
        contactNo: '',
        specialisation: '',
        schedule: [

        ] // Initialize with an empty array
    });

    const DaysDropdown = ({ value, onChange }) => {
        // Define an array of days
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

        return (
            <select
                value={value}
                name="day"
                onChange={onChange}
            >
                <option value="">Choose a day</option>
                {days.map((day, index) => (
                    <option key={index} value={day}>{day}</option>
                ))}
            </select>
        );
    };

    const navigate = useNavigate(); 
  
    const getDoctor = async () => {
        try {
            const doctorId = sessionStorage.getItem("userId");
            const response = await getDoctorById(doctorId);
            setDoctor({
                ...response,
                schedule: response.schedule || [],  // Ensure schedule is initialized
            });
        } catch (error) {
            console.error(error);
            toast.error("An error occurred during fetching doctor");
        }
    };

    const OnTextChanged = (args) => {
        var copyOfDoctor = { ...doctor };
        const { name, value } = args.target;

        // If the changed field is part of the schedule, update it in the schedule array
        if (name.startsWith("schedule")) {
            const [scheduleIndex, scheduleField] = name.match(/\[(\d+)\]\.(\w+)/).slice(1);
            copyOfDoctor.schedule[scheduleIndex][scheduleField] = value;
        } else {
            // Otherwise, update the field in the main doctor object
            copyOfDoctor[name] = value;
        }

        setDoctor(copyOfDoctor);
    }



    useEffect(() => {
        getDoctor();
    }, []);



    const UpdateRecord = () => {

       // const navigate = useNavigate(); 
        const doctorId = sessionStorage.getItem("userId");
        var updatedUrl = createUrl(`/doctor/update/${doctorId}`)

        debugger;
        console.log(doctorId);
        // console.log(body);
        axios.put(updatedUrl, doctor,{
            headers: {
              Authorization: getAuthorizationHeader(),
            },
          }).then((result) => {
            debugger;
            console.log("Full Response:", result);
            if (result.data) {
                debugger;
                console.log("hi");
                toast.success("Profile Updated Successfully");
                navigate("/doctor_profile/:id/:name")
            }
            else {
                toast.error("An error occurred during getting response ");
            }
        });

    }

    const Back = () => {
        navigate('/doctor_profile');
    }




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
                                        value={doctor.name}
                                        name="name"
                                        onChange={OnTextChanged} />
                                </td>
                            </tr>

                            <tr>
                                <td>Email</td>
                                <td>
                                    <input type='text'
                                        value={doctor.email}
                                        name="email"
                                        onChange={OnTextChanged} />
                                </td>
                            </tr>

                            <tr>
                                <td>Password</td>
                                <td>
                                    <input type='text'
                                        value={doctor.password}
                                        name="password"
                                        onChange={OnTextChanged} />
                                </td>
                            </tr>
                            <tr>
                                <td>Contact No</td>
                                <td>
                                    <input type='text'
                                        value={doctor.contactNo}
                                        name="contactNo"
                                        onChange={OnTextChanged} />
                                </td>
                            </tr>
                            <tr>
                                <td>Specialisation</td>
                                <td>
                                    <input type='text'
                                        value={doctor.specialisation}
                                        name="specialisation"
                                        onChange={OnTextChanged} />
                                </td>
                            </tr>
                            <tr>
                                <td> Schedule:</td>
                                <td>
                                    {doctor.schedule && doctor.schedule.map((doc, index) => (
                                        <tr key={index}>
                                            {/* Use the dropdown directly in the onChange attribute */}
                                            <td>
                                                <DaysDropdown
                                                    value={doctor.schedule[index].day || ''}
                                                    onChange={(e) => {
                                                        const { value } = e.target;
                                                        setDoctor(prevDoctor => {
                                                            const updatedSchedule = [...prevDoctor.schedule];
                                                            updatedSchedule[index] = { ...updatedSchedule[index], day: value };
                                                            return { ...prevDoctor, schedule: updatedSchedule };
                                                        });
                                                    }}
                                                />
                                            </td>
                                            {/* Add other cells for other schedule properties if needed */}
                                        </tr>
                                    ))}
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
        </div>)


};

export default EditDoctor;
