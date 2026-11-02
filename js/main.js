const CLINIC = {
  phone: "+971 4 123 4567",
  phoneHref: "tel:+97141234567",
  whatsapp: "https://wa.me/97141234567",
  email: "hello@brightsmile.com",
  address: "123 Smile Avenue, Jumeirah, Dubai, UAE",
  hours: "Sat – Thu: 9:00 AM – 9:00 PM",
};

const NAV_LINKS = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About" },
  { href: "services.html", label: "Services" },
  { href: "advanced-care.html", label: "Advanced Care" },
  { href: "testimonials.html", label: "Testimonials" },
  { href: "contact.html", label: "Contact" },
];

const TOOTH_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3c-2.2 0-4 1.8-4 4.5 0 2 .8 3.5 1.5 5 .6 1.3.9 2.8 1.1 4.3.3 2.2.8 4.2 2 4.2 1.4 0 1.6-2 1.9-3.6.2-1.2.6-2.4 1.5-2.4s1.3 1.2 1.5 2.4c.3 1.6.5 3.6 1.9 3.6 1.2 0 1.7-2 2-4.2.2-1.5.5-3 1.1-4.3.7-1.5 1.5-3 1.5-5C21 4.8 19.2 3 17 3c-1.8 0-2.8 1-5 1S8.8 3 7 3z"/></svg>`;

const SOCIALS = `
  <a href="#" aria-label="Facebook"><i data-lucide="facebook"></i></a>
  <a href="#" aria-label="Instagram"><i data-lucide="instagram"></i></a>
  <a href="#" aria-label="Twitter"><i data-lucide="twitter"></i></a>
  <a href="#" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a>`;

const LOGO = `
  <a href="index.html" class="logo" aria-label="BrightSmile home">
    <span class="logo-icon">${TOOTH_SVG}</span>
    <span class="logo-text">Bright<span class="accent">Smile</span><small>Dental Clinic</small></span>
  </a>`;

const currentPage = location.pathname.split("/").pop() || "index.html";

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const links = NAV_LINKS.map(
    (l) => `<a href="${l.href}" class="${l.href === currentPage ? "active" : ""}">${l.label}</a>`
  ).join("");

  el.insertAdjacentHTML(
    "beforebegin",
    `<div class="topbar">
      <div class="container">
        <div class="topbar-info">
          <span><i data-lucide="map-pin"></i>${CLINIC.address}</span>
          <a href="mailto:${CLINIC.email}"><i data-lucide="mail"></i>${CLINIC.email}</a>
          <span><i data-lucide="clock"></i>${CLINIC.hours}</span>
        </div>
        <div class="topbar-social">${SOCIALS}</div>
      </div>
    </div>`
  );

  el.className = "site-header";
  el.innerHTML = `
    <div class="container nav">
      ${LOGO}
      <nav class="nav-links" id="nav-links">${links}</nav>
      <div class="nav-right">
        <a href="${CLINIC.phoneHref}" class="nav-phone">
          <span class="icon"><i data-lucide="phone-call"></i></span>
          <span><small>Call us anytime</small><strong>${CLINIC.phone}</strong></span>
        </a>
        <a href="contact.html" class="btn btn-primary nav-cta">Book Appointment</a>
        <button class="menu-toggle" id="menu-toggle" aria-label="Toggle menu"><i data-lucide="menu"></i></button>
      </div>
    </div>`;

  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.innerHTML = `<i data-lucide="${open ? "x" : "menu"}"></i>`;
    window.lucide?.createIcons();
  });

  const onScroll = () => el.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.className = "site-footer";
  el.innerHTML = `
    <div class="container footer-grid">
      <div>
        ${LOGO}
        <p style="margin-top:20px">Expert dental care for a healthier, brighter smile. Modern technology, gentle hands and a team that truly cares about you.</p>
        <div class="socials">${SOCIALS}</div>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>${NAV_LINKS.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h4>Our Services</h4>
        <ul>
          <li><a href="services.html">General Dentistry</a></li>
          <li><a href="services.html">Cosmetic Dentistry</a></li>
          <li><a href="services.html">Dental Implants</a></li>
          <li><a href="services.html">Braces & Aligners</a></li>
          <li><a href="services.html">Pediatric Dentistry</a></li>
          <li><a href="services.html">Emergency Care</a></li>
        </ul>
      </div>
      <div>
        <h4>Get In Touch</h4>
        <ul class="footer-contact">
          <li><i data-lucide="map-pin"></i>${CLINIC.address}</li>
          <li><i data-lucide="phone"></i><a href="${CLINIC.phoneHref}">${CLINIC.phone}</a></li>
          <li><i data-lucide="mail"></i><a href="mailto:${CLINIC.email}">${CLINIC.email}</a></li>
          <li><i data-lucide="clock"></i>${CLINIC.hours}<br />Friday: 2:00 PM – 9:00 PM</li>
        </ul>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© ${new Date().getFullYear()} BrightSmile Dental Clinic. All rights reserved.</span>
      <nav><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></nav>
    </div>`;

  document.body.insertAdjacentHTML(
    "beforeend",
    `<a href="${CLINIC.whatsapp}" class="whatsapp-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><i data-lucide="message-circle"></i></a>
     <button class="back-to-top" id="back-to-top" aria-label="Back to top"><i data-lucide="arrow-up"></i></button>`
  );

  const toTop = document.getElementById("back-to-top");
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => toTop.classList.toggle("show", window.scrollY > 600), { passive: true });
}

function animateCounter(el) {
  const target = Number(el.dataset.target);
  const suffix = el.dataset.suffix || "";
  const decimals = (el.dataset.target.split(".")[1] || "").length;
  const duration = 1800;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent =
      (decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString()) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initObservers() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        entry.target.querySelectorAll(".counter").forEach(animateCounter);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}

function initAppointmentForm() {
  const form = document.getElementById("appointment-form");
  if (!form) return;

  const service = new URLSearchParams(location.search).get("service");
  if (service && form.service) form.service.value = service;

  const dateInput = form.querySelector('input[type="date"]');
  if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = document.getElementById("form-msg");
    msg.textContent = `Thank you, ${form.name.value.trim()}! Your appointment request has been received. Our team will call you shortly to confirm.`;
    msg.style.display = "block";
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  document.querySelectorAll('[data-icon="tooth"]').forEach((el) => (el.outerHTML = TOOTH_SVG));
  window.lucide?.createIcons();
  initObservers();
  initAppointmentForm();
});
