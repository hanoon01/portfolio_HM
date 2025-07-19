// Initialize AOS animations
AOS.init({ duration: 1000, once: true });

// Dark mode toggle logic
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Scroll-to-top button logic
const scrollBtn = document.getElementById('scrollBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}