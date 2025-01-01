import React from "react";
import Header from "./header";
import Home from "./home";
import Footer from "./footer";
import About from "./about";
import CourseDetail from "./courseDetail";
import Login from "./User/login";
import Register from "./User/register";
import Dashboard from "./User/dashboard";
import MyCourses from "./User/myCourses";
import RecommendedCourses from "./User/recommendedCourses";
import ProfileSetting from "./User/profileSetting";
import ChangePassword from "./User/changePassword";

import { Routes as Switch, Route } from "react-router-dom";
function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
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

      </Switch>
      <Footer />
    </div>
  );
}
export default Main;
