// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const createNavItem = (text, href, isActive = false, isDisabled = false) => (
//     <li className="nav-item">
//       <a
//         className={`nav-link ${isActive ? "active" : ""} ${
//           isDisabled ? "disabled" : ""
//         }`}
//         href={href}
//         aria-current={isActive ? "page" : undefined}
//         aria-disabled={isDisabled ? "true" : undefined}
//         tabIndex={isDisabled ? "-1" : undefined}
//       >
//         {text}
//       </a>
//     </li>
//   );

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           DeLifelongAcademy
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             {createNavItem("Home", "/", false, false, true)}
//             {createNavItem("Courses", "#")}
//             {createNavItem("Teachers", "#")}
//             <li class="nav-item dropdown">
//               <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 Dropdown
//               </a>
//               <ul className="dropdown-menu">
//                 <li><a className="dropdown-item" href="#">Action</a></li>
//                 <li><a className="dropdown-item" href="#">Another action</a></li>
//                 <li><hr className="dropdown-divider"></li>
//                 <li><a className="dropdown-item" href="#">Something else here</a></li>
//               </ul>
//             </li>
//             {createNavItem("User Login", "/user-login", false, false, true)}
//             {createNavItem(
//               "User Register",
//               "/user-register",
//               false,
//               false,
//               true
//             )}
//             {createNavItem("About Us", "/about", false, false, true)}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">DeLifelongAcademy</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              <a className="nav-link" href="#">Courses</a>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
                data-bs-toggle="dropdown" aria-expanded="false">
                 Teacher
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/teacher-login">Login</Link></li>
                  <li><Link className="dropdown-item" to="/teacher-register">Register</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/teacher-dashboard">Dashboard</Link></li>
                  <li><Link className="dropdown-item" to="/teacher-logout">Logout</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
                data-bs-toggle="dropdown" aria-expanded="false">
                User
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/user-login">Login</Link></li>
                  <li><Link className="dropdown-item" to="/user-register">Register</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/user-dashboard">Dashboard</Link></li>
                  <li><Link className="dropdown-item" to="/user-logout">Logout</Link></li>
                </ul>
                {/* <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li> */}
              </li>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Header;



