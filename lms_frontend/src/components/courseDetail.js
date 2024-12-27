import React from "react";
import { useParams } from "react-router-dom";
import realBookImg from "../images/real-book-img.png";
import { Link } from "react-router-dom";
function CourseDetail() {
  let { course_id } = useParams();
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          <img src={realBookImg} className="img-thumbnail" alt="..." />
        </div>
        <div className="col-8">
          <h3>Course Title</h3>
          <p>
            HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
          </p>
          <p className="fw-bold">
            Course By:<a href="#">Teacher 1</a>
          </p>
          <p className="fw-bold"> Rating: 4.5/5</p>
        </div>
      </div>
      {/* course vids */}
      <div class="card mt-4">
        <div class="card-header">Course Videos</div>
        <ul class="list-group list-group-flush">
          <li className="list-group-item">
            Introduction
            <button className="btn btn-sm btn-secondary float-right">
              Play
            </button>{" "}
          </li>
          <li class="list-group-item">Setup Project</li>
          <li class="list-group-item">Start with functional component</li>
        </ul>
      </div>
    </div>
  );
}

export default CourseDetail;
