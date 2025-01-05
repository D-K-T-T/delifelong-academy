import React from "react";
import realBookImg from "../../images/real-book-img.png";

import { Link } from "react-router-dom";
function TeacherDetail(){
    return(
        <div className="container mt-3">
        <div className="row">
          <div className="col-4">
            <img src={realBookImg} className="img-thumbnail" alt="..." />
          </div>
          <div className="col-8">
            <h3>Lebroooooon</h3>
            <p>
              HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
            </p>
            <p className="fw-bold">
              Skills:<Link to ="/teacher-detail/1">Python</Link>, <Link to ="/teacher-detail/1">Java</Link>, <Link to ="/teacher-detail/1">JavaScript</Link></p>
            <p className="fw-bold"> Rating: 4.5/5</p>
          </div>
        </div>
        {/* course vids */}
        <div class="card mt-4">
          <div className="card-header">Course List</div>
          <div className="list-group list-group-flush">
            <Link to="/detail/1" class="list-group-item list-group-item-action">Python Course 1</Link>
            <Link to="/detail/1" class="list-group-item list-group-item-action">Python Course 2</Link>
            <Link to="/detail/1" class="list-group-item list-group-item-action">Java Course 1</Link>
            <Link to="/detail/1" class="list-group-item list-group-item-action">Java Course 2</Link>
            <Link to="/detail/1" class="list-group-item list-group-item-action">JavaScript Course 1</Link>
            <Link to="/detail/1" class="list-group-item list-group-item-action">JavaScript Course 2</Link>


            
          </div>
        </div>
      </div>
    )

}
export default TeacherDetail