/**
 * theme.js — Dark / Light mode toggle
 * =====================================
 * Reads the stored preference from localStorage,
 * applies it on load, and toggles on button click.
 */

const ThemeManager = (() => {
  const STORAGE_KEY = "portfolio-theme";
  const htmlEl      = document.documentElement;

  /** Apply a theme to <html> and persist it */
  function applyTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    APP_DATA.currentTheme = theme;
  }

  /** Toggle between dark and light */
  function toggle() {
    const next = APP_DATA.currentTheme === "dark" ? "light" : "dark";
    applyTheme(next);
  }

  /** Initialise: apply saved/default theme and wire up button */
  function init() {
    applyTheme(APP_DATA.currentTheme);

    const btn = document.getElementById("theme-toggle");
    if (btn) btn.addEventListener("click", toggle);
  }

  return { init, toggle, applyTheme };
})();
