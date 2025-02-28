// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// function TeacherLogin() {
//     const [formData, setFormData] = useState({ email: "", password: "" });
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setLoading(true);
        
//         try {
//             console.log('1. Attempting login with:', { email: formData.email, password: '***' });
            
//             const response = await fetch("http://127.0.0.1:8000/api/auth/teacher-login/", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "application/json"
//                 },
//                 credentials: 'include',
//                 body: JSON.stringify(formData),
//             });

//             const data = await response.json();
//             console.log('2. Server response:', JSON.stringify(data, null, 2));

//             if (response.ok && data.token) {
//                 console.log('3. Login successful, storing data');
//                 // Store auth data
//                 localStorage.setItem("token", data.token);
//                 localStorage.setItem("user", JSON.stringify({
//                     id: data.user_id,
//                     email: data.email,
//                     is_staff: data.is_staff
//                 }));

//                 console.log('4. Data stored, navigating...');
//                 // Use window.location.replace for full page reload
//                 window.location.replace('/teacher-dashboard');
//             } else {
//                 throw new Error(data.error || 'Login failed');
//             }
//         } catch (error) {
//             console.error("Login error:", error);
//             alert(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="container mt-4">
//             <div className="row">
//                 <div className="col-6 offset-3">
//                     <div className="card">
//                         <h5 className="card-header">Teacher Login</h5>
//                         <div className="card-body">
//                             <form onSubmit={handleLogin}>
//                                 <div className="mb-3">
//                                     <label htmlFor="email" className="form-label">Email</label>
//                                     <input 
//                                         type="email" 
//                                         id="email"
//                                         name="email"
//                                         className="form-control" 
//                                         value={formData.email} 
//                                         onChange={(e) => setFormData({
//                                             ...formData,
//                                             email: e.target.value
//                                         })}
//                                         required 
//                                         disabled={loading}
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="password" className="form-label">Password</label>
//                                     <input 
//                                         type="password"
//                                         id="password"
//                                         name="password" 
//                                         className="form-control" 
//                                         value={formData.password} 
//                                         onChange={(e) => setFormData({
//                                             ...formData,
//                                             password: e.target.value
//                                         })}
//                                         required 
//                                         disabled={loading}
//                                     />
//                                 </div>
//                                 <button 
//                                     type="submit" 
//                                     className="btn btn-primary"
//                                     disabled={loading}
//                                 >
//                                     {loading ? 'Logging in...' : 'Login'}
//                                 </button>
//                             </form>
//                             <p className="mt-3">
//                                 Don't have an account? {' '}
//                                 <Link to="/teacher-register" className="btn btn-outline-primary">
//                                     Register as Teacher
//                                 </Link>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default TeacherLogin;

// import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { checkAuth } from "../auth"; // Ensure the path is correct

// function TeacherLogin() {
//     const [formData, setFormData] = useState({ email: "", password: "" });
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const verifyAuth = async () => {
//             await checkAuth();
//         };

//         verifyAuth();
//     }, [navigate]);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             console.log('1. Attempting login with:', { email: formData.email, password: '***' });

//             const response = await fetch("http://127.0.0.1:8000/api/auth/teacher-login/", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "application/json"
//                 },
//                 credentials: 'include',
//                 body: JSON.stringify(formData),
//             });

//             const data = await response.json();
//             console.log('2. Server response:', JSON.stringify(data, null, 2));

//             if (response.ok && data.token) {
//                 console.log('3. Login successful, storing data');
//                 // Store auth data
//                 localStorage.setItem("token", data.token);
//                 localStorage.setItem("user", JSON.stringify({
//                     id: data.user_id,
//                     email: data.email,
//                     is_staff: data.is_staff
//                 }));

//                 console.log('4. Data stored, navigating...');
//                 // Use window.location.replace for full page reload
//                 window.location.replace('/teacher-dashboard');
//             } else {
//                 throw new Error(data.error || 'Login failed');
//             }
//         } catch (error) {
//             console.error("Login error:", error);
//             alert(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="container mt-4">
//             <div className="row">
//                 <div className="col-6 offset-3">
//                     <div className="card">
//                         <h5 className="card-header">Teacher Login</h5>
//                         <div className="card-body">
//                             <form onSubmit={handleLogin}>
//                                 <div className="mb-3">
//                                     <label htmlFor="email" className="form-label">Email</label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         name="email"
//                                         className="form-control"
//                                         value={formData.email}
//                                         onChange={(e) => setFormData({
//                                             ...formData,
//                                             email: e.target.value
//                                         })}
//                                         required
//                                         disabled={loading}
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="password" className="form-label">Password</label>
//                                     <input
//                                         type="password"
//                                         id="password"
//                                         name="password"
//                                         className="form-control"
//                                         value={formData.password}
//                                         onChange={(e) => setFormData({
//                                             ...formData,
//                                             password: e.target.value
//                                         })}
//                                         required
//                                         disabled={loading}
//                                     />
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="btn btn-primary"
//                                     disabled={loading}
//                                 >
//                                     {loading ? 'Logging in...' : 'Login'}
//                                 </button>
//                             </form>
//                             <p className="mt-3">
//                                 Don't have an account? {' '}
//                                 <Link to="/teacher-register" className="btn btn-outline-primary">
//                                     Register as Teacher
//                                 </Link>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default TeacherLogin;
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

// function TeacherLogin() {
//     const [formData, setFormData] = useState({ email: "", password: "" });
//     const [loading, setLoading] = useState(false);
//     const { isAuthenticated, user } = useAuth();
//     const navigate = useNavigate();

//     if (isAuthenticated && user?.is_staff) {
//         navigate("/teacher-dashboard");
//     }

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             console.log('1. Attempting login with:', { email: formData.email, password: '***' });

//             const response = await fetch("http://127.0.0.1:8000/api/auth/teacher-login/", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "application/json"
//                 },
//                 credentials: 'include',
//                 body: JSON.stringify(formData),
//             });

//             const data = await response.json();
//             console.log('2. Server response:', JSON.stringify(data, null, 2));

//             if (response.ok && data.token) {
//                 console.log('3. Login successful, storing data');
//                 // Store auth data
//                 localStorage.setItem("token", data.token);
//                 localStorage.setItem("user", JSON.stringify({
//                     id: data.user_id,
//                     email: data.email,
//                     is_staff: data.is_staff
//                 }));

//                 console.log('4. Data stored, navigating...');
//                 // Use window.location.replace for full page reload
//                 window.location.replace('/teacher-dashboard');
//             } else {
//                 throw new Error(data.error || 'Login failed');
//             }
//         } catch (error) {
//             console.error("Login error:", error);
//             alert(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };
function TeacherLogin() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const { isAuthenticated, user } = useAuth();
    const navigate = useNavigate();

    // If already authenticated and is a teacher, redirect to dashboard
    // React.useEffect(() => {
    //     if (isAuthenticated && user?.is_staff) {
    //         navigate("/teacher-dashboard");
    //     }
    // }, [isAuthenticated, user, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("http://127.0.0.1:8000/api/auth/teacher-login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.token) {
                localStorage.setItem("token", data.token);
                navigate("/teacher-dashboard", { replace: true });
            } else {
                throw new Error(data.error || 'Login failed');
            }
        } catch (error) {
            console.error("Login error:", error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Teacher Login</h5>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        value={formData.email}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            email: e.target.value
                                        })}
                                        required
                                        disabled={loading}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        value={formData.password}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            password: e.target.value
                                        })}
                                        required
                                        disabled={loading}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={loading}
                                >
                                    {loading ? 'Logging in...' : 'Login'}
                                </button>
                            </form>
                            <p className="mt-3">
                                Don't have an account? {' '}
                                <Link to="/teacher-register" className="btn btn-outline-primary">
                                    Register as Teacher
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherLogin;