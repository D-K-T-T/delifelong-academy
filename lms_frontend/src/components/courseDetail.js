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
            Course By:<Link to ="/teacher-detail/1">Teacher 1</Link></p>
          <p className="fw-bold"> Rating: 4.5/5</p>
        </div>
      </div>
      {/* course vids */}
      <div class="card mt-4">
        <div class="card-header">Course Videos</div>
        <ul class="list-group list-group-flush">
          <li className="list-group-item">
            Introduction
            <button className="btn btn-sm btn-secondary float-right" data-bs-toggle="modal" data-bs-target="#videoModal1">
              Play
            </button>{" "}
{/* Video Modal Start */}
<div className="modal fade" id="videoModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Video 1</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div class="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
      </div>
      </div>
     
    </div>
  </div>
</div>
{/* End video Modal */}
          </li>

          <li class="list-group-item">Setup Project</li>
          <li class="list-group-item">Start with functional component</li>
        </ul>
      </div>
    </div>
  );
}

export default CourseDetail;
