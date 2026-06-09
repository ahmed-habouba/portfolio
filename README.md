# 🖤 Portfolio — Ahmed Habouba Amine

A modern, responsive portfolio website for a software engineering student with support for French and English, dark/light mode, and smooth interaction effects.

---

## 🚀 Overview

This portfolio is built with pure HTML, CSS, and JavaScript. It showcases a personal brand, technical skills, experience, certifications, projects, and a contact section.

Key highlights:
- Bilingual interface: French / English switcher
- Dark mode and light mode toggle
- Responsive layout with mobile navigation
- Animated hero typewriter effect
- IntersectionObserver scroll reveal animations
- Contact form validation with localized feedback
- Downloadable CV link

---

## 📁 Project Structure

```
portfolio_ahmed/
├── index.html
├── README.md
├── css/
│   ├── animations.css
│   ├── base.css
│   ├── components.css
│   ├── variables.css
│   ├── reset.css
│   ├── responsive.css
│   └── sections.css
├── js/
│   ├── data.js
│   ├── theme.js
│   ├── language.js
│   ├── navigation.js
│   ├── animations.js
│   ├── typing.js
│   └── form.js
├── assets/
│   ├── icons/
│   └── images/
└── cv/
    └── cv-ahmed-habouba.pdf
```

---

## 🔧 Main Features

- **Multilingual**: Switch content between French and English using the language button.
- **Theme toggle**: Dark and light mode selection persists with `localStorage`.
- **Animated hero section**: Typing effect driven by `js/data.js`.
- **Sticky navigation + mobile menu**: Smooth scrolling and accessible navigation for all screen sizes.
- **Scroll progress indicator**: Shows page progress while browsing.
- **Reveal animations**: Elements fade and slide into view with `IntersectionObserver`.
- **Contact form validation**: Form fields validate before submission and provide localized messages.
- **CV download**: Download button links to `cv/cv-ahmed-habouba.pdf`.

---

## 🛠 Run Locally

This project does not require build tools or package managers.

### Option 1 — VS Code Live Server
1. Open the `portfolio_ahmed` folder in VS Code.
2. Install the **Live Server** extension.
3. Open `index.html` with Live Server.

### Option 2 — Python HTTP server
```powershell
cd "c:\Users\iamam\OneDrive\Bureau\stage\pojects\portfolio_ahmed\portfolio_ahmed"
python -m http.server 8080
```
Then open `http://localhost:8080`.

### Option 3 — Node.js `serve`
```powershell
cd "c:\Users\iamam\OneDrive\Bureau\stage\pojects\portfolio_ahmed\portfolio_ahmed"
npx serve .
```

> Do not open `index.html` directly with a `file://` URL. Use a local server for proper font, script, and browser API behavior.

---

## ✏️ How to Customize

### Update personal branding
- Replace `Habouba Ahmed Amine` throughout `index.html`.
- Update the hero title, about section, and navigation labels if needed.

### Replace the profile image
- Add your profile image to `assets/images/`.
- Replace the avatar placeholder in the hero section with an `<img>` tag.

### Update the CV
- Place your CV in the `cv/` folder.
- Update the download link in `index.html` if the filename changes.

### Change typing phrases
- Edit hero phrases in `js/data.js` under `typingPhrases.en` and `typingPhrases.fr`.

### Update skills and experience
- Modify sections in `index.html` for skills, experience, education, projects, and certifications.

### Update theme colors
- Change accent colors and typography in `css/variables.css`.

---

## 📌 Notes

- `js/main.js` initializes the page behavior.
- `js/theme.js` manages the theme toggle and localStorage state.
- `js/language.js` switches language labels and content.
- `js/navigation.js` handles menu toggling and scroll behavior.
- `js/animations.js` manages reveal-on-scroll animations.
- `js/typing.js` updates the hero text with animated typing.
- `js/form.js` validates the contact form and provides success/error messages.

---

## 📦 Deployment

This site is ready for static hosting:
- GitHub Pages
- Netlify
- Vercel
- Any static file host

Push the repository, then configure the hosting service to serve the `index.html` file from the project root.

---

## 💡 Quick Improvements

- Add real project screenshots in `assets/images/`.
- Update project URLs to live demos and repositories.
- Replace placeholder credentials with your real GitHub/LinkedIn/email links.
- Keep both English and French translations in sync.

---

Made for a clean, modern portfolio with fast performance and polished interaction.
