// import React from "react";
// import { Link } from "react-router-dom";
// function TeacherSidebar(){
//     return(
//         <div className="card">
//                 <h5 className="card-header">Dashboard</h5>
//                 <div className="list-group list-group-flush">
//                 <Link to="/teacher-dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
//                     <Link to="/teacher-courses" className="list-group-item list-group-item-action">My Courses</Link>
//                     <Link to="/add-course" className="list-group-item list-group-item-action">Add Courses</Link>
//                     <Link to="/teacher-users" className="list-group-item list-group-item-action">My Users</Link>    
//                     <Link to="/teacher-profile-setting" className="list-group-item list-group-item-action">Profile Setting</Link>
//                     <Link to="/teacher-change-password" className="list-group-item list-group-item-action">Change Password</Link>
//                     <Link to="/teacher-login" className="list-group-item list-group-item-action text-danger">Logout</Link>
//                 </div>
//             </div>

//     )
// }

// export default TeacherSidebar;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function TeacherSidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        const { logout } = useAuth();
        logout();
        navigate("/teacher-login");
    };

    return (
        <div className="card">
            <h5 className="card-header">Dashboard</h5>
            <div className="list-group list-group-flush">
                <Link to="/teacher-dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
                <Link to="/teacher-courses" className="list-group-item list-group-item-action">My Courses</Link>
                <Link to="/add-course" className="list-group-item list-group-item-action">Add Courses</Link>
                <Link to="/teacher-users" className="list-group-item list-group-item-action">My Users</Link>
                <Link to="/teacher-profile-setting" className="list-group-item list-group-item-action">Profile Setting</Link>
                <Link to="/teacher-change-password" className="list-group-item list-group-item-action">Change Password</Link>
                <div onClick={handleLogout} className="list-group-item list-group-item-action text-danger">Logout</div>
            </div>
        </div>
    );
}

export default TeacherSidebar;

// import React from "react";
// import { Link } from "react-router-dom";

// function TeacherSidebar() {
//     return (
//         <div className="card">
//             <h5 className="card-header">Dashboard</h5>
//             <div className="list-group list-group-flush">
//                 <Link to="/teacher-dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
//                 <Link to="/teacher-courses" className="list-group-item list-group-item-action">My Courses</Link>
//                 <Link to="/add-course" className="list-group-item list-group-item-action">Add Courses</Link>
//                 <Link to="/teacher-users" className="list-group-item list-group-item-action">My Users</Link>
//                 <Link to="/teacher-profile-setting" className="list-group-item list-group-item-action">Profile Setting</Link>
//                 <Link to="/teacher-change-password" className="list-group-item list-group-item-action">Change Password</Link>
//                 <Link to="/teacher-logout" className="list-group-item list-group-item-action text-danger">Logout</Link>
//             </div>
//         </div>
//     );
// }

// export default TeacherSidebar;
