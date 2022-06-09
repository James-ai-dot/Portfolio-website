// Mobile navigation

function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
}

//  Get the button
returnTop = document.getElementById("return-top");

returnTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
