# Arsalan Khan — Developer Portfolio

- **Live Demo:** [Visit Site](https://arsalan-khan-dev.github.io/portfolio-website/)
- **GitHub Repo:** [portfolio-website](https://github.com/arsalan-khan-dev/portfolio-website)

A clean, modern, and fully responsive developer portfolio built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, just fast and maintainable code.

---

## Preview

<!-- Replace the placeholder below with a real screenshot after deployment -->
![Portfolio Preview](public/profile-ak.jpg)

---

## Features

- **Dark / Light mode** — system preference detection with manual toggle, persisted to localStorage
- **Smooth scroll navigation** — fixed navbar with active link highlighting on scroll
- **Project showcase** — cards with live demo links, GitHub links, and tech stack badges
- **Rubi chatbot** — Smart chatbot with contextual response system
- **Working contact form** — powered by Formspree (no backend required)
- **Fully responsive** — mobile-first layout, tested from 320px to 1440px+
- **Accessible** — semantic HTML5, ARIA labels, keyboard navigation, screen reader support
- **Performance optimized** — lazy loading images, CSS custom properties, modular JS

---

## Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Markup     | HTML5 (semantic)                  |
| Styling    | CSS3 (custom properties, grid, flexbox) |
| Scripts    | Vanilla JavaScript (ES modules)   |
| Fonts      | Syne + DM Sans (Google Fonts)     |
| Forms      | Formspree                         |
| Deployment | GitHub Pages / Netlify            |

---

## Project Structure

```
portfolio/
├── index.html              # Main page (semantic HTML)
├── style.css               # All styles (CSS custom properties, dark mode)
├── main.js                 # Core interactions (nav, projects, form, reveal)
├── chatbot.js              # Rubi chatbot logic and UI
├── data/
│   └── projects.js         # Single source of truth for all project data
├── images/
│   ├── cert1–6.jpg         # Certificate images
│   ├── gallery1–6.jpg      # Gallery screenshots
│   └── pic1-1 to pic6-4   # Project screenshots
├── public/
│   └── profile-ak.jpg      # Profile photo
├── arsalan_resume.pdf       # Resume (replace with latest version)
└── AK-favicon.ico          # Favicon
```

---

## Setup & Local Development

No build tools needed. Just clone and open:

```bash
# Clone the repository
git clone https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
cd portfolio

# Open directly in browser
open index.html

# OR serve locally with any static server, e.g.:
npx serve .
# or
python3 -m http.server 8080
```

> **Note:** ES module imports (`type="module"`) require a server — direct `file://` opening may block scripts. Use `npx serve .` or VS Code Live Server.

---

## Configuration

### 1. Contact Form (Required)

Replace `YOUR_FORMSPREE_ID` in `main.js` with your real Formspree endpoint:

1. Sign up free at [formspree.io](https://formspree.io)
2. Create a new form → copy your endpoint ID
3. In `main.js`, update:
```javascript
const res = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
```

### 2. Project Data

All project information lives in `data/projects.js`. To add or edit a project:

```javascript
{
  id: 6,
  title: "Your Project Name",
  shortDescription: "One-line description for the card.",
  fullDescription: "Full description for the detail view.",
  technologies: ["React", "Node.js", "MongoDB"],
  liveUrl: "https://your-demo-url.netlify.app",  // null if not deployed
  githubUrl: "https://github.com/you/repo",       // null if private
  images: ["images/pic7-1.jpg", "images/pic7-2.jpg"],
  icon: "cart",   // Options: cart, medical, bot, school, car, travel
  featured: true, // true = highlighted card
}
```

### 3. Social Links

Update these links directly in `index.html` footer and chatbot responses in `chatbot.js`:

- LinkedIn: `https://www.linkedin.com/in/YOUR_PROFILE`
- GitHub: `https://github.com/YOUR_USERNAME`
- Instagram, Facebook, etc.

---

## Deployment

### GitHub Pages
```bash
# Push to main branch — GitHub Pages auto-deploys from root
git add .
git commit -m "Deploy portfolio"
git push origin main
```
Then enable Pages in repo Settings → Pages → Source: `main / root`.

### Netlify (Recommended — faster, custom domain easy)
1. Drag-and-drop your project folder at [netlify.com/drop](https://app.netlify.com/drop)
2. Or connect your GitHub repo for auto-deploy on push.

---

## Image Optimization (Do This Before Deploying)

Large images will slow your site significantly. Optimize all images using [Squoosh](https://squoosh.app):

1. Open Squoosh in browser (free, no install)
2. Upload each image → select **WebP** format → quality **75–80%**
3. Target: **under 150KB per image** (cert images can be ~100KB, project screenshots ~80KB)
4. Replace originals in `/images/` with optimized versions

---

## Recommended Next Projects (To Level Up)

These projects will make your portfolio significantly more competitive for frontend developer roles:

| Project | Stack | Why it matters |
|---------|-------|---------------|
| **GitHub Profile Explorer** | React + GitHub API | Shows API integration + React skills |
| **Task Manager (Kanban Board)** | React + localStorage | Demonstrates state management |
| **AI-Powered Chat** (upgrade Rubi) | HTML/CSS/JS + Claude/OpenAI API | Real AI, not keyword matching |
| **Weather Dashboard** | React + OpenWeatherMap API | Clean data visualization |
| **Personal Blog** | Next.js + MDX | Shows you know modern frameworks |

---

## License

MIT License — free to use as inspiration. Please don't deploy this as-is with my personal information.

---

## Contact

**Arsalan Khan**
- Email: Arsalankhang004.com
- LinkedIn: [linkedin.com/in/muhammad-arsalan-428336378](https://www.linkedin.com/in/-arsalan-khan/)
- GitHub: [github.com/lazyvirushere](https://github.com/arsalan-khan-dev)
- Instagram: [@bug_slayer_99](https://www.instagram.com/bug_slayer_99/)

---

*Built with  vanilla HTML, CSS, and JavaScript — because you don't always need a framework.*
