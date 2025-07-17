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

  
//   const buttons = document.querySelectorAll('.tab-btn');
//   const panels = document.querySelectorAll('.product-panel');

//   buttons.forEach(btn => {
//     btn.addEventListener('click', () => {
//       const target = btn.getAttribute('data-tab');

//       // Switch tab classes
//       buttons.forEach(b => {
//         b.classList.toggle('bg-blue-600', b === btn);
//         b.classList.toggle('text-white', b === btn);
//         b.classList.toggle('bg-gray-200', b !== btn);
//         b.classList.toggle('text-gray-800', b !== btn);
//       });

//       // Show/hide content panels
//       panels.forEach(panel => {
//         panel.classList.toggle('hidden', panel.getAttribute('data-content') !== target);
//       });
//     });
//   });


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


  