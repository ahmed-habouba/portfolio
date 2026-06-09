/**
 * main.js — App entry point
 * ==========================
 * Initialises all modules in the correct order
 * after the DOM is fully parsed.
 */

document.addEventListener("DOMContentLoaded", () => {

  /* 1. Theme (first — avoids flash of wrong theme) */
  ThemeManager.init();

  /* 2. Language (second — populates all text before paint) */
  LanguageManager.init();

  /* 3. Navigation (scroll, hamburger, progress bar) */
  NavigationManager.init();

  /* 4. Scroll-reveal animations */
  AnimationsManager.init();

  /* 5. Typing effect in hero */
  TypingEffect.init();

  /* 6. Contact form */
  FormManager.init();

  /* 7. Loading screen — hide after everything is ready */
  hideLoadingScreen();
});

/* ── Loading screen dismissal ──────────────────────────────── */
function hideLoadingScreen() {
  const screen = document.getElementById("loading-screen");
  if (!screen) return;

  // Wait for fonts + a short minimum display time
  const minDelay   = 1800; // ms — feels intentional, not laggy
  const startTime  = performance.now();

  function dismiss() {
    const elapsed = performance.now() - startTime;
    const remaining = Math.max(0, minDelay - elapsed);

    setTimeout(() => {
      screen.classList.add("hidden");
      // Remove from DOM after transition completes
      screen.addEventListener("transitionend", () => screen.remove(), { once: true });
    }, remaining);
  }

  // Use document.fonts.ready if available
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(dismiss);
  } else {
    dismiss();
  }
}
