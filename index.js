

//AOS ANIMATION
AOS.init({
  duration: 1000, // animation duration in ms
  // once: true,   
});


document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-up");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -20px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // Only trigger once
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
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



  // // HERO IMAGE LOADING ANIMATION
  // const heroSection = document.getElementById('hero-section');
  // const images = [
  //   './assets/bnr-hero.webp',  
  //   './assets/Hero-2.jpg',
  //   './assets/Hero-3.jpeg'
  // ];

  // let current = 0;

  // // Start slideshow after slight delay to prioritize first paint
  // setTimeout(() => {
  //   setInterval(() => {
  //     current = (current + 1) % images.length;
  //     heroSection.style.backgroundImage = `url('${images[current]}')`;
  //   }, 3000);
  // }, 500); 





  // let imagesToLoad = 3; // number of slideshow images

  // function imageLoaded() {
  //   imagesToLoad--;
  //   if (imagesToLoad === 0) {
  //     // All images loaded
  //     const preloader = document.getElementById("preloader");
  //     preloader.style.opacity = "0";
  //     preloader.style.pointerEvents = "none";
  //     setTimeout(() => preloader.remove(), 500);

  //     // Reveal the slideshow
  //     document.querySelectorAll(".slideshow-img").forEach(img => {
  //       img.classList.remove("hidden");
  //       img.classList.add("block");
  //     });
  //   }
  // }

  const heroSection = document.getElementById('hero-section');
const images = [
  './assets/bnr-hero.webp',
  './assets/Hero-2.webp',
  './assets/Hero-3.webp'
];

let loadedImages = 0;

// Preload all images manually
images.forEach(src => {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    loadedImages++;
    if (loadedImages === images.length) {
      startSlideshow(); 
      hidePreloader();
    }
  };
});

// Hide preloader and reveal hero
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  preloader.style.pointerEvents = "none";
  setTimeout(() => preloader.remove(), 500);
}

// Start the slideshow
let current = 0;
function startSlideshow() {
  // Set initial background
  heroSection.style.backgroundImage = `url('${images[current]}')`;

  // Change every 3 seconds
  setInterval(() => {
    current = (current + 1) % images.length;
    heroSection.style.backgroundImage = `url('${images[current]}')`;
  }, 3000);
}
