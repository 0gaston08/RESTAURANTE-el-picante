// Header background on scroll
const header = document.getElementById("site-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll(
  ".dish, .about-text, .hours-card, .section-head, .gallery-item, .review, .location-info, .map-wrap"
);
revealEls.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => observer.observe(el));

// Render star ratings as SVG (reliable across fonts)
const starPath =
  "M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 21 12 17.56 5.82 21 7 14.14l-5-4.87 7.1-1.01L12 2z";
document.querySelectorAll(".stars").forEach((el) => {
  const rating = Number(el.getAttribute("data-rating")) || 5;
  el.innerHTML = Array.from({ length: rating })
    .map(
      () =>
        `<svg class="star" viewBox="0 0 24 24" aria-hidden="true"><path d="${starPath}"/></svg>`
    )
    .join("");
});

// Reservation form
const form = document.getElementById("reserva-form");
const message = document.getElementById("form-message");

// Prevent past dates
const fecha = document.getElementById("fecha");
fecha.min = new Date().toISOString().split("T")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const personas = document.getElementById("personas").value;

  if (!nombre || !email || !fecha.value || !personas) {
    message.style.color = "#e0765b";
    message.textContent = "Por favor completa todos los campos.";
    return;
  }

  message.style.color = "";
  message.textContent = `¡Gracias, ${nombre}! Tu mesa para ${personas} está reservada. Te enviaremos la confirmación a ${email}.`;
  form.reset();
  fecha.min = new Date().toISOString().split("T")[0];
});
