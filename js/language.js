/**
 * language.js — EN / FR instant language switcher
 * =================================================
 * Elements with data-en / data-fr attributes have their
 * textContent swapped instantly — no page reload.
 *
 * Input placeholders use data-placeholder-en / data-placeholder-fr.
 * The lang button label updates automatically.
 */

const LanguageManager = (() => {
  const STORAGE_KEY = "portfolio-lang";

  /**
   * Walk the entire DOM and update every translated element.
   * @param {string} lang — 'en' or 'fr'
   */
  function applyLanguage(lang) {
    APP_DATA.currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    // Update all elements that carry data-en / data-fr
    document.querySelectorAll("[data-en], [data-fr]").forEach((el) => {
      const text = el.getAttribute(`data-${lang}`);
      if (text !== null) el.textContent = text;
    });

    // Update input / textarea placeholders
    document.querySelectorAll("[data-placeholder-en], [data-placeholder-fr]").forEach((el) => {
      const ph = el.getAttribute(`data-placeholder-${lang}`);
      if (ph !== null) el.setAttribute("placeholder", ph);
    });

    // Update the lang toggle button display
    const activeEl   = document.querySelector(".lang-active");
    const inactiveEl = document.querySelector(".lang-inactive");
    if (activeEl && inactiveEl) {
      activeEl.textContent   = lang.toUpperCase();
      inactiveEl.textContent = lang === "en" ? "FR" : "EN";
    }

    // Update <html lang=""> attribute for accessibility
    document.documentElement.setAttribute("lang", lang);

    // Notify typing effect to restart with new phrases
    document.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));
  }

  /** Toggle between 'en' and 'fr' */
  function toggle() {
    const next = APP_DATA.currentLang === "en" ? "fr" : "en";
    applyLanguage(next);
  }

  /** Initialise */
  function init() {
    // Apply the stored/default language
    applyLanguage(APP_DATA.currentLang);

    const btn = document.getElementById("lang-toggle");
    if (btn) btn.addEventListener("click", toggle);
  }

  return { init, toggle, applyLanguage };
})();
