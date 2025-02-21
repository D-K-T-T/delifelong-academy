
// // export default Home;
// import React from "react";
// import realBookImg from "../images/real-book-img.png";
// import { Link } from "react-router-dom";
// import CourseDetail from "./courseDetail";
// import AllCourses from "./allCourses";

// const Home = () => {
//   const createCard = (title, imageUrl, key) => (
//     <div key={key} className="col-md-3 mb-4">
//       <div className="card">
//         <Link to="/detail/1">
//           {title}
//           <img className="card-img-top" src={imageUrl} alt="Book image" />
//         </Link>
//         <div className="card-body">
//           <h5 className="card-title"></h5>
//         </div>
//       </div>
//     </div>
//   );

//   const createCarouselItem = (
//     quoteText,
//     author,
//     sourceTitle,
//     isActive,
//     key
//   ) => (
//     <div key={key} className={`carousel-item ${isActive ? "active" : ""}`}>
//       <figure className="text-center">
//         <blockquote className="blockquote">
//           <p>{quoteText}</p>
//         </blockquote>
//         <figcaption className="blockquote-footer">
//           {author} in <cite title={sourceTitle}>{sourceTitle}</cite>
//         </figcaption>
//       </figure>
//     </div>
//   );

//   return (
//     <div className="container mt-4">
//       <h3 className="pb-1 mb-4">Latest Courses <Link to="/all-courses" className="float-end">See All</Link></h3>
//       <div className="row mb-4">
//         <div className="col-md-3">
//           <div className="card">
//             <Link to="/detail/1">
//               <img className="card-img-top" src={realBookImg} alt="Course 1" />
//             </Link>
//             <div className="card-body">
//               <h5 className="card-title">
//                 <Link to="/detail/1">Latest Course 1</Link>
//               </h5>
//             </div>
//             <div className="card-footer">
//               <div className="title">
//                 <span>Rating 4.5/5</span>
//                 <span className="float-end">Views : 7282</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="card">
//             <Link to="/detail/2">
//               <img className="card-img-top" src={realBookImg} alt="Course 2" />
//             </Link>
//             <div className="card-body">
//               <h5 className="card-title">
//                 <Link to="/detail/2">Latest Course 2</Link>
//               </h5>
//             </div>
//             <div className="card-footer">
//               <div className="title">
//                 <span>Rating 4.5/5</span>
//                 <span className="float-end">Views : 7282</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="card">
//             <Link to="/detail/3">
//               <img className="card-img-top" src={realBookImg} alt="Course 3" />
//             </Link>
//             <div className="card-body">
//               <h5 className="card-title">
//                 <Link to="/detail/3">Latest Course 3</Link>
//               </h5>
//             </div>
//             <div className="card-footer">
//               <div className="title">
//                 <span>Rating 4.5/5</span>
//                 <span className="float-end">Views : 7282</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="card">
//             <Link to="/detail/4">
//               <img className="card-img-top" src={realBookImg} alt="Course 4" />
//             </Link>
//             <div className="card-body">
//               <h5 className="card-title">
//                 <Link to="/detail/4">Latest Course 4</Link>
//               </h5>
//             </div>
//             <div className="card-footer">
//               <div className="title">
//                 <span>Rating 4.5/5</span>
//                 <span className="float-end">Views : 7282</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
    

//        {/* Popular courses
//       <h3 className="pb-1 mt-5 mb-4">Popular Courses</h3>
//       <div className="row">
//         {Array(4)
//           .fill(null)
//           .map((_, i) => createCard(`Popular Course ${i + 1}`, realBookImg, i))}
//       </div>

//       Featured teachers 
//       <h3 className="pb-1 mt-5 mb-4">Featured Teachers</h3>
//       <div className="row">
//         {Array(4)
//           .fill(null)
//           .map((_, i) =>
//             createCard(`Featured Teacher ${i + 1}`, realBookImg, i)
//           )}
//       </div> */}

//       {/* // Testimonials */}
//       <h3 className="pb-1 mb-4 mt-5">Student Testimonial</h3>
//       <div
//         id="carouselExampleIndicators"
//         className="carousel slide bg-dark text-white py-5"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-indicators">
//           {Array(3)
//             .fill(null)
//             .map((_, i) => (
//               <button
//                 key={i}
//                 type="button"
//                 data-bs-target="#carouselExampleIndicators"
//                 data-bs-slide-to={i}
//                 className={i === 0 ? "active" : ""}
//                 aria-current={i === 0 ? "true" : undefined}
//                 aria-label={`Slide ${i + 1}`}
//               ></button>
//             ))}
//         </div>
//         <div className="carousel-inner">
//           {createCarouselItem(
//             "A well-known quote, contained in a blockquote element.",
//             "Someone famous",
//             "Source Title",
//             true,
//             "carousel1"
//           )}
//           {createCarouselItem(
//             "Another quote for the carousel.",
//             "Another famous person",
//             "Different Source",
//             false,
//             "carousel2"
//           )}
//           {createCarouselItem(
//             "Yet another inspiring quote.",
//             "Inspiring figure",
//             "Inspiration Source",
//             false,
//             "carousel3"
//           )}
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleIndicators"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleIndicators"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/resources/");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <p>Loading courses...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mt-4">
      <h3 className="pb-1 mb-4">
        Latest Courses <Link to="/all-courses" className="float-end">See All</Link>
      </h3>
      <div className="row mb-4">
        {courses.map((course) => (
          <div key={course.id} className="col-md-3 mb-4">
            <div className="card">
              <Link to={`/detail/${course.id}`}>
                <img className="card-img-top" src={course.image || "default-image-path.jpg"} alt={course.title} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/detail/${course.id}`}>{course.title}</Link>
                </h5>
              </div>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: {course.rating || "N/A"}/5</span>
                  <span className="float-end">Views: {course.views || "N/A"}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Testimonials and other sections can be added here */}
    </div>
  );
};

export default Home;
