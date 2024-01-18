// Mobile navigation
function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
}

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
  var elem = document.getElementById("email-link");
  elem.textContent = user + "@" + domain;

  // The click event listener will only set up the mailto link
  elem.addEventListener("click", function (event) {
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

// Spline frame
window.addEventListener("resize", adjustSplineEmbed);

function adjustSplineEmbed() {
  var splineEmbedContainer = document.querySelector(".spline-embed-container");
  if (window.innerWidth >= 768) {
    /* Match with CSS media query breakpoint */
    var leftColumnHeight = document.querySelector(
      ".col-md-6:first-child"
    ).offsetHeight;
    splineEmbedContainer.style.height = leftColumnHeight + "px";
    splineEmbedContainer.style.paddingTop = 0; // Remove padding-top for large screens
  } else {
    // Reset styles for mobile
    splineEmbedContainer.style.height = "auto";
    splineEmbedContainer.style.paddingTop = "100%"; // Maintain square aspect ratio
  }
}

// Initialize on load
adjustSplineEmbed();
