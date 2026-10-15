const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const detailsSection = document.querySelector(".details");

if (detailsSection && "IntersectionObserver" in window) {
  detailsSection.classList.add("reveal-ready");

  const detailsObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      detailsSection.classList.add("is-visible");
      detailsObserver.disconnect();
    }
  }, { threshold: 0.15 });

  detailsObserver.observe(detailsSection);
}