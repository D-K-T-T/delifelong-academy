import { Link } from "react-router-dom";
import { useEffect } from "react";
import { checkLoginStatus } from "../auth";
import TeacherSidebar from "./teacherSidebar";
import React from "react";
function TeacherDashboard() {
  useEffect(() => {
    checkLoginStatus();
}, []);
    return (
      <div classNam="container mt-4">
        <div className="row">
          <aside className="col-md-3">
              <TeacherSidebar />
          </aside>
          <section className="col-md-9">
              Dashboard
          </section>
        </div>
      </div>
    );
  }
  export default TeacherDashboard;
  