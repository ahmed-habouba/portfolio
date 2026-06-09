# 🖤 Alex Dupont — Developer Portfolio

A modern, bilingual (EN/FR), dark/light-mode portfolio website for a software engineering student.

---

## 📁 Project Structure

```
portfolio/
├── index.html                  ← Main HTML file (all sections)
│
├── css/
│   ├── variables.css           ← Design tokens (colors, fonts, spacing…)
│   ├── reset.css               ← Modern CSS reset
│   ├── base.css                ← Body, typography, buttons, cards, utilities
│   ├── components.css          ← Navbar, loading screen, mobile menu
│   ├── sections.css            ← Hero, About, Skills, Experience, Projects…
│   ├── animations.css          ← Keyframes + scroll-reveal classes
│   └── responsive.css          ← Breakpoints (1024px, 768px, 480px)
│
├── js/
│   ├── data.js                 ← Typing phrases, form messages, app state
│   ├── theme.js                ← Dark/light toggle + localStorage
│   ├── language.js             ← EN/FR switcher + localStorage
│   ├── navigation.js           ← Navbar, scroll progress, hamburger
│   ├── animations.js           ← IntersectionObserver reveal
│   ├── typing.js               ← Typewriter effect
│   ├── form.js                 ← Contact form validation + submission
│   └── main.js                 ← Entry point — initialises everything
│
├── assets/
│   ├── images/
│   │   ├── profile.jpg         ← YOUR profile photo (replace placeholder)
│   │   ├── project1.jpg        ← Project screenshots
│   │   ├── project2.jpg
│   │   ├── project3.jpg
│   │   └── project4.jpg
│   └── icons/                  ← Optional: favicon.ico, apple-touch-icon.png
│
├── cv/
│   └── cv-alex-dupont.pdf      ← YOUR CV PDF (linked to Download CV button)
│
└── README.md
```

---

## 🚀 Running Locally

No build tools, no dependencies — pure HTML/CSS/JS.

### Option A — VS Code Live Server (recommended)
1. Open the `portfolio/` folder in VS Code
2. Install the **Live Server** extension (ritwickdey.liveserver)
3. Right-click `index.html` → **Open with Live Server**
4. Browser opens at `http://127.0.0.1:5500`

### Option B — Python (any machine)
```bash
cd portfolio
python3 -m http.server 8080
# Open http://localhost:8080
```

### Option C — Node.js (npx)
```bash
cd portfolio
npx serve .
# Follow the URL printed in your terminal
```

> ⚠️ Do NOT open `index.html` directly as a `file://` URL — fonts and
> some browser APIs behave differently. Always use a local server.

---

## ✏️ Replacing Placeholder Content

### 1. Your Name & Title
Open `index.html` and search for `Alex Dupont` — replace every occurrence.

### 2. Profile Photo
```html
<!-- BEFORE (in the hero section): -->
<div class="avatar-placeholder">AD</div>

<!-- AFTER: -->
<img src="assets/images/profile.jpg" alt="Your Name" />
```
- Recommended size: **400×400 px**, square, JPG or WebP.

### 3. Download CV
- Place your PDF at `cv/your-name-cv.pdf`
- Update the link in `index.html`:
```html
<a href="cv/your-name-cv.pdf" class="btn btn-outline" download>
```

### 4. About Me Text
Find the `#about` section in `index.html`.
Each `<p>` has `data-en="..."` and `data-fr="..."` attributes — update both.

### 5. Skills
In the `#skills` section, add/remove `<span class="skill-tag" data-level="85">` elements.
`data-level` (0–100) controls the background fill indicator.

### 6. Experience & Education
Copy/paste timeline/edu-card blocks and update the text content.
Remember to update both `data-en` and `data-fr` attributes.

### 7. Projects
For each project card:
- Replace `<div class="project-img-placeholder" data-letter="X">` with
  `<img src="assets/images/project1.jpg" alt="...">`
- Update title, description, tech badges
- Update GitHub and live demo URLs

### 8. Certifications
Update the `cert-title`, `cert-issuer`, `cert-date` and the `href` on `cert-link`.

### 9. Contact Details
Update all occurrences of:
- `alex.dupont@polytechnique.fr` → your email
- `github.com/alexdupont` → your GitHub
- `linkedin.com/in/alexdupont` → your LinkedIn

Also update `form.js` line:
```js
window.location.href = `mailto:alex.dupont@polytechnique.fr?subject=...`
```

### 10. Typing Effect Phrases
Open `js/data.js` → edit the `typingPhrases` arrays for both `en` and `fr`.

### 11. Meta SEO Tags
In `<head>` of `index.html`, update:
```html
<title>Your Name — Software Engineering Student</title>
<meta name="description" content="Your description" />
<meta property="og:title" content="Your Name — ..." />
<meta property="og:url" content="https://yourusername.github.io" />
```

### 12. Enable Real Form Submissions (optional)
1. Sign up at https://formspree.io (free tier: 50 submissions/month)
2. Create a form and copy your form ID
3. In `js/form.js`:
```js
const USE_FORMSPREE      = true;   // ← change to true
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
```

---

## 🌐 Deploying to GitHub Pages

### Step 1 — Create a GitHub repository
1. Go to https://github.com/new
2. Name it `portfolio` (or `yourusername.github.io` for a root URL)
3. Set it to **Public**
4. Do NOT initialise with README (you'll push your own)

### Step 2 — Initialise Git locally
```bash
cd portfolio
git init
git add .
git commit -m "Initial commit: portfolio v1"
```

### Step 3 — Connect and push
```bash
git remote add origin https://github.com/YOURUSERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 4 — Enable GitHub Pages
1. Go to your repo on GitHub
2. **Settings** → **Pages** (left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait ~60 seconds, then visit:
   `https://YOURUSERNAME.github.io/portfolio`

### Step 5 — Custom domain (optional)
If you own a domain (e.g. `alexdupont.dev`):
1. In GitHub Pages settings, enter your domain under **Custom domain**
2. At your DNS provider, add:
   - 4 A records pointing to GitHub's IPs
   - Or a CNAME record pointing to `YOURUSERNAME.github.io`
3. Tick **Enforce HTTPS**

### Updating your site after changes
```bash
git add .
git commit -m "Update: description of what you changed"
git push
```
GitHub Pages redeploys automatically within ~30 seconds.

---

## 🎨 Design Customisation

### Accent Color
Open `css/variables.css` and change `--accent`:
```css
/* Current: amber gold */
--accent: #d4a853;

/* Options: */
--accent: #58a6ff;   /* GitHub blue */
--accent: #3fb950;   /* GitHub green */
--accent: #f78166;   /* Coral */
--accent: #bc8cff;   /* Purple */
```

### Fonts
Currently using:
- **Display** (headings): Cormorant Garamond — elegant serif
- **Body**: Outfit — clean sans-serif
- **Mono**: DM Mono — code blocks

To change, update the Google Fonts `<link>` in `index.html` and the font variables in `css/variables.css`.

---

## ✅ Checklist Before Deployment

- [ ] Replace `Alex Dupont` with your name everywhere
- [ ] Add your profile photo to `assets/images/profile.jpg`
- [ ] Add your CV PDF to `cv/`
- [ ] Update all social links (GitHub, LinkedIn, email)
- [ ] Update About Me text (both EN and FR)
- [ ] Replace project placeholder images with real screenshots
- [ ] Update project titles, descriptions, and URLs
- [ ] Update certifications
- [ ] Update typing phrases in `js/data.js`
- [ ] Update SEO meta tags in `<head>`
- [ ] Test on mobile (Chrome DevTools → device toolbar)
- [ ] Test dark mode and light mode
- [ ] Test language switcher (EN ↔ FR)
- [ ] Test form submission (it will open your mail client by default)

---

## 🛠 Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Structure  | Semantic HTML5                    |
| Styling    | Pure CSS (variables, grid, flex)  |
| Scripts    | Vanilla JavaScript (ES6 modules)  |
| Fonts      | Google Fonts (preloaded)          |
| Animation  | CSS keyframes + IntersectionObserver |
| Hosting    | GitHub Pages (free, static)       |
| Form       | mailto fallback / Formspree       |

No frameworks. No build step. No npm install. Just open and run.

---

*Made with ♥ — Ready for your CV content!*
