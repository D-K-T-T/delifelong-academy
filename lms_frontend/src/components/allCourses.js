import React from "react";
import { Link } from "react-router-dom";
import realBookImg from "../images/real-book-img.png";

function AllCourses() {
 

  return (
    <div className="container mt-4">
          
          <div className="row mb-4">
            <div className="col-md-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <Link to="/detail/1">
                  <img className="card-img-top" src={realBookImg} alt="Course 1" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to="/detail/1">Latest Course 1</Link>
                  </h5>
                </div>
                <div className="card-footer">
                  <div className="title">
                    <span>Rating 4.5/5</span>
                    <span className="float-end">Views : 7282</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <Link to="/detail/2">
                  <img className="card-img-top" src={realBookImg} alt="Course 2" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to="/detail/2">Latest Course 2</Link>
                  </h5>
                </div>
                <div className="card-footer">
                    <div className="title">
                      <span>Rating 4.5/5</span>
                      <span className="float-end">Views : 7282</span>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <Link to="/detail/3">
                  <img className="card-img-top" src={realBookImg} alt="Course 3" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to="/detail/3">Latest Course 3</Link>
                  </h5>
                </div>
                <div className="card-footer">
                  <div className="title">
                    <span>Rating 4.5/5</span>
                    <span className="float-end">Views : 7282</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <Link to="/detail/4">
                  <img className="card-img-top" src={realBookImg} alt="Course 4" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to="/detail/4">Latest Course 4</Link>
                  </h5>
                </div>
                <div className="card-footer">
                          <div className="title">
                            <span>Rating 4.5/5</span>
                            <span className="float-end">Views : 7282</span>
                          </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <Link to="/detail/1">
                  <img className="card-img-top" src={realBookImg} alt="Course 1" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to="/detail/1">Latest Course 1</Link>
                  </h5>
                </div>
                <div className="card-footer">
                  <div className="title">
                    <span>Rating 4.5/5</span>
                    <span className="float-end">Views : 7282</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <Link to="/detail/1">
                  <img className="card-img-top" src={realBookImg} alt="Course 1" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to="/detail/1">Latest Course 1</Link>
                  </h5>
                </div>
                <div className="card-footer">
                  <div className="title">
                    <span>Rating 4.5/5</span>
                    <span className="float-end">Views : 7282</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <Link to="/detail/1">
                  <img className="card-img-top" src={realBookImg} alt="Course 1" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to="/detail/1">Latest Course 1</Link>
                  </h5>
                </div>
                <div className="card-footer">
                <div className="card-footer">
                  <div className="title">
                    <span>Rating 4.5/5</span>
                    <span className="float-end">Views : 7282</span>
                  </div>
                </div>
  
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <Link to="/detail/1">
                  <img className="card-img-top" src={realBookImg} alt="Course 1" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to="/detail/1">Latest Course 1</Link>
                  </h5>
                </div>
                <div className="card-footer">
                    <div className="title">
                      <span>Rating 4.5/5</span>
                      <span className="float-end">Views : 7282</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          {/* Pagination Start */}
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
          {/* End */}

        </div>
      </div>
  );
}

export default AllCourses;
