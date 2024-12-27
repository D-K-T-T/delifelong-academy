// import React from "react";
// import realBookImg from "../images/real-book-img.png";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const createCard = (title, imageUrl) => (
//     <div className="col-md-3 mb-4">
//       <div className="card">
//         <Link to="/about">
//           {title}
//           <img className="card-img-top" src={imageUrl} alt="Book image" />
//         </Link>
//         <div className="card-body">
//           <h5 className="card-title"></h5>
//         </div>
//       </div>
//     </div>
//   );

//   const createCarouselItem = (quoteText, author, sourceTitle, isActive) => (
//     <div className={`carousel-item ${isActive ? "active" : ""}`}>
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
//       {/* Latest Courses */}
//       <h3 className="pb-1 mb-4">Latest Courses</h3>
//       <div className="row">
//         {Array(4)
//           .fill(null)
//           .map((_, i) => createCard(`Latest Course ${i + 1}`, realBookImg))}
//       </div>

//       {/* Popular Courses */}
//       <h3 className="pb-1 mt-5 mb-4">Popular Courses</h3>
//       <div className="row">
//         {Array(4)
//           .fill(null)
//           .map((_, i) => createCard(`Popular Course ${i + 1}`, realBookImg))}
//       </div>

//       {/* Featured Teachers */}
//       <h3 className="pb-1 mt-5 mb-4">Featured Teachers</h3>
//       <div className="row">
//         {Array(4)
//           .fill(null)
//           .map((_, i) => createCard(`Featured Teacher ${i + 1}`, realBookImg))}
//       </div>

//       {/* Testimonials */}
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
//             true
//           )}
//           {createCarouselItem(
//             "Another quote for the carousel.",
//             "Another famous person",
//             "Different Source",
//             false
//           )}
//           {createCarouselItem(
//             "Yet another inspiring quote.",
//             "Inspiring figure",
//             "Inspiration Source",
//             false
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
import React from "react";
import realBookImg from "../images/real-book-img.png";
import { Link } from "react-router-dom";
import CourseDetail from "./courseDetail";

const Home = () => {
  const createCard = (title, imageUrl, key) => (
    <div key={key} className="col-md-3 mb-4">
      <div className="card">
        <Link to="/detail/1">
          {title}
          <img className="card-img-top" src={imageUrl} alt="Book image" />
        </Link>
        <div className="card-body">
          <h5 className="card-title"></h5>
        </div>
      </div>
    </div>
  );

  const createCarouselItem = (
    quoteText,
    author,
    sourceTitle,
    isActive,
    key
  ) => (
    <div key={key} className={`carousel-item ${isActive ? "active" : ""}`}>
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>{quoteText}</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          {author} in <cite title={sourceTitle}>{sourceTitle}</cite>
        </figcaption>
      </figure>
    </div>
  );

  return (
    <div className="container mt-4">
      {/* Latest Courses */}
      <h3 className="pb-1 mb-4">Latest Courses</h3>
      <div className="row">
        {Array(4)
          .fill(null)
          .map((_, i) => createCard(`Latest Course ${i + 1}`, realBookImg, i))}
      </div>

      {/* Popular Courses */}
      <h3 className="pb-1 mt-5 mb-4">Popular Courses</h3>
      <div className="row">
        {Array(4)
          .fill(null)
          .map((_, i) => createCard(`Popular Course ${i + 1}`, realBookImg, i))}
      </div>

      {/* Featured Teachers */}
      <h3 className="pb-1 mt-5 mb-4">Featured Teachers</h3>
      <div className="row">
        {Array(4)
          .fill(null)
          .map((_, i) =>
            createCard(`Featured Teacher ${i + 1}`, realBookImg, i)
          )}
      </div>

      {/* Testimonials */}
      <h3 className="pb-1 mb-4 mt-5">Student Testimonial</h3>
      <div
        id="carouselExampleIndicators"
        className="carousel slide bg-dark text-white py-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={i}
                className={i === 0 ? "active" : ""}
                aria-current={i === 0 ? "true" : undefined}
                aria-label={`Slide ${i + 1}`}
              ></button>
            ))}
        </div>
        <div className="carousel-inner">
          {createCarouselItem(
            "A well-known quote, contained in a blockquote element.",
            "Someone famous",
            "Source Title",
            true,
            "carousel1"
          )}
          {createCarouselItem(
            "Another quote for the carousel.",
            "Another famous person",
            "Different Source",
            false,
            "carousel2"
          )}
          {createCarouselItem(
            "Yet another inspiring quote.",
            "Inspiring figure",
            "Inspiration Source",
            false,
            "carousel3"
          )}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
