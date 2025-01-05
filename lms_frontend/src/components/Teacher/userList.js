import React from "react";
import { Link } from "react-router-dom";
import TeacherSidebar from "./teacherSidebar";
function UserList() {
    return (
      <div className="container mt-4">
        <div className="row">
          <aside className="col-md-3">
              <TeacherSidebar />
          </aside>
          <section className="col-md-9">
        <div className="card">
                <h5 className="card-header">User List</h5>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                           <tr>
                            <th>Name</th>
                            <th>Created by</th>
                            <th>Action</th>
                           </tr>
                        </thead>
                        <tbody>
                            <td>Php Development</td>
                            <td><Link to="/">Deshawn Tsenuokpor</Link></td>
                            <td>
                                <button className="btn btn-primary">Delete</button>
                            </td>
                        </tbody>
                    </table>
                </div>
            </div>
            </section>
        </div>
      </div>
  );
}
export default UserList;
