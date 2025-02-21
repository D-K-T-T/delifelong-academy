import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import React from "react";
import { useEffect } from "react";
import { checkLoginStatus } from "../auth";
function Dashboard() {
  useEffect(() => {
    checkLoginStatus();
}, []);
    return (
      <div classNam="container mt-4">
        <div className="row">
          <aside className="col-md-3">
              <Sidebar />
          </aside>
          <section className="col-md-9">
              Dashboard
          </section>
        </div>
      </div>
    );
  }
  export default Dashboard;
  