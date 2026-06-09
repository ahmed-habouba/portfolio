/**
 * animations.js — Scroll-triggered reveal animations
 * ====================================================
 * Uses IntersectionObserver to add the .visible class
 * to elements with .reveal-up / .reveal-left / .reveal-right
 * and .stagger-children as they enter the viewport.
 */

const AnimationsManager = (() => {

  /* ── Reveal Observer ───────────────────────────────────── */
  function setupRevealObserver() {
    const revealEls = document.querySelectorAll(
      ".reveal-up, .reveal-left, .reveal-right, .stagger-children"
    );

    if (!revealEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Unobserve after reveal — no need to re-animate
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  /* ── Skill tag hover — set CSS level variable ──────────── */
  function setupSkillTags() {
    document.querySelectorAll(".skill-tag[data-level]").forEach((tag) => {
      const level = tag.getAttribute("data-level");
      tag.style.setProperty("--level", level);
    });
  }

  /* ── Parallax on hero glow (subtle) ───────────────────── */
  function setupParallax() {
    const glow = document.querySelector(".hero-glow");
    if (!glow) return;

    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY * 0.3;
          glow.style.transform = `translateY(${y}px)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ── Init ──────────────────────────────────────────────── */
  function init() {
    setupRevealObserver();
    setupSkillTags();
    setupParallax();
  }

  return { init };
})();
