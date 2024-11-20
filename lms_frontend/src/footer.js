export const footer = () => {
  // Create footer element
  const footer = document.createElement("footer");
  footer.className = "text-muted py-5";

  // Create container div
  const container = document.createElement("div");
  container.className = "container";

  // Create the "Back to top" link
  const backToTopLink = document.createElement("a");
  backToTopLink.href = "#";
  backToTopLink.textContent = "Back to top";

  // Create p element to hold the back-to-top link and float it to the right
  const floatRightParagraph = document.createElement("p");
  floatRightParagraph.className = "float-end mb-1";
  floatRightParagraph.appendChild(backToTopLink);

  // Create the copyright paragraph
  const copyrightParagraph = document.createElement("p");
  copyrightParagraph.className = "mb-1";
  copyrightParagraph.textContent =
    "Album example is © Bootstrap, but please download and customize it for yourself!";

  // Create the Bootstrap guide paragraph
  const guideParagraph = document.createElement("p");
  guideParagraph.className = "mb-0";

  // Create "Visit the homepage" link
  const homepageLink = document.createElement("a");
  homepageLink.href = "/";
  homepageLink.textContent = "Visit the homepage";

  // Create "Getting started guide" link
  const guideLink = document.createElement("a");
  guideLink.href = "/docs/5.0/getting-started/introduction/";
  guideLink.textContent = "getting started guide";

  // Add content to the guide paragraph
  guideParagraph.textContent = "New to Bootstrap? ";
  guideParagraph.appendChild(homepageLink);
  guideParagraph.appendChild(document.createTextNode(" or read our "));
  guideParagraph.appendChild(guideLink);
  guideParagraph.appendChild(document.createTextNode("."));

  // Append all elements to the container
  container.appendChild(floatRightParagraph);
  container.appendChild(copyrightParagraph);
  container.appendChild(guideParagraph);

  // Append the container to the footer
  footer.appendChild(container);

  // Append the footer to the document body (or another parent element)
  document.body.appendChild(footer);
};
