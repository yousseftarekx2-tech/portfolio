# Youssef Tarek — Portfolio

A production-ready personal portfolio built from scratch with **semantic HTML5, CSS3 and vanilla JavaScript** — no frameworks, no build step. Just open `index.html`.

## ✨ Features

- Dark mode by default with a light mode toggle (remembered via `localStorage`)
- Signature hero: an animated "device + widget tree" visual and a typing Dart code snippet — built to reflect Flutter development itself, not a generic gradient hero
- Sticky, blurring navbar with active-section highlighting
- Scroll progress bar, back-to-top button, page loader
- Scroll-reveal animations and animated skill bars via `IntersectionObserver`
- Fully responsive: mobile, tablet, laptop, desktop, 4K
- Accessible: semantic landmarks, `aria-*` labels, visible focus states, skip link, `prefers-reduced-motion` respected
- SEO-ready: meta description/keywords, Open Graph, Twitter Card, canonical tag, favicon

## 📁 Folder Structure

```
Portfolio/
├── index.html
├── projects/
│   ├── task-app.html         # Task App project details page
│   └── weather-app.html      # Weather App project details page
├── css/
│   └── style.css
├── js/
│   ├── script.js             # all site interactivity
│   └── projects-data.js      # ⭐ single source of truth for project content (reference)
├── assets/
│   ├── resume/                # add Youssef_Tarek_CV.pdf here
│   ├── icons/
│   │   └── favicon.svg
│   └── projects/
│       ├── task_app/
│       │   ├── hero.png              # placeholder — replace with real screenshot
│       │   ├── screenshot-1.png .. 4.png
│       │   └── demo-poster.png       # replace demo.mp4 at the same folder to add real video
│       └── weather_app/
│           └── (same structure as task_app)
└── README.md
```

### Projects section (home page)

- **Completed projects:** Task App, Weather App — each has a `View Project` button (opens its details page) and a separate `GitHub` button (opens the repo). Clicking the card body itself does **not** navigate — only the explicit buttons do.
- **Currently Building:** Personal Finance App, Medical Prescription / Medicine App — shown with an "In Progress" badge, no links yet (per your note that this info is temporary).
- `js/projects-data.js` documents every field for each project (title, description, status, technologies, image paths, overview/problem/solution/features, screenshots, video, technical highlights, GitHub URL) in one place. **Edit that file first** when project details change, then mirror the same values into the corresponding HTML (home page card + `projects/<slug>.html`) — the file tells you exactly which fields map to which UI text.

### Project Details pages

Each completed project has its own static page at `projects/<slug>.html` with: Hero (title, status, tech tags, GitHub button, large placeholder image), Project Overview (Overview / Problem / Solution / Key Features), Screenshots gallery (4 placeholders), Project Demo (video placeholder + play button, ready for a real `demo.mp4`), and Technical Highlights. All image/video paths point at local files under `assets/projects/<slug>/` — replace those files directly and the pages update automatically, no HTML changes needed.

## ⚠️ Placeholders you should replace before publishing

A few fields couldn't be filled with real data and were left as clearly-marked placeholders:

| Location | Placeholder | Replace with |
|---|---|---|
| Contact section + footer | `youssef.tarek@example.com` | your real email |
| Contact section | `+20 100 000 0000` | your real phone number (or remove the row) |
| `index.html` `<head>` | `https://yousseftarek.dev/` | your real domain, once you have one |
| `assets/resume/` | *(empty)* | add `Youssef_Tarek_CV.pdf` — the download button already points here |
| Weather App card + details page | "GitHub link coming soon" (disabled) | swap in the real repo URL once you send it — see `js/projects-data.js` |
| `assets/projects/task_app/` and `weather_app/` | generated placeholder PNGs | replace `hero.png`, `screenshot-1..4.png`, `demo-poster.png` and add `demo.mp4` — same filenames, same folder |
| Contact form | front-end only | wire it to a real backend (e.g. Formspree, EmailJS, or your own API) if you want it to actually send messages |

## 🎨 Design tokens (edit in `css/style.css` under `:root`)

```css
--primary: #4F46E5;
--secondary: #7C3AED;
--accent: #60A5FA;
--code-accent: #34D399;   /* extra accent used for "code comment" labels */
--bg: #0F172A;            /* dark background */
```

Light theme overrides live in `[data-theme="light"]` right below.

## 🧩 Sections included

Hero · About · Skills (animated bars) · Services · Projects (TaskFlow, T-Shop, DocDoc, Juice Shop Website) · Experience & Education · Contact · Footer

## 🚀 Running locally

No build tools needed — just open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## 📝 Notes on content

Copy was written directly from your real background (Flutter/Dart focus, TaskFlow, T-Shop/e-commerce app, Computer Science studies at Al Nahda University, GitHub & LinkedIn). Nothing was invented — no fake employers, clients, or certifications. Update the placeholders above and this is ready to publish.
