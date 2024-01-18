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

function staggerShow(container) {
  const hiddenElements = container.querySelectorAll(".hidden");
  hiddenElements.forEach((el, index) => {
    // Assign a stagger delay based on the element index,
    // resulting in a sequence of animations
    el.style.setProperty("--stagger-delay", `${index * 0.1}s`); // 100ms per element

    // Add 'show' class to start the animation
    requestAnimationFrame(() => {
      el.classList.add("show");
      el.classList.remove("hidden");
    });
  });
}

sections.forEach((section) => {
  observer.observe(section);
});
