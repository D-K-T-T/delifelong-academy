import { Link } from "react-router-dom";

import React from "react";
import TeacherSidebar from "./teacherSidebar";
function AddCourse() {
    return (
      <div classNam="container mt-4">
        <div className="row">
          <aside className="col-md-3">
              <TeacherSidebar/>
          </aside>
          <section className="col-md-9">
            <div className="card">
                <h5 className="card-header">Add Course</h5>
                <div className="card-body">
                    <div class="mb-3 row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-10">
                        <input type="tex t" readonly class="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-10">
                        <input type="tex t" readonly class="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Course Video</label>
                        <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword"/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Technologies </label>
                        <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword"/>
                        </div>
                    </div>
                    <hr />
                    <button className="btn btn-primary"> Update</button>  
                    </div>
                </div>
              
          </section>
        </div>
      </div>
    );
  }
  export default  AddCourse;
  