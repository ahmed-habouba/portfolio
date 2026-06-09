/**
 * typing.js — Typewriter / typing effect for hero section
 * =========================================================
 * Cycles through APP_DATA.typingPhrases for the current language.
 * Restarts automatically when the language changes.
 */

const TypingEffect = (() => {
  const typedEl  = document.getElementById("typed-text");
  const SPEED_TYPE  = 65;   // ms per character when typing
  const SPEED_ERASE = 35;   // ms per character when erasing
  const PAUSE_END   = 2200; // ms to wait at the end of a phrase
  const PAUSE_START = 400;  // ms to wait before typing next phrase

  let phraseIndex = 0;
  let charIndex   = 0;
  let isErasing   = false;
  let timeoutId   = null;

  /* ── Get current phrases ───────────────────────────────── */
  function getPhrases() {
    const lang = APP_DATA.currentLang;
    return APP_DATA.typingPhrases[lang] || APP_DATA.typingPhrases.en;
  }

  /* ── Core tick ─────────────────────────────────────────── */
  function tick() {
    if (!typedEl) return;

    const phrases = getPhrases();
    const currentPhrase = phrases[phraseIndex];

    if (!isErasing) {
      // ── Typing
      charIndex++;
      typedEl.textContent = currentPhrase.substring(0, charIndex);

      if (charIndex === currentPhrase.length) {
        // Finished typing — pause then erase
        isErasing = true;
        timeoutId = setTimeout(tick, PAUSE_END);
        return;
      }
    } else {
      // ── Erasing
      charIndex--;
      typedEl.textContent = currentPhrase.substring(0, charIndex);

      if (charIndex === 0) {
        // Finished erasing — move to next phrase
        isErasing = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        timeoutId = setTimeout(tick, PAUSE_START);
        return;
      }
    }

    const speed = isErasing ? SPEED_ERASE : SPEED_TYPE;
    timeoutId = setTimeout(tick, speed);
  }

  /* ── Reset and restart ─────────────────────────────────── */
  function restart() {
    clearTimeout(timeoutId);
    phraseIndex = 0;
    charIndex   = 0;
    isErasing   = false;
    if (typedEl) typedEl.textContent = "";
    timeoutId = setTimeout(tick, PAUSE_START);
  }

  /* ── Init ──────────────────────────────────────────────── */
  function init() {
    if (!typedEl) return;

    // Start the effect
    timeoutId = setTimeout(tick, 800);

    // Restart on language change
    document.addEventListener("languageChanged", () => restart());
  }

  return { init, restart };
})();
