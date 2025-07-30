// ✅ Smooth scroll ONLY for in-page anchors
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');

    // Only handle smooth scroll for in-page links starting with #
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // ✅ Else, allow browser to do normal navigation (e.g. to /about)
  });
});

// ✅ Simple form validation
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
      e.preventDefault(); // Prevent form submission
      alert('Please fill in all fields before submitting.');
    }
  });
}

// ✅ Redirect to home page if the user refreshes any route other than "/"
if (window.location.pathname !== "/") {
  // Redirect to home page on page refresh
  window.addEventListener('load', () => {
    window.location.href = "/";  // Redirect to home page
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
