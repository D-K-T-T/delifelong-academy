// import { Link } from "react-router-dom";
// import React from "react";

// function Register() {
//   return (
//     <div classNam="conetainer mt-4">
//       <div className="row">
//         <div className="col-6 offset-3">
//           <div className="card">
//             <h5 className="card-header">User Register</h5>
//             <div className="card-body">
//               <form>
//                 <div className="mb-3">
//                   <label for="exampleInputEmail1" className="form-label">
//                     {" "}
//                     Full Name
//                   </label>
//                   <input type="email" className="form-control" />
//                 </div>
//                 <div className="mb-3">
//                   <label for="exampleInputEmail1" className="form-label">
//                     {" "}
//                     Email
//                   </label>
//                   <input type="email" className="form-control" />
//                 </div>
//                 <div className="mb-3">
//                   <label for="exampleInputPassword1" className="form-label">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="exampleInputPassword1"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label for="exampleInputEmail1" className="form-label">
//                     {" "}
//                     Interests
//                   </label>
//                   <textarea className="form-control"></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                   Login
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Register;
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    interests: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/api/auth/user-register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          window.location.href = "/dashboard";
        } else {
          alert("Registration failed. Please check your information.");
        }
      })
      .catch((error) => console.error("Registration error:", error));
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <h5 className="card-header">User Registration</h5>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    className="form-control"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Interests</label>
                  <textarea
                    name="interests"
                    className="form-control"
                    value={formData.interests}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
              <p className="mt-3">
                Already have an account?{" "}
                <Link to="/login">Login as User</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;