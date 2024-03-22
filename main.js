// Header Toggle
const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', (e) => {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  menuBtn.classList.toggle('fa-xmark');
});

// Typing Effect
const typed = new Typed('.auto-input', {
  strings: [
    'Freelancer',
    'UI/UX Designer',
    'Social Media Manager',
    'Content Writer',
  ],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
});
