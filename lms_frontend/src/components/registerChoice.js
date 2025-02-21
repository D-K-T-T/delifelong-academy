// import { Link } from "react-router-dom";
// import React from "react";

// function RegisterChoice() {
//     return (
//         <div className="container mt-4">
//             <div className="row">
//                 <div className="col-6 offset-3">
//                     <div className="card text-center">
//                         <h5 className="card-header">Register as</h5>
//                         <div className="card-body">
//                             <Link to="/register/student" className="btn btn-primary m-2">Student</Link>
//                             <Link to="/register/teacher" className="btn btn-secondary m-2">Teacher</Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default RegisterChoice;
import { Link } from "react-router-dom";
import React from "react";

function RegisterChoice() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-8 offset-2">
                    <div className="card text-center">
                        <h5 className="card-header">Welcome to LMS</h5>
                        <div className="card-body">
                            <div className="row">
                                {/* Student Options */}
                                <div className="col-md-6 mb-3">
                                    <div className="card">
                                        <h6 className="card-header">Student</h6>
                                        <div className="card-body">
                                            <Link to="/user-login" className="btn btn-primary m-2 w-100">Login as Student</Link>
                                            <Link to="/user-register" className="btn btn-outline-primary m-2 w-100">Register as Student</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Teacher Options */}
                                <div className="col-md-6 mb-3">
                                    <div className="card">
                                        <h6 className="card-header">Teacher</h6>
                                        <div className="card-body">
                                            <Link to="/teacher-login" className="btn btn-secondary m-2 w-100">Login as Teacher</Link>
                                            <Link to="/teacher-register" className="btn btn-outline-secondary m-2 w-100">Register as Teacher</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterChoice;