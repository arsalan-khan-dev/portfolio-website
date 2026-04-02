// ============================================================
// main.js — Core portfolio interactions
// ============================================================

import { projects, projectIcons } from "./projects.js";

// ── Dark Mode ──────────────────────────────────────────────

const themeToggle = document.getElementById("themeToggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme(dark) {
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  localStorage.setItem("theme", dark ? "dark" : "light");
}

const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme ? savedTheme === "dark" : prefersDark.matches);

themeToggle.addEventListener("click", () => {
  setTheme(document.documentElement.getAttribute("data-theme") !== "dark");
});

// ── Navbar ─────────────────────────────────────────────────

const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
}, { passive: true });

hamburger.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !expanded);
  navLinks.classList.toggle("active");
});

// Close mobile menu on nav link click
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.setAttribute("aria-expanded", false);
  });
});

// Smooth scroll — offset for fixed navbar height
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.length <= 1) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    const offset = navbar.offsetHeight + 16;
    window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navAnchors = navLinks.querySelectorAll("a[href^='#']");

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach(s => sectionObserver.observe(s));

// ── Hero typewriter ────────────────────────────────────────

const taglines = [
  "Building web experiences that matter.",
  "Full-Stack Developer & AI Enthusiast.",
  "Turning ideas into clean, working code.",
];
let taglineIndex = 0;
const taglineEl = document.getElementById("heroTagline");

function cycleTagline() {
  taglineEl.style.opacity = "0";
  taglineEl.style.transform = "translateY(8px)";
  setTimeout(() => {
    taglineEl.textContent = taglines[taglineIndex];
    taglineEl.style.opacity = "1";
    taglineEl.style.transform = "translateY(0)";
    taglineIndex = (taglineIndex + 1) % taglines.length;
  }, 400);
}

taglineEl.textContent = taglines[0];
taglineIndex = 1;
setInterval(cycleTagline, 3200);

// ── Projects ───────────────────────────────────────────────

function buildProjectCard(project) {
  const techBadges = project.technologies
    .map(t => `<span class="tech-badge">${t}</span>`)
    .join("");

  const liveBtn = project.liveUrl
    ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="proj-btn proj-btn--live" aria-label="View ${project.title} live demo">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        Live Demo
      </a>`
    : `<span class="proj-btn proj-btn--soon">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Coming Soon
      </span>`;

  const githubBtn = project.githubUrl
    ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="proj-btn proj-btn--github" aria-label="View ${project.title} source on GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        GitHub
      </a>`
    : "";

  const previewImg = project.images[0]
    ? `<img src="${project.images[0]}" alt="${project.title} screenshot" loading="lazy" class="proj-img">`
    : `<div class="proj-img-placeholder"><span>${projectIcons[project.icon] || ""}</span></div>`;

  return `
    <article class="proj-card${project.featured ? " proj-card--featured" : ""}" aria-label="${project.title}">
      <div class="proj-img-wrap">
        ${previewImg}
        <div class="proj-img-overlay">
          <span class="proj-icon">${projectIcons[project.icon] || ""}</span>
        </div>
      </div>
      <div class="proj-body">
        <h3 class="proj-title">${project.title}</h3>
        <p class="proj-desc">${project.shortDescription}</p>
        <div class="proj-tech">${techBadges}</div>
        <div class="proj-actions">
          ${liveBtn}
          ${githubBtn}
        </div>
      </div>
    </article>`;
}

const grid = document.getElementById("projectsGrid");
if (grid) {
  grid.innerHTML = projects.map(buildProjectCard).join("");
}

// ── Contact Form (Formspree) ───────────────────────────────

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async e => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = "Sending…";

    try {
      // ⚠️  Replace YOUR_FORMSPREE_ID below with your actual Formspree endpoint
      // Sign up free at https://formspree.io → create form → get endpoint
      const res = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(contactForm),
      });

      if (res.ok) {
        formStatus.textContent = "Message sent! I'll get back to you within 24 hours.";
        formStatus.className = "form-status form-status--success";
        contactForm.reset();
      } else {
        throw new Error("Server error");
      }
    } catch {
      formStatus.textContent = "Something went wrong. Please email me directly at khancreations99@gmail.com";
      formStatus.className = "form-status form-status--error";
    } finally {
      btn.disabled = false;
      btn.textContent = "Send Message";
      formStatus.hidden = false;
      setTimeout(() => { formStatus.hidden = true; }, 7000);
    }
  });
}

// ── Scroll reveal ──────────────────────────────────────────

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -60px 0px" });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));