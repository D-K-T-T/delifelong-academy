// import { Link } from "react-router-dom";
// import React from "react";

// function Login() {
//   return (
//     <div classNam="conetainer mt-4">
//       <div className="row">
//         <div className="col-6 offset-3">
//           <div className="card">
//             <h5 className="card-header">User Login</h5>
//             <div className="card-body">
//               <form>
//                 <div className="mb-3">
//                   <label for="exampleInputEmail1" className="form-label">
//                     {" "}
//                     Username
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
// export default Login;
// import React, { useState } from "react";

// function Login() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     function handleLogin(event) {
//         event.preventDefault();

//         fetch("http://127.0.0.1:8000/api/auth/login/", {
//             method: "POST",
//             credentials: "include",  // 🔥 Allows session cookies
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded",
//             },
//             body: new URLSearchParams({
//                 username: username,
//                 password: password,
//             }),
//         })
//         .then((response) => {
//             if (response.ok) {
//                 console.log("Login successful!");
//                 window.location.href = "/dashboard";  // Redirect after login
//             } else {
//                 console.log("Login failed!");
//             }
//         });
//     }

//     return (
//         <div className="container mt-4">
//             <div className="row">
//                 <div className="col-6 offset-3">
//                     <div className="card">
//                         <h5 className="card-header">User Login</h5>
//                         <div className="card-body">
//                             <form onSubmit={handleLogin}>
//                                 <div className="mb-3">
//                                     <label className="form-label">Username</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         value={username}
//                                         onChange={(e) => setUsername(e.target.value)}
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label className="form-label">Password</label>
//                                     <input
//                                         type="password"
//                                         className="form-control"
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                     />
//                                 </div>
//                                 <button type="submit" className="btn btn-primary">
//                                     Login
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;
import React, { useState } from "react";

// function TeacherLogin() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleLogin = (event) => {
//         event.preventDefault();

//         fetch("http://127.0.0.1:8000/api/auth/student-login/", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ email, password }),
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             if (data.token) {
//                 localStorage.setItem("token", data.token);
//                 window.location.href = "dashboard";
//             } else {
//                 alert("Login failed. Check your credentials.");
//             }
//         })
//         .catch(error => console.error("Login error:", error));
//     };

//     return (
//         <div className="container mt-4">
//             <div className="row">
//                 <div className="col-6 offset-3">
//                     <div className="card">
//                         <h5 className="card-header">Teacher Login/Register</h5>
//                         <div className="card-body">
//                             <form onSubmit={handleLogin}>
//                                 <div className="mb-3">
//                                     <label className="form-label">Email</label>
//                                     <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label className="form-label">Password</label>
//                                     <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
//                                 </div>
//                                 <button type="submit" className="btn btn-primary">Login</button>
//                             </form>
//                             <p className="mt-3">Don't have an account? <a href="/teacher-register">Register as Teacher</a></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default TeacherLogin;
import { Link } from "react-router-dom";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        fetch("http://127.0.0.1:8000/api/auth/user-login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.token) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user_id", data.user_id);
                localStorage.setItem("username", data.username);
                window.location.href = "/dashboard";
            } else {
                alert("Login failed. Check your credentials.");
            }
        })
        .catch(error => console.error("Login error:", error));
    };
    
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Login</h5>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)}
                                        required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)}
                                        required 
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                            <div className="mt-3">
                                <p>Don't have an account? Choose your registration type:</p>
                                <Link to="/register" className="btn btn-outline-primary me-2">Register</Link>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
