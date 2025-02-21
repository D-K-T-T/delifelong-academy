import React from "react";
import Header from "./header";
import Home from "./home";
import Footer from "./footer";
import About from "./about";
import CourseDetail from "./courseDetail";
import TeacherDetail from "./Teacher/teacherDetail";
import AllCourses from "./allCourses";
import RegisterChoice from "./registerChoice";
//Users
import Login from "./User/login";
import Register from "./User/register";
import Dashboard from "./User/dashboard";
import MyCourses from "./User/myCourses";
import RecommendedCourses from "./User/recommendedCourses";
import ProfileSetting from "./User/profileSetting";
import ChangePassword from "./User/changePassword";

//Teachers 
import TeacherLogin from "./Teacher/teacherLogin";
import TeacherRegister from "./Teacher/teacherResgister";
import TeacherDashboard from "./Teacher/teacherDashboard";
import TeacherChangePassword from "./Teacher/teacherChangePassword";
import TeacherCourses from "./Teacher/teacherCourses";
import TeacherProfileSetting from "./Teacher/teacherProfileSetting";
import AddCourse from "./Teacher/addCourse";
import UserList from "./Teacher/userList";


import { Routes, Route } from "react-router-dom";
function Main() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/register" element={<RegisterChoice />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:course_id" element={<CourseDetail />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/user-register" element={<Register />} />
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/recommended-courses" element={<RecommendedCourses />} />
        <Route path="/profile-setting" element={<ProfileSetting />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/teacher-register" element={<TeacherRegister />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher-courses" element={<TeacherCourses />} />
        <Route path="/add-course" element={<AddCourse/>} />
        <Route path="/teacher-users" element={<UserList />} />
        <Route path="/teacher-profile-setting" element={<TeacherProfileSetting/>} />
        <Route path="/teacher-change-password" element={<TeacherChangePassword />} />
        <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail />} />
        <Route path="/all-courses" element={<AllCourses />} />



      </Routes>
      <Footer />
    </div>
  );
}
export default Main;
