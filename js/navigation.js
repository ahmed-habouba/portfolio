/**
 * navigation.js — Navbar behaviour
 * ==================================
 * • Scrolled class on navbar
 * • Scroll progress bar
 * • Active nav link highlighting
 * • Mobile hamburger menu
 * • Back-to-top button
 * • Smooth-scroll for all anchor links
 */

const NavigationManager = (() => {
  /* ── Elements ──────────────────────────────────────────── */
  const navbar       = document.getElementById("navbar");
  const hamburger    = document.getElementById("hamburger");
  const mobileMenu   = document.getElementById("mobile-menu");
  const progressBar  = document.getElementById("scroll-progress");
  const backToTop    = document.getElementById("back-to-top");
  const navLinks     = document.querySelectorAll(".nav-link");
  const sections     = document.querySelectorAll("section[id]");

  /* ── Scroll handler ────────────────────────────────────── */
  function onScroll() {
    const scrollY   = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress  = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    // Progress bar
    if (progressBar) progressBar.style.width = `${progress}%`;

    // Navbar shadow
    if (navbar) navbar.classList.toggle("scrolled", scrollY > 20);

    // Back-to-top visibility
    if (backToTop) {
      if (scrollY > 400) {
        backToTop.hidden = false;
      } else {
        backToTop.hidden = true;
      }
    }

    // Active section highlighting
    highlightActiveSection(scrollY);
  }

  /* ── Highlight active nav link ─────────────────────────── */
  function highlightActiveSection(scrollY) {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop    = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${currentSection}`);
    });
  }

  /* ── Mobile menu ───────────────────────────────────────── */
  function toggleMobileMenu() {
    const isOpen = hamburger.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen);
    mobileMenu.hidden = !isOpen;

    // Add/remove open class for CSS transition
    if (isOpen) {
      mobileMenu.removeAttribute("hidden");
      // Allow paint before adding open class
      requestAnimationFrame(() => mobileMenu.classList.add("open"));
    } else {
      mobileMenu.classList.remove("open");
    }
  }

  function closeMobileMenu() {
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", false);
    mobileMenu.classList.remove("open");
    mobileMenu.hidden = true;
  }

  /* ── Smooth scroll ─────────────────────────────────────── */
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const target = document.querySelector(anchor.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        closeMobileMenu();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  /* ── Init ──────────────────────────────────────────────── */
  function init() {
    // Scroll listener (throttled via requestAnimationFrame)
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => { onScroll(); ticking = false; });
        ticking = true;
      }
    }, { passive: true });

    // Hamburger
    if (hamburger) hamburger.addEventListener("click", toggleMobileMenu);

    // Close mobile menu when a link is clicked
    document.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    // Back to top
    if (backToTop) {
      backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Close mobile menu on outside click
    document.addEventListener("click", (e) => {
      if (
        mobileMenu &&
        !mobileMenu.hidden &&
        !navbar.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });

    // Close mobile menu on resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) closeMobileMenu();
    });

    setupSmoothScroll();

    // Initial call
    onScroll();
  }

  return { init };
})();
