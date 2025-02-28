// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./components/home";
// import Register from "./components/User/register";
// import TeacherDashboard from "./components/Teacher/teacherDashboard";
// import Dashboard from "./components/User/dashboard";
// import RegisterChoice from "./components/registerChoice";
// import TeacherLogin from "./components/Teacher/teacherLogin";
// import TeacherRegister from "./components/Teacher/teacherResgister";
// import Login from "./components/User/login";
// import useAuth from "./hooks/useAuth";

// function App() {
//     const { isAuthenticated, loading, user } = useAuth();

//     console.log("Rendering with state:", { isAuthenticated, loading, user });

//     if (loading) {
//         return (
//             <div className="loading-container">
//                 <div className="loading-spinner">Loading...</div>
//             </div>
//         );
//     }

//     return (
//         <div className="App">
//     <Routes>
//         <Route
//             path="/"
//             element={<RegisterChoice />} // Always show RegisterChoice
//         />
//         <Route
//             path="/dashboard"
//             element={
//                 isAuthenticated && !user?.is_staff ? (
//                     <Dashboard />
//                 ) : (
//                     <Navigate to="/user-login" />
//                 )
//             }
//         />
//         <Route
//             path="/register"
//             element={<RegisterChoice />} // Allow registration choice
//         />
//         <Route
//             path="/user-login"
//             element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />}
//         />
//         <Route
//             path="/user-register"
//             element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />}
//         />
//         <Route
//             path="/teacher-login"
//             element={!isAuthenticated ? <TeacherLogin /> : <Navigate to="/teacher-dashboard" />}
//         />
//         <Route
//             path="/teacher-register"
//             element={!isAuthenticated ? <TeacherRegister /> : <Navigate to="/teacher-dashboard" />}
//         />
//         <Route
//             path="/teacher-dashboard"
//             element={
//                 isAuthenticated && user?.is_staff ? (
//                     <TeacherDashboard />
//                 ) : (
//                     <Navigate to="/teacher-login" />
//                 )
//             }
//         />
//         <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
// </div>
//     );
// }

// export default App;
// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./components/home";
// import Register from "./components/User/register";
// import TeacherDashboard from "./components/Teacher/teacherDashboard";
// import Dashboard from "./components/User/dashboard";
// import RegisterChoice from "./components/registerChoice";
// import TeacherLogin from "./components/Teacher/teacherLogin";
// import TeacherRegister from "./components/Teacher/teacherResgister";
// import Login from "./components/User/login";
// import useAuth from "./hooks/useAuth";

// function App() {
//     const { isAuthenticated, loading, user } = useAuth();

//     console.log("Rendering with state:", { isAuthenticated, loading, user });

//     if (loading) {
//         return (
//             <div className="loading-container">
//                 <div className="loading-spinner">Loading...</div>
//             </div>
//         );
//     }

//     return (
//         <div className="App">
//             <Routes>
//                 <Route
//                     path="/"
//                     element={<RegisterChoice />} // Always show RegisterChoice
//                 />
//                 <Route
//                     path="/dashboard"
//                     element={
//                         isAuthenticated && !user?.is_staff ? (
//                             <Dashboard />
//                         ) : (
//                             <Navigate to="/user-login" />
//                         )
//                     }
//                 />
//                 <Route
//                     path="/register"
//                     element={<RegisterChoice />} // Allow registration choice
//                 />
//                 <Route
//                     path="/user-login"
//                     element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />}
//                 />
//                 <Route
//                     path="/user-register"
//                     element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />}
//                 />
//                 <Route
//                     path="/teacher-login"
//                     element={<TeacherLogin />} // Always show TeacherLogin
//                 />
//                 <Route
//                     path="/teacher-register"
//                     element={!isAuthenticated ? <TeacherRegister /> : <Navigate to="/teacher-dashboard" />}
//                 />
//                 <Route
//                     path="/teacher-dashboard"
//                     element={
//                         isAuthenticated && user?.is_staff ? (
//                             <TeacherDashboard />
//                         ) : (
//                             <Navigate to="/teacher-login" />
//                         )
//                     }
//                 />
//                 <Route path="*" element={<Navigate to="/" />} />
//             </Routes>
//         </div>
//     );
// }

// export default App;
// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./components/home";
// import Register from "./components/User/register";
// import TeacherDashboard from "./components/Teacher/teacherDashboard";
// import Dashboard from "./components/User/dashboard";
// import RegisterChoice from "./components/registerChoice";
// import TeacherLogin from "./components/Teacher/teacherLogin";
// import TeacherRegister from "./components/Teacher/teacherResgister";
// import Login from "./components/User/login";
// import useAuth from "./hooks/useAuth";

// function App() {
//     const { isAuthenticated, loading, user } = useAuth();

//     if (loading) {
//         return (
//             <div className="loading-container">
//                 <div className="loading-spinner">Loading...</div>
//             </div>
//         );
//     }

//     return (
//         <div className="App">
//             <Routes>
//                 <Route path="/" element={<RegisterChoice />} />
//                 <Route
//                     path="/dashboard"
//                     element={
//                         isAuthenticated && !user?.is_staff ? (
//                             <Dashboard />
//                         ) : (
//                             <Navigate to="/user-login" />
//                         )
//                     }
//                 />
//                 <Route path="/register" element={<RegisterChoice />} />
//                 <Route path="/user-login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
//                 <Route path="/user-register" element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />} />
//                 <Route path="/teacher-login" element={<TeacherLogin />} />
//                 <Route path="/teacher-register" element={!isAuthenticated ? <TeacherRegister /> : <Navigate to="/teacher-dashboard" />} />
//                 <Route
//                     path="/teacher-dashboard"
//                     element={
//                         isAuthenticated && user?.is_staff ? (
//                             <TeacherDashboard />
//                         ) : (
//                             <Navigate to="/teacher-login" />
//                         )
//                     }
//                 />
//                 <Route path="*" element={<Navigate to="/" />} />
//             </Routes>
//         </div>
//     );
// }

// export default App;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import RegisterChoice from "./components/registerChoice";
import Login from "./components/User/login";
import Register from "./components/User/register";
import Dashboard from "./components/User/dashboard";
import TeacherLogin from "./components/Teacher/teacherLogin";
import TeacherRegister from "./components/Teacher/teacherRegister";
import TeacherDashboard from "./components/Teacher/teacherDashboard";
import TeacherCourses from "./components/Teacher/teacherCourses";
import AddCourse from "./components/Teacher/addCourse";
import UserList from "./components/Teacher/userList";
import TeacherProfileSetting from "./components/Teacher/teacherProfileSetting";
import TeacherChangePassword from "./components/Teacher/teacherChangePassword";
import TeacherDetail from "./components/Teacher/teacherDetail";
import AllCourses from "./components/allCourses";
import Home from "./components/home";
import About from "./components/about";
import CourseDetail from "./components/courseDetail";
import MyCourses from "./components/User/myCourses";
import RecommendedCourses from "./components/User/recommendedCourses";
import ProfileSetting from "./components/User/profileSetting";
import ChangePassword from "./components/User/changePassword";

function App() {
    const { isAuthenticated, loading, user } = useAuth();

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
                <Route path="/" element={<RegisterChoice />} />
                <Route path="/register" element={<RegisterChoice />} />
                <Route path="/about" element={<About />} />
                <Route path="/detail/:course_id" element={<CourseDetail />} />
                <Route path="/user-login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
                <Route path="/user-register" element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={isAuthenticated && !user?.is_staff ? <Dashboard /> : <Navigate to="/user-login" />} />
                <Route path="/my-courses" element={isAuthenticated && !user?.is_staff ? <MyCourses /> : <Navigate to="/user-login" />} />
                <Route path="/recommended-courses" element={isAuthenticated && !user?.is_staff ? <RecommendedCourses /> : <Navigate to="/user-login" />} />
                <Route path="/profile-setting" element={isAuthenticated && !user?.is_staff ? <ProfileSetting /> : <Navigate to="/user-login" />} />
                <Route path="/change-password" element={isAuthenticated && !user?.is_staff ? <ChangePassword /> : <Navigate to="/user-login" />} />
                <Route path="/teacher-login" element={<TeacherLogin />} />
                <Route path="/teacher-register" element={!isAuthenticated ? <TeacherRegister /> : <Navigate to="/teacher-dashboard" />} />
                <Route path="/teacher-dashboard" element={isAuthenticated && user?.is_staff ? <TeacherDashboard /> : <Navigate to="/teacher-login" />} />
                <Route path="/teacher-courses" element={isAuthenticated && user?.is_staff ? <TeacherCourses /> : <Navigate to="/teacher-login" />} />
                <Route path="/add-course" element={isAuthenticated && user?.is_staff ? <AddCourse /> : <Navigate to="/teacher-login" />} />
                <Route path="/teacher-users" element={isAuthenticated && user?.is_staff ? <UserList /> : <Navigate to="/teacher-login" />} />
                <Route path="/teacher-profile-setting" element={isAuthenticated && user?.is_staff ? <TeacherProfileSetting /> : <Navigate to="/teacher-login" />} />
                <Route path="/teacher-change-password" element={isAuthenticated && user?.is_staff ? <TeacherChangePassword /> : <Navigate to="/teacher-login" />} />
                <Route path="/teacher-detail/:teacher_id" element={isAuthenticated && user?.is_staff ? <TeacherDetail /> : <Navigate to="/teacher-login" />} />
                <Route path="/all-courses" element={<AllCourses />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default App;
