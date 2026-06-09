/**
 * form.js — Contact form validation & submission
 * ================================================
 * Ahmed Habouba Amine — ahmedhabouba.com@gmail.com
 *
 * TO ENABLE REAL SUBMISSIONS:
 *   1. Créer un compte sur https://formspree.io (gratuit)
 *   2. Remplacer YOUR_FORM_ID par ton ID Formspree
 *   3. Mettre USE_FORMSPREE = true
 */

const FormManager = (() => {
  const USE_FORMSPREE      = false;
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

  const form      = document.getElementById("contact-form");
  const submitBtn = document.getElementById("form-submit");
  const statusEl  = document.getElementById("form-status");

  function getMessages() {
    return APP_DATA.formMessages[APP_DATA.currentLang] || APP_DATA.formMessages.fr;
  }

  function showFieldError(field, message) {
    field.classList.add("error");
    const errorEl = field.parentElement.querySelector(".form-error");
    if (errorEl) errorEl.textContent = message;
  }

  function clearFieldError(field) {
    field.classList.remove("error");
    const errorEl = field.parentElement.querySelector(".form-error");
    if (errorEl) errorEl.textContent = "";
  }

  function setStatus(message, type) {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className = `form-status ${type}`;
  }

  function clearStatus() {
    if (statusEl) { statusEl.textContent = ""; statusEl.className = "form-status"; }
  }

  function validateField(field) {
    const msg  = getMessages();
    const name = field.getAttribute("name");
    const val  = field.value.trim();
    clearFieldError(field);

    if (name === "name" && !val) { showFieldError(field, msg.nameRequired); return false; }
    if (name === "email") {
      if (!val) { showFieldError(field, msg.emailRequired); return false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { showFieldError(field, msg.emailInvalid); return false; }
    }
    if (name === "subject" && !val) { showFieldError(field, msg.subjectRequired); return false; }
    if (name === "message") {
      if (!val) { showFieldError(field, msg.messageRequired); return false; }
      if (val.length < 10) { showFieldError(field, msg.messageTooShort); return false; }
    }
    return true;
  }

  function validateAll() {
    const fields = form.querySelectorAll("input, textarea");
    let allValid = true;
    fields.forEach((f) => { if (!validateField(f)) allValid = false; });
    return allValid;
  }

  async function submitFormspree(data) {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method:  "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body:    JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Network error");
  }

  function submitMailto(data) {
    const subject = encodeURIComponent(data.subject);
    const body    = encodeURIComponent(
      `Nom: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    );
    window.location.href = `mailto:ahmedhabouba.com@gmail.com?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    clearStatus();
    if (!validateAll()) return;

    const msg  = getMessages();
    const data = {
      name:    form.querySelector('[name="name"]').value.trim(),
      email:   form.querySelector('[name="email"]').value.trim(),
      subject: form.querySelector('[name="subject"]').value.trim(),
      message: form.querySelector('[name="message"]').value.trim(),
    };

    const btnLabel = submitBtn.querySelector(".btn-label");
    if (btnLabel) btnLabel.textContent = msg.sending;
    submitBtn.disabled = true;

    try {
      if (USE_FORMSPREE) {
        await submitFormspree(data);
      } else {
        await new Promise((r) => setTimeout(r, 600));
        submitMailto(data);
      }
      setStatus(msg.success, "success");
      form.reset();
    } catch {
      setStatus(msg.error, "error");
    } finally {
      submitBtn.disabled = false;
      if (btnLabel) {
        btnLabel.textContent = APP_DATA.currentLang === "fr" ? "Envoyer" : "Send Message";
      }
    }
  }

  function init() {
    if (!form) return;
    form.addEventListener("submit", handleSubmit);
    form.querySelectorAll("input, textarea").forEach((field) => {
      field.addEventListener("blur", () => validateField(field));
      field.addEventListener("input", () => {
        if (field.classList.contains("error")) validateField(field);
      });
    });
    document.addEventListener("languageChanged", () => {
      const btnLabel = submitBtn?.querySelector(".btn-label");
      if (btnLabel && !submitBtn.disabled) {
        btnLabel.textContent = APP_DATA.currentLang === "fr" ? "Envoyer" : "Send Message";
      }
      clearStatus();
    });
  }

  return { init };
})();
