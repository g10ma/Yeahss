document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("msg").textContent = "Thank you! Message sent.";
  this.reset();
});