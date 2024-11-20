import realBookImg from "./images/real-book-img.png";

export const home = () => {
  // Create main container
  const container = document.createElement("div");
  container.className = "container mt-4";

  // Function to create a card
  const createCard = (title, imageUrl) => {
    const col = document.createElement("div");
    col.className = "col-md-3 mb-4";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    const img = new Image();
    img.className = "card-img-top";
    img.src = imageUrl;
    img.alt = "Book image";
    img.onload = () => {
      cardDiv.appendChild(img);
    };

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";

    const cardLink = document.createElement("a");
    cardLink.href = "#";
    cardLink.textContent = title;
    cardTitle.appendChild(cardLink);

    cardBody.appendChild(cardTitle);
    cardDiv.appendChild(cardBody);
    col.appendChild(cardDiv);

    return col;
  };

  // Heading and row for Latest Courses
  const latestCoursesHeading = document.createElement("h3");
  latestCoursesHeading.className = "pb-1 mb-4";
  latestCoursesHeading.textContent = "Latest Courses";

  const latestCoursesRow = document.createElement("div");
  latestCoursesRow.className = "row";
  for (let i = 0; i < 4; i++) {
    const card = createCard(`Latest Course ${i + 1}`, realBookImg);
    latestCoursesRow.appendChild(card);
  }

  // Heading and row for Popular Courses
  const popularCoursesHeading = document.createElement("h3");
  popularCoursesHeading.className = "pb-1 mt-5 mb-4";
  popularCoursesHeading.textContent = "Popular Courses";

  const popularCoursesRow = document.createElement("div");
  popularCoursesRow.className = "row";
  for (let i = 0; i < 4; i++) {
    const card = createCard(`Popular Course ${i + 1}`, realBookImg);
    popularCoursesRow.appendChild(card);
  }

  // Heading and row for Featured Teachers
  const featuredTeachersHeading = document.createElement("h3");
  featuredTeachersHeading.className = "pb-1 mt-5 mb-4";
  featuredTeachersHeading.textContent = "Featured Teachers";

  const featuredTeachersRow = document.createElement("div");
  featuredTeachersRow.className = "row";
  for (let i = 0; i < 4; i++) {
    const card = createCard(`Featured Teacher ${i + 1}`, realBookImg);
    featuredTeachersRow.appendChild(card);
  }

  // Append everything to container
  container.appendChild(latestCoursesHeading);
  container.appendChild(latestCoursesRow);
  container.appendChild(popularCoursesHeading);
  container.appendChild(popularCoursesRow);
  container.appendChild(featuredTeachersHeading);
  container.appendChild(featuredTeachersRow);

  // Create heading for Student Testimonial
  const testimonialHeading = document.createElement("h3");
  testimonialHeading.className = "pb-1 mb-4 mt-5";
  testimonialHeading.textContent = "Student Testimonial";

  // Create carousel
  const carouselDiv = document.createElement("div");
  carouselDiv.id = "carouselExampleIndicators";
  carouselDiv.className = "carousel slide bg-dark text-white py-5";
  carouselDiv.setAttribute("data-bs-ride", "carousel");

  // Carousel indicators
  const indicatorsDiv = document.createElement("div");
  indicatorsDiv.className = "carousel-indicators";
  for (let i = 0; i < 3; i++) {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("data-bs-target", "#carouselExampleIndicators");
    button.setAttribute("data-bs-slide-to", i);
    button.className = i === 0 ? "active" : "";
    button.setAttribute("aria-current", i === 0 ? "true" : "false");
    button.setAttribute("aria-label", `Slide ${i + 1}`);
    indicatorsDiv.appendChild(button);
  }

  // Carousel inner content (quote instead of images)
  const carouselInnerDiv = document.createElement("div");
  carouselInnerDiv.className = "carousel-inner";

  const createCarouselItem = (quoteText, author, sourceTitle, isActive) => {
    const carouselItem = document.createElement("div");
    carouselItem.className = `carousel-item ${isActive ? "active" : ""}`;

    const figure = document.createElement("figure");
    figure.className = "text-center";

    const blockquote = document.createElement("blockquote");
    blockquote.className = "blockquote";
    const p = document.createElement("p");
    p.textContent = quoteText;
    blockquote.appendChild(p);

    const figcaption = document.createElement("figcaption");
    figcaption.className = "blockquote-footer";
    figcaption.textContent = `${author} in `;
    const cite = document.createElement("cite");
    cite.title = sourceTitle;
    cite.textContent = sourceTitle;
    figcaption.appendChild(cite);

    figure.appendChild(blockquote);
    figure.appendChild(figcaption);

    carouselItem.appendChild(figure);
    return carouselItem;
  };

  carouselInnerDiv.appendChild(
    createCarouselItem(
      "A well-known quote, contained in a blockquote element.",
      "Someone famous",
      "Source Title",
      true
    )
  );
  carouselInnerDiv.appendChild(
    createCarouselItem(
      "Another quote for the carousel.",
      "Another famous person",
      "Different Source",
      false
    )
  );
  carouselInnerDiv.appendChild(
    createCarouselItem(
      "Yet another inspiring quote.",
      "Inspiring figure",
      "Inspiration Source",
      false
    )
  );

  // Carousel controls
  const prevButton = document.createElement("button");
  prevButton.className = "carousel-control-prev";
  prevButton.type = "button";
  prevButton.setAttribute("data-bs-target", "#carouselExampleIndicators");
  prevButton.setAttribute("data-bs-slide", "prev");
  prevButton.innerHTML =
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span>';

  const nextButton = document.createElement("button");
  nextButton.className = "carousel-control-next";
  nextButton.type = "button";
  nextButton.setAttribute("data-bs-target", "#carouselExampleIndicators");
  nextButton.setAttribute("data-bs-slide", "next");
  nextButton.innerHTML =
    '<span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span>';

  // Assemble carousel
  carouselDiv.appendChild(indicatorsDiv);
  carouselDiv.appendChild(carouselInnerDiv);
  carouselDiv.appendChild(prevButton);
  carouselDiv.appendChild(nextButton);

  // Append testimonial section to the container
  container.appendChild(testimonialHeading);
  container.appendChild(carouselDiv);

  // Append the entire container to the body
  document.body.appendChild(container);
};
