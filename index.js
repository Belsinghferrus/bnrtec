

//AOS ANIMATION
AOS.init({
  duration: 1000, // animation duration in ms
  // once: true,     // animate only once
});


//BNR TITLE
// document.addEventListener("DOMContentLoaded", () => {
//   const heading = document.querySelector("#bnr-hero-heading");

//   const isMobile = window.innerWidth < 768;

//   // Reset style
//   heading.style.opacity = 0;
//   heading.style.transform = isMobile ? "translateY(30px) scale(0.9)" : "scale(0.95)";
//   heading.style.transition = "all 2s ease-out";

//   // Animate
//   setTimeout(() => {
//     heading.style.opacity = 1;
//     heading.style.transform = "translateY(0) scale(1)";
//   }, 200);
// });

document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("#bnr-hero-heading");
  const paragraph = document.querySelector("#bnr-hero-heading + p");
  const button = document.querySelector("#bnr-hero-heading").nextElementSibling.nextElementSibling;

  const isMobile = window.innerWidth < 768;

  // Apply base styles
  [heading, paragraph, button].forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = isMobile ? "translateY(20px)" : "translateY(10px)";
    el.style.transition = "all 1s ease-out";
  });

  // Animate each with delay
  setTimeout(() => {
    heading.style.opacity = 1;
    heading.style.transform = "translateY(0)";
  }, 200);

  setTimeout(() => {
    paragraph.style.opacity = 1;
    paragraph.style.transform = "translateY(0)";
  }, 500);

  setTimeout(() => {
    button.style.opacity = 1;
    button.style.transform = "translateY(0)";
  }, 750);
});

  


// PRODUCT TAB BUTTON
const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.product-panel');

tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active styles from all buttons
    tabs.forEach(t => {
      t.classList.remove('active-tab', 'bg-blue-600', 'text-white');
      t.classList.add('bg-gray-200', 'text-gray-800');
    });

    // Add active styles to clicked button
    btn.classList.add('active-tab', 'bg-[--primary]', 'text-white');
    btn.classList.remove('bg-gray-200', 'text-gray-800');

    // Show corresponding content panel
    const target = btn.getAttribute('data-tab');
    panels.forEach(p => {
      if (p.getAttribute('data-content') === target) {
        p.classList.remove('hidden');
      } else {
        p.classList.add('hidden');
      }
    });
  });
});



//MENU BUTTON FOR MOBILE
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
});
document.querySelectorAll("#mobileMenu nav a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
    });
  });



  // HERO IMAGE LOADING ANIMATION
  const heroSection = document.getElementById('hero-section');
  const images = [
    './assets/bnr-hero.webp',  
    './assets/Hero-2.jpg',
    './assets/Hero-3.jpeg'
  ];

  let current = 0;

  // Start slideshow after slight delay to prioritize first paint
  setTimeout(() => {
    setInterval(() => {
      current = (current + 1) % images.length;
      heroSection.style.backgroundImage = `url('${images[current]}')`;
    }, 3000);
  }, 500); 