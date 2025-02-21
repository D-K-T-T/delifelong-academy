// // import Main from "./components/main";
// // import React from "react";

// // function App() {
// //   return (
// //     <div className="App">
// //       <Main />
// //     </div>
// //   );
// // }
// // import React, { useEffect } from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import { checkLoginStatus } from "./components/auth";
// // import Home from "./components/home";
// // import Register from "./components/User/register"; // New combined registration page
// // import TeacherDashboard from "./components/Teacher/teacherDashboard";
// // import Dashboard from "./components/User/dashboard";
// // import RegisterChoice from "./components/registerChoice";

// // function App() {
// //     const [isAuthenticated, setIsAuthenticated] = React.useState(false);

// //     useEffect(() => {
// //         fetch("http://127.0.0.1:8000/api/auth/status/", {
// //             method: "GET",
// //             credentials: "include",
// //         })
// //         .then((response) => response.json())
// //         .then((data) => {
// //             setIsAuthenticated(data.authenticated);
// //         })
// //         .catch(error => {
// //             console.error("Error checking login status:", error);
// //             setIsAuthenticated(false);
// //         });
// //     }, []);

// //     return (
        
// //             <Routes>
// //                 {/* If not authenticated, go to Register/Login page */}
// //                 <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/register" />} />
// //                 <Route path="/register" element={<RegisterChoice />} />
// //                 <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
// //                 <Route path="/dashboard" element={<Dashboard />} />
// //             </Routes>
       
// //     );
// // }

// // export default App;

// // import React, { useState, useEffect } from "react";
// // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // import Home from "./components/home";
// // import Register from "./components/User/register";
// // import TeacherDashboard from "./components/Teacher/teacherDashboard";
// // import Dashboard from "./components/User/dashboard";
// // import RegisterChoice from "./components/registerChoice";
// // import TeacherLogin from "./components/Teacher/teacherLogin";
// // import TeacherRegister from "./components/Teacher/teacherResgister";
// // import Login from "./components/User/login";

// // function App() {
// //     const [isAuthenticated, setIsAuthenticated] = useState(false);

// //     useEffect(() => {
// //         fetch("http://127.0.0.1:8000/api/auth/status/", {
// //             method: "GET",
// //             credentials: "include",
// //         })
// //         .then((response) => response.json())
// //         .then((data) => {
// //             setIsAuthenticated(data.authenticated);
// //         })
// //         .catch(error => {
// //             console.error("Error checking login status:", error);
// //             setIsAuthenticated(false);
// //         });
// //     }, []);

// //     return (
        
// //             <Routes>
// //                 <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/register" />} />
// //                 <Route path="/register" element={<RegisterChoice />} />
// //                 <Route path="/user-login" element={<Login />} />
// //                 <Route path="/user-register" element={<Register />} />
// //                 <Route path="/teacher-login" element={<TeacherLogin />} />
// //                 <Route path="/teacher-register" element={<TeacherRegister />} />
// //                 <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
// //                 <Route path="/dashboard" element={<Dashboard />} />
// //             </Routes>
       
// //     );
// // }

// // export default App;
// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./components/home";
// import Register from "./components/User/register";
// import TeacherDashboard from "./components/Teacher/teacherDashboard";
// import Dashboard from "./components/User/dashboard";
// import RegisterChoice from "./components/registerChoice";
// import TeacherLogin from "./components/Teacher/teacherLogin";
// import TeacherRegister from "./components/Teacher/teacherResgister";
// import Login from "./components/User/login";

// function App() {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect(() => {
//         fetch("http://127.0.0.1:8000/api/auth/status/", {
//             method: "GET",
//             credentials: 'include',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             }
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             setIsAuthenticated(data.authenticated);
//         })
//         .catch(error => {
//             console.error("Error checking login status:", error);
//             setIsAuthenticated(false);
//         });
//     }, []);

//     return (
//         <div className="App">
//             <Routes>
//                 <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/register" />} />
//                 <Route path="/register" element={<RegisterChoice />} />
//                 <Route path="/user-login" element={<Login />} />
//                 <Route path="/user-register" element={<Register />} />
//                 <Route path="/teacher-login" element={<TeacherLogin />} />
//                 <Route path="/teacher-register" element={<TeacherRegister />} />
//                 <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//             </Routes>
//         </div>
//     );
// }

// export default App;
// import React, { useState, useEffect } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./components/home";
// import Register from "./components/User/register";
// import TeacherDashboard from "./components/Teacher/teacherDashboard";
// import Dashboard from "./components/User/dashboard";
// import RegisterChoice from "./components/registerChoice";
// import TeacherLogin from "./components/Teacher/teacherLogin";
// import TeacherRegister from "./components/Teacher/teacherResgister";
// import Login from "./components/User/login";

// function App() {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch("http://127.0.0.1:8000/api/auth/status/", {
//             method: "GET",
//             credentials: 'include',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             }
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             setIsAuthenticated(data.authenticated);
//             setLoading(false);
//         })
//         .catch(error => {
//             console.error("Error checking login status:", error);
//             setIsAuthenticated(false);
//             setLoading(false);
//         });
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="App">
//             <Routes>
//                 <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/register"} />} />
//                 <Route path="/register" element={<RegisterChoice />} />
//                 <Route path="/user-login" element={<Login />} />
//                 <Route path="/user-register" element={<Register />} />
//                 <Route path="/teacher-login" element={<TeacherLogin />} />
//                 <Route path="/teacher-register" element={<TeacherRegister />} />
//                 <Route 
//                     path="/teacher-dashboard" 
//                     element={isAuthenticated ? <TeacherDashboard /> : <Navigate to="/teacher-login" />} 
//                 />
//                 <Route 
//                     path="/dashboard" 
//                     element={isAuthenticated ? <Dashboard /> : <Navigate to="/user-login" />} 
//                 />
//                 <Route path="*" element={<Navigate to="/" />} />
//             </Routes>
//         </div>
//     );
// }

// export default App;
// import React, { useState, useEffect } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./components/home";
// import Register from "./components/User/register";
// import TeacherDashboard from "./components/Teacher/teacherDashboard";
// import Dashboard from "./components/User/dashboard";
// import RegisterChoice from "./components/registerChoice";
// import TeacherLogin from "./components/Teacher/teacherLogin";
// import TeacherRegister from "./components/Teacher/teacherResgister";
// import Login from "./components/User/login";

// function App() {
//     console.log("React App Loaded!");
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch("http://127.0.0.1:8000/api/auth/status/", {
//             method: "GET",
//             credentials: 'include',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             setIsAuthenticated(data.authenticated);
//         })
//         .catch(error => {
//             console.error("Error checking login status:", error);
//         })
//         .finally(() => setLoading(false)); // Ensure loading state is set to false
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }


//     return (
//         // <div className="App">
//         //     <Routes>
//         //         <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/register" />} />
//         //         <Route path="/register" element={<RegisterChoice />} />
//         //         <Route path="/user-login" element={<Login />} />
//         //         <Route path="/user-register" element={<Register />} />
//         //         <Route path="/teacher-login" element={<TeacherLogin />} />
//         //         <Route path="/teacher-register" element={<TeacherRegister />} />
//         //         <Route 
//         //             path="/teacher-dashboard" 
//         //             element={isAuthenticated ? <TeacherDashboard /> : <Navigate to="/teacher-login" />} 
//         //         />
//         //         <Route 
//         //             path="/dashboard" 
//         //             element={isAuthenticated ? <Dashboard /> : <Navigate to="/user-login" />} 
//         //         />
//         //         <Route path="*" element={<Navigate to="/" />} />
//         //     </Routes>
//         // </div>
//         <div className="App">
//         <Routes>
//             <Route 
//                 path="/" 
//                 element={isAuthenticated ? <Home /> : <Navigate to="/register" />} 
//             />
//             <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/user-login" />} />
//             <Route path="/register" element={<RegisterChoice />} />
//             <Route path="/user-login" element={<Login />} />
//             <Route path="/user-register" element={<Register />} />
//             <Route path="/teacher-login" element={<TeacherLogin />} />
//             <Route path="/teacher-register" element={<TeacherRegister />} />
//             <Route 
//                 path="/teacher-dashboard" 
//                 element={isAuthenticated ? <TeacherDashboard /> : <Navigate to="/teacher-login" />} 
//             />
//             <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//     </div>
    
//     );
    
// }

// export default App;
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import Register from "./components/User/register";
import TeacherDashboard from "./components/Teacher/teacherDashboard";
import Dashboard from "./components/User/dashboard";
import RegisterChoice from "./components/registerChoice";
import TeacherLogin from "./components/Teacher/teacherLogin";
import TeacherRegister from "./components/Teacher/teacherResgister";
import Login from "./components/User/login";

function App() {
    console.log("React App Loaded!");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log("useEffect running");
        fetch("http://127.0.0.1:8000/api/auth/status/", {
            method: "GET",
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            console.log("Auth response status:", response.status);
            return response.json();
        })
        .then(data => {
            console.log("Auth data received:", data);
            setIsAuthenticated(data.authenticated);
            setUser(data.user);
        })
        .catch(error => {
            console.error("Error checking login status:", error);
            setIsAuthenticated(false);
            setUser(null);
        })
        .finally(() => {
            console.log("Auth check completed");
            setLoading(false);
        });
    }, []);

    console.log("Rendering with state:", { isAuthenticated, loading, user });

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner">Loading...</div>
            </div>
        );
    }

    return (
        <div className="App">
            <Routes>
                <Route 
                    path="/" 
                    element={
                        isAuthenticated ? (
                            user?.is_staff ? 
                            <Navigate to="/teacher-dashboard" /> : 
                            <Navigate to="/dashboard" />
                        ) : 
                        <Navigate to="/register" />
                    } 
                />
                <Route 
                    path="/dashboard" 
                    element={
                        isAuthenticated && !user?.is_staff ? 
                        <Dashboard /> : 
                        <Navigate to="/user-login" />
                    } 
                />
                <Route 
                    path="/register" 
                    element={!isAuthenticated ? <RegisterChoice /> : <Navigate to="/" />} 
                />
                <Route 
                    path="/user-login" 
                    element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} 
                />
                <Route 
                    path="/user-register" 
                    element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />} 
                />
                <Route 
                    path="/teacher-login" 
                    element={!isAuthenticated ? <TeacherLogin /> : <Navigate to="/teacher-dashboard" />} 
                />
                <Route 
                    path="/teacher-register" 
                    element={!isAuthenticated ? <TeacherRegister /> : <Navigate to="/teacher-dashboard" />} 
                />
                <Route 
                    path="/teacher-dashboard" 
                    element={
                        isAuthenticated && user?.is_staff ? 
                        <TeacherDashboard /> : 
                        <Navigate to="/teacher-login" />
                    } 
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default App;