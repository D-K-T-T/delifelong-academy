import React from "react";
import Header from "./header";
import Home from "./home";
import Footer from "./footer";
import About from "./about";
import CourseDetail from "./courseDetail";

import { Routes as Switch, Route } from "react-router-dom";
function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:course_id" element={<CourseDetail />} />
      </Switch>
      <Footer />
    </div>
  );
}
export default Main;
