const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        staggerShow(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

let cumulativeDelay = 0; // To keep track of total delay

function staggerShow(container) {
  const hiddenElements = container.querySelectorAll(".hidden");
  hiddenElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
      el.classList.remove("hidden");
    }, cumulativeDelay + index * 100);
  });

  cumulativeDelay += hiddenElements.length * 100; // Increase delay for next section
}

sections.forEach((section) => {
  observer.observe(section);
});
