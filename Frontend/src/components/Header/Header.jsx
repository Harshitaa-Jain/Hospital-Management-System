import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../styles/header.css";
import logo from "../../assets/all-images/service-img/logo.png";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },

  {
    path: "/login",
    display: "Appointments",
  },

  {
    path: "/about",
    display: "Services",
  },

  {
    path: "/finance",
    display: "BMI",
  },

  {
    path: "/about",
    display: "About",
  },
  {
    path: "/contact",
    display: "Contact",
  },

  // {
  //   path: "/patientServices",
  //   display: "My Profile",
  // }
];

const Header = () => {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const handleLogin = () => {
    // Perform login actions
    setIsLoggedIn(true);
    window.location.reload();
  };

  const handleLogout = () => {
    // Perform logout actions
    setIsLoggedIn(false);
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userRoles");
    navigate("/");
  };

  setTimeout(() => {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
  }, 1000);

  useEffect(() => {
    const sessionStatus = sessionStorage.getItem("isLoggedIn");
    if (sessionStatus === "true") {
      debugger;
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +918484807827
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {isLoggedIn ? (
                  <button
                    className="btn btn-outline-primary"
                    onClick={handleLogout}
                  >
                    <i className="ri-login-circle-line"></i> Logout
                  </button>
                ) : (
                  <>
                    <Link to="/login" className="btn btn-outline-primary">
                      <i
                        className="ri-login-circle-line"
                        onClick={handleLogin}
                      ></i>{" "}
                      Login
                    </Link>
                    <Link to="/register" className="btn btn-outline-primary">
                      <i class="ri-user-line"></i> Register
                    </Link>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}

<div className="header__middle" style={{ padding: '5px 0' }}>
  <Container>
    <Row className="align-items-center">
      <Col lg="4" md="3" sm="4">
        <div className="logo">
          <h1>
            <Link to="/home" className="d-flex align-items-center gap-2">
              <img src={logo} alt="logo" height="80px" width="200px" />
            </Link>
          </h1>
        </div>
      </Col>
      <Col lg="3" md="3" sm="4">
        <div className="header__location d-flex align-items-center gap-2">
          <span>
            <i class="ri-earth-line"></i>
          </span>
          <div className="header__location-content">
            <h4>India</h4>
            <h6>Pune, Hinjewadi</h6>
          </div>
        </div>
      </Col>
      <Col lg="3" md="3" sm="4">
        <div className="header__location d-flex align-items-center gap-2">
          <span>
            <i class="ri-phone-line"></i>
          </span>
          <div className="header__location-content">
            <h4>EMERGENCY</h4>
            <h6>+91 20 2621 7305</h6>
            <h6>+91 20 2621 2563</h6>
          </div>
        </div>
      </Col>
      <Col lg="2" md="3" sm="0" className="d-flex align-items-center justify-content-end">
        <button className="header__btn btn">
          <Link to="/login">
            <i class="ri-phone-line"></i> Book Appointment
          </Link>
        </button>
      </Col>
    </Row>
  </Container>
</div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}

                {isLoggedIn &&
                  sessionStorage.getItem("userRoles") === "ROLE_PATIENT" && (
                    <NavLink
                      to="/PatientServices"
                      className={(navClass) =>
                        navClass.isActive
                          ? "nav__active nav__item"
                          : "nav__item"
                      }
                    >
                      Profile
                    </NavLink>
                  )}

                {isLoggedIn &&
                  sessionStorage.getItem("userRoles") === "ROLE_ADMIN" && (
                    <NavLink
                      to="/AdminServices"
                      className={(navClass) =>
                        navClass.isActive
                          ? "nav__active nav__item"
                          : "nav__item"
                      }
                    >
                      Profile
                    </NavLink>
                  )}

                {isLoggedIn &&
                  sessionStorage.getItem("userRoles") === "ROLE_DOCTOR" && (
                    <NavLink
                      to="/DoctorServices"
                      className={(navClass) =>
                        navClass.isActive
                          ? "nav__active nav__item"
                          : "nav__item"
                      }
                    >
                      Profile
                    </NavLink>
                  )}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;

// import React, { useEffect, useRef, useState } from "react";

// import { Container, Row, Col } from "reactstrap";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import "../../styles/header.css";
// import logo from "../../assets/all-images/service-img/logo.png";
// const navLinks = [
//   {
//     path: "/home",
//     display: "Home",
//   },
//   {
//     path: "/about",
//     display: "About",
//   },
//   {
//     path: "/cars",
//     display: "Appointments",
//   },

//   {
//     path: "/services",
//     display: "Services",
//   },

//   {
//     path: "/finance",
//     display: "BMI",
//   },

//   {
//     path: "/contact",
//     display: "Contact",
//   },
// ];

// const Header = () => {
//   const navigate = useNavigate();
//   const menuRef = useRef(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

//   const handleLogin = () => {
//     // Perform login actions
//     debugger;
//     setIsLoggedIn(true);
//     //setIsLoggedIn(false);
//     window.location.reload();
//   };

//   const handleLogout = () => {
//     // Perform logout actions
//     setIsLoggedIn(false);
//     sessionStorage.removeItem("isLoggedIn");
//     sessionStorage.removeItem("token");
//     sessionStorage.removeItem("userId");
//     sessionStorage.removeItem("userRoles");
//     navigate("/");
//   };

//   useEffect(() => {
//     debugger;
//     const sessionStatus = sessionStorage.getItem("isLoggedIn");
//     if (sessionStatus === "true") {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   return (
//     <header className="header">
//       {/* ============ header top ============ */}
//       <div className="header__top">
//         <Container>
//           <Row>
//             <Col lg="6" md="6" sm="6">
//               <div className="header__top__left">
//                 <span>Need Help?</span>
//                 <span className="header__top__help">
//                   <i class="ri-phone-fill"></i> +918484807827
//                 </span>
//               </div>
//             </Col>

//             <Col lg="6" md="6" sm="6">
//               <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
//                 {/* <Link to="#" className=" d-flex align-items-center gap-1">
//                   <i class="ri-login-circle-line"></i> Login
//                 </Link> */}
//                 {isLoggedIn ? (
//                   <Link to="/login" className="btn btn-outline-primary">
//                     <i
//                       className="ri-login-circle-line"
//                       onClick={handleLogin}
//                     ></i>{" "}
//                     Login
//                   </Link>
//                 ) : (
//                   <button
//                     className="btn btn-outline-primary"
//                     onClick={handleLogout}
//                   >
//                     <i className="ri-login-circle-line"></i> Logout
//                   </button>
//                 )}

//                 {/* <Link to="#" className=" d-flex align-items-center gap-1">
//                   <i class="ri-user-line"></i> Register
//                 </Link> */}
//                 <Link to="/register" className="btn btn-outline-primary">
//                   <i class="ri-user-line"></i> Register
//                 </Link>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* =============== header middle =========== */}
//       <div className="header__middle">
//         <Container>
//           <Row>
//             <Col lg="4" md="3" sm="4">
//               <div className="logo">
//                 <h1>
//                   <Link to="/home" className=" d-flex align-items-center gap-2">
//                     <i class="ri-hospital-line"></i>
//                     <div className="header__location-content">
//                      <h2></h2>
//                      <h2></h2>
//                       <h1 >Sunbeam Care</h1>
//                       <h5 className="mt-l-3" > _______ Every Lives Matters !</h5>
//                     </div>
//                   </Link>
//                 </h1>
//               </div>
//             </Col>

//             <Col lg="3" md="3" sm="4">
//               <div className="header__location d-flex align-items-center gap-2">
//                 <span>
//                   <i class="ri-earth-line"></i>
//                 </span>
//                 <div className="header__location-content">
//                   <h4>India</h4>
//                   <h6>Pune, Hinjewadi</h6>
//                 </div>
//               </div>
//             </Col>

//             <Col lg="3" md="3" sm="4">
//               <div className="header__location d-flex align-items-center gap-2">
//                 <span>
//                   <i class="ri-phone-line"></i>
//                 </span>
//                 <div className="header__location-content">
//                   <h4>EMERGENCY</h4>
//                   <h6>+91 20 2621 7305</h6> <h6>+91 20 2621 2563</h6>
//                 </div>
//               </div>
//             </Col>

//             <Col
//               lg="2"
//               md="3"
//               sm="0"
//               className=" d-flex align-items-center justify-content-end "
//             >
//               <button className="header__btn btn ">
//                 <Link to="/login">
//                   <i class="ri-phone-line"></i> Book Appointment
//                 </Link>
//               </button>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* ========== main navigation =========== */}

//       <div className="main__navbar">
//         <Container>
//           <div className="navigation__wrapper d-flex align-items-center justify-content-between">
//             <span className="mobile__menu">
//               <i class="ri-menu-line" onClick={toggleMenu}></i>
//             </span>

//             <div className="navigation" ref={menuRef} onClick={toggleMenu}>
//               <div className="menu">
//                 {navLinks.map((item, index) => (
//                   <NavLink
//                     to={item.path}
//                     className={(navClass) =>
//                       navClass.isActive ? "nav__active nav__item" : "nav__item"
//                     }
//                     key={index}
//                   >
//                     {item.display}
//                   </NavLink>
//                 ))}
//               </div>
//             </div>

//             <div className="nav__right">
//               <div className="search__box">
//                 <input type="text" placeholder="Search" />
//                 <span>
//                   <i class="ri-search-line"></i>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </header>
//   );
// };

// export default Header;
