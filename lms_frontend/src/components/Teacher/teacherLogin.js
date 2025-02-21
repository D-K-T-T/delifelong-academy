
// import React, { useState } from "react";

// function TeacherLogin() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleLogin = (event) => {
//         event.preventDefault();

//         fetch("http://127.0.0.1:8000/api/auth/teacher-login/", {
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
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function TeacherLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Helper function to get CSRF token
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            console.log('Attempting login with:', { email, password: '***' });  // Debug log
            
            const response = await fetch("http://127.0.0.1:8000/api/auth/teacher-login/", {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken'),
                },
                body: JSON.stringify({
                    email: email.trim(),    // Ensure no whitespace
                    password: password
                }),
            });
    
            const data = await response.json();
            console.log('Server response status:', response.status);  // Debug log
            console.log('Server response:', data);  // Debug log
    
            if (response.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("userType", "teacher");
                localStorage.setItem("userId", data.user_id);
                localStorage.setItem("email", data.email);
                navigate('/teacher-dashboard');
            } else {
                console.error('Login failed:', {
                    status: response.status,
                    error: data.error
                });
                let errorMessage;
            switch(response.status) {
                case 400:
                    errorMessage = "Email and password are required";
                    break;
                case 401:
                    errorMessage = "Invalid credentials. Please check your email and password.";
                    break;
                case 403:
                    errorMessage = "This account is not authorized as a teacher.";
                    break;
                default:
                    errorMessage = data.error || "Login failed";
            }
            alert(errorMessage);
        }
    } catch (error) {
        console.error("Login error:", error);
        alert("Network error. Please try again.");
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