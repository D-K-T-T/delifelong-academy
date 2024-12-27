// export const header = () => {
//   // Create a container for the navigation bar
//   const nav = document.createElement("nav");
//   nav.className = "navbar navbar-expand-lg navbar-dark bg-dark";

//   // Container div for the navbar
//   const containerDiv = document.createElement("div");
//   containerDiv.className = "container";

//   // Navbar brand
//   const brand = document.createElement("a");
//   brand.className = "navbar-brand";
//   brand.href = "#";
//   brand.innerText = "DeLifelongAcademy";

//   // Button for mobile toggle
//   const toggleButton = document.createElement("button");
//   toggleButton.className = "navbar-toggler";
//   toggleButton.setAttribute("type", "button");
//   toggleButton.setAttribute("data-bs-toggle", "collapse");
//   toggleButton.setAttribute("data-bs-target", "#navbarNav");
//   toggleButton.setAttribute("aria-controls", "navbarNav");
//   toggleButton.setAttribute("aria-expanded", "false");
//   toggleButton.setAttribute("aria-label", "Toggle navigation");

//   // Icon for the button
//   const toggleIcon = document.createElement("span");
//   toggleIcon.className = "navbar-toggler-icon";

//   // Append the icon to the button
//   toggleButton.appendChild(toggleIcon);

//   // Div for the navbar links
//   const collapseDiv = document.createElement("div");
//   collapseDiv.className = "collapse navbar-collapse";
//   collapseDiv.id = "navbarNav";

//   // Unordered list for the nav items
//   const ul = document.createElement("ul");
//   ul.className = "navbar-nav ms-auto";

//   // Home link
//   const homeItem = createNavItem("Home", "#", true);
//   // Features link
//   const featuresItem = createNavItem("Courses", "#", false);
//   // Pricing link
//   const pricingItem = createNavItem("Teachers", "#", false);
//   // Disabled link

//   // Append all nav items to the list
//   ul.appendChild(homeItem);
//   ul.appendChild(featuresItem);
//   ul.appendChild(pricingItem);

//   // Append the list to the collapse div
//   collapseDiv.appendChild(ul);

//   // Append the brand, button, and links to the container div
//   containerDiv.appendChild(brand);
//   containerDiv.appendChild(toggleButton);
//   containerDiv.appendChild(collapseDiv);

//   // Append the container div to the nav
//   nav.appendChild(containerDiv);

//   // Finally, append the navbar to the body or some specific DOM element
//   document.body.appendChild(nav);
// };

// // Helper function to create nav items
// function createNavItem(text, href, isActive, isDisabled = false) {
//   const li = document.createElement("li");
//   li.className = "nav-item";

//   const a = document.createElement("a");
//   a.className = "nav-link";
//   a.href = href;

//   if (isActive) {
//     a.classList.add("active");
//     a.setAttribute("aria-current", "page");
//   }

//   if (isDisabled) {
//     a.classList.add("disabled");
//     a.setAttribute("aria-disabled", "true");
//     a.setAttribute("tabindex", "-1");
//   }

//   a.innerText = text;
//   li.appendChild(a);

//   return li;
// }
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const createNavItem = (text, href, isActive = false, isDisabled = false) => (
    <li className="nav-item">
      <a
        className={`nav-link ${isActive ? "active" : ""} ${
          isDisabled ? "disabled" : ""
        }`}
        href={href}
        aria-current={isActive ? "page" : undefined}
        aria-disabled={isDisabled ? "true" : undefined}
        tabIndex={isDisabled ? "-1" : undefined}
      >
        {text}
      </a>
    </li>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          DeLifelongAcademy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {createNavItem("Home", "/", false, false, true)}
            {createNavItem("Courses", "#")}
            {createNavItem("Teachers", "#")}
            {createNavItem("About Us", "/about", false, false, true)}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
