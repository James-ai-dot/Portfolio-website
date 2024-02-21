// Mobile navigation
document.querySelector(".menu-btn").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("open");
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("open");
});

// Attempt to get the returnTop element
var returnTop = document.getElementById("return-top");

// Only add the event listener if returnTop exists
if (returnTop) {
  returnTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
}

// Contact email
document.addEventListener("DOMContentLoaded", function () {
  var user = "contact";
  var domain = "jamesdavid.eu";
  var emailLink = document.getElementById("email-link");
  var contactLink = document.getElementById("contact-link");

  // Set the footer email link text
  emailLink.textContent = user + "@" + domain;

  // The click event listener for the footer email link
  emailLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default action of the anchor
    window.location.href = "mailto:" + user + "@" + domain;
  });

  // The click event listener for the header contact link
  contactLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default action of the anchor
    window.location.href = "mailto:" + user + "@" + domain;
  });
});

// Header scroll event
document.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 0) {
    // If the user has scrolled down
    header.classList.add("scrolled");
  } else {
    // If the user is at the top of the page
    header.classList.remove("scrolled");
  }
});

// Dynamic button hover
document.querySelectorAll(".dynamic-button").forEach((button) => {
  // Apply a smooth transition to the transform property
  button.style.transition = "transform 0.1s ease-out";

  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const translateX = x * 0.2;
    const translateY = y * 0.2;

    button.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0px, 0px)";
  });
});
