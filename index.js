document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("#bnr-hero-heading");
  
    // Reset initial style
    heading.style.opacity = 0;
    heading.style.transform = "scale(0.95)";
    heading.style.transition = "all 1.2s ease-out";
  
    // Animate on load
    setTimeout(() => {
      heading.style.opacity = 1;
      heading.style.transform = "scale(1)";
    }, 300);
  });
  