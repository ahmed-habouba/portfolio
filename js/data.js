/**
 * data.js — Static data & i18n configuration
 * ============================================
 * Toutes les phrases du typing effect et messages du formulaire
 * pour Ahmed Habouba Amine.
 */

const APP_DATA = {
  /**
   * Typing effect phrases — Hero section
   */
  typingPhrases: {
    en: [
      "Software Engineering Student",
      "Full-Stack Developer",
      "Web · Mobile · Desktop",
      "Problem Solver",
      "Open to Internships 🚀",
    ],
    fr: [
      "Élève Ingénieur en Informatique",
      "Développeur Full-Stack",
      "Web · Mobile · Desktop",
      "Résolveur de Problèmes",
      "En Recherche de Stage 🚀",
    ],
  },

  /**
   * Form validation messages per language
   */
  formMessages: {
    en: {
      nameRequired:    "Name is required.",
      emailRequired:   "Email is required.",
      emailInvalid:    "Please enter a valid email.",
      subjectRequired: "Subject is required.",
      messageRequired: "Message is required.",
      messageTooShort: "Message must be at least 10 characters.",
      sending:         "Sending...",
      success:         "✓ Message sent! I'll get back to you soon.",
      error:           "✗ Something went wrong. Please try again.",
    },
    fr: {
      nameRequired:    "Le nom est requis.",
      emailRequired:   "L'email est requis.",
      emailInvalid:    "Veuillez entrer un email valide.",
      subjectRequired: "Le sujet est requis.",
      messageRequired: "Le message est requis.",
      messageTooShort: "Le message doit contenir au moins 10 caractères.",
      sending:         "Envoi en cours...",
      success:         "✓ Message envoyé ! Je vous répondrai bientôt.",
      error:           "✗ Une erreur s'est produite. Veuillez réessayer.",
    },
  },

  currentLang:  localStorage.getItem("portfolio-lang")  || "fr",
  currentTheme: localStorage.getItem("portfolio-theme") || "dark",
};
