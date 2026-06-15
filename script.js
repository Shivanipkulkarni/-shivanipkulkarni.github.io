// Auto-update footer year
document.querySelector(".footer-year").textContent = new Date().getFullYear();

// Copy email to clipboard when clicked
function copyEmail() {
  const email = "shivanikulkarni0705@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    const card = document.getElementById("emailCard");
    const valueSpan = card.querySelector(".contact-value");
    const original = valueSpan.textContent;
    valueSpan.textContent = "Copied to clipboard!";
    setTimeout(() => {
      valueSpan.textContent = original;
    }, 1500);
  });
}

// Highlight active nav link based on scroll position
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href") === `#${current}`) {
      link.style.color = "#7ee787";
    }
  });
});

// Mouse-follow spotlight effect
const spotlight = document.getElementById("spotlight");

if (spotlight) {
  document.addEventListener("mousemove", (e) => {
    spotlight.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  });

  document.addEventListener("mouseleave", () => {
    spotlight.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    spotlight.style.opacity = "1";
  });
}
