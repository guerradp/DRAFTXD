// script.js


// Toggle Burger Menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
}


// Contact Form Submission
const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");


contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formResponse.textContent = `Salamat, ${contactForm.name.value}, for reaching out! We'll respond soon.`;
  contactForm.reset();
});