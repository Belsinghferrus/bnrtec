

//AOS ANIMATION
AOS.init({
  duration: 1000, // animation duration in ms
  // once: true,     // animate only once
});


//BNR TITLE
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