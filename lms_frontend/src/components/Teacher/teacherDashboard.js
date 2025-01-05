import { Link } from "react-router-dom";
import TeacherSidebar from "./teacherSidebar";
import React from "react";
function TeacherDashboard() {
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
  