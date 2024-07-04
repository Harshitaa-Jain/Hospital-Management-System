import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerDoctor as registerDoctor } from "../../services/user";
//import { registerDoctor } from "../services/user";


function RegisterUser() {

  const [doctor, setDoctor] = useState({
    name: '',
    email: '',
    password: '',
    contactNo: '',
    specialisation: '',
    role:'ROLE_DOCTOR',
    schedule: [{ day: '', time: '' }]  // Initialize with an array containing an initial schedule object
  });

  const DaysDropdown = ({ value, onChange }) => {
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

  const registerUser = async () => {
    // Validation logic remains the same...

    // call register api
    const response = await registerDoctor(doctor);

    // parse the response
    if (response && response.email === "") {
      toast.info("Registration with this email is already done.");
    } else if (response && response.email) {
      toast.success("Successfully registered a new Doctor");
      navigate("/login");
      
    } else {
      toast.error("Your Registration is already Done Please Log-In");
    }
  };

  const OnTextChanged = (args) => {
    var copyOfDoctor = { ...doctor };
    const { name, value } = args.target;

    if (name.startsWith("schedule")) {
      const [scheduleIndex, scheduleField] = name.match(/\[(\d+)\]\.(\w+)/).slice(1);
      copyOfDoctor.schedule[scheduleIndex][scheduleField] = value;
    } else {
      copyOfDoctor[name] = value;
    }

    setDoctor(copyOfDoctor);
  };



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
                    onClick={registerUser}
                  >
                    Register
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
    </div>)


};

export default RegisterUser;
