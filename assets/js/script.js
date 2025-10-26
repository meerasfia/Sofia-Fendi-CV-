document.addEventListener("DOMContentLoaded", () => {

// scroll animation 
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.15, // how much of the element must be visible
  }
);

// to observe all sections 
document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});


  // theme toggle 
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
  }

  // popup for education & projects card 
  const popup = document.getElementById('popup-modal');
  const popupTitle = document.getElementById('popup-title');
  const popupImg = document.getElementById('popup-img');
  const popupText = document.getElementById('popup-text');
  const closeBtn = document.querySelector('.close');
  const allCards = document.querySelectorAll('.edu-card, .project-card');

  // to open the popup from the click of the card 
  allCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h3')?.textContent || 'No title';
      const imgSrc = card.querySelector('img')?.src || '';
      const desc = card.querySelector('.hidden-info p')?.textContent || '';

    });
  });

  // close popup
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  }

  // close popup when clicking outside content area
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});

// download cv function 
function downloadCV() {
  const element = document.getElementById('cv-section') || document.body;

  const opt = {
    margin:       [0.3, 0.3, 0.3, 0.3], // top, left, bottom, right
    filename:     'Sofia_Fendi_CV.pdf',
    image:        { type: 'jpeg', quality: 1 },
    html2canvas:  {
      scale: 2,              // improves sharpness
      useCORS: true,         // allows local images
      scrollX: 0,
      scrollY: 0,
      windowWidth: document.body.scrollWidth, // ensures full width
    },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  // temporarily center & set background white for PDF
  element.style.maxWidth = "800px";
  element.style.margin = "0 auto";
  element.style.backgroundColor = "#fff";

  // generate & download pdf
  html2pdf().set(opt).from(element).save();
}

// menu toggle for mobile viewing 
const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-link");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // change icon 
    if (navLinks.classList.contains("active")) {
      menuToggle.textContent = "✖";
    } else {
      menuToggle.textContent = "☰";
    }
});
 

  