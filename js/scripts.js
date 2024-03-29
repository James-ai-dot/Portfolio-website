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

// Image gallery

// Click and drag
const slider = document.querySelector(".image-row");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

// Drag-to-Scroll

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".image-gallery");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    e.preventDefault();
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
  });
});

// Fullscreen overlay

document.addEventListener("DOMContentLoaded", function () {
  const fullScreenOverlay = document.createElement("div");
  fullScreenOverlay.classList.add("full-screen-overlay");
  document.body.appendChild(fullScreenOverlay);

  fullScreenOverlay.addEventListener("click", function (event) {
    // Get the position of the overlay
    const rect = fullScreenOverlay.getBoundingClientRect();

    // Increase the clickable area. Adjust these values as needed to cover the pseudo-element
    const clickableWidth = 100; // Width of the clickable area
    const clickableHeight = 100; // Height of the clickable area

    // Check if the click is within the area of the pseudo-element
    if (
      event.clientX <= rect.left + clickableWidth &&
      event.clientY <= rect.top + clickableHeight
    ) {
      fullScreenOverlay.classList.remove("active");
    }
  });

  const images = document.querySelectorAll(".gallery-image");
  images.forEach((image) => {
    image.addEventListener("click", function () {
      const clonedImageRow = image.closest(".image-row").cloneNode(true);
      clonedImageRow.classList.add("cloned");

      clonedImageRow.querySelectorAll(".gallery-image").forEach((img) => {
        img.style.maxHeight = "70vh";
        img.style.width = "auto";
        img.style.maxWidth = "none";
      });
      fullScreenOverlay.innerHTML = "";
      fullScreenOverlay.appendChild(clonedImageRow);
      fullScreenOverlay.classList.add("active");

      const imageIndex = Array.from(images).indexOf(image);
      const clickedImage = clonedImageRow.children[imageIndex];
      const offset =
        clickedImage.offsetLeft +
        clickedImage.clientWidth / 2 -
        window.innerWidth / 2;
      fullScreenOverlay.scrollLeft = offset;

      applyDragToScroll(clonedImageRow);
    });
  });

  function applyDragToScroll(element) {
    let isDown = false;
    let startX;
    let scrollLeft;

    element.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - element.getBoundingClientRect().left;
      scrollLeft = element.scrollLeft;
      e.preventDefault(); // Prevent default text selection
    });

    element.addEventListener("mouseup", () => {
      isDown = false;
    });

    element.addEventListener("mouseleave", () => {
      isDown = false;
    });

    element.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - element.getBoundingClientRect().left;
      const walk = x - startX;
      element.scrollLeft = scrollLeft - walk;
    });
  }
});
