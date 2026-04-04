# Mohammed Ashiq Ali K — Portfolio Website

A production-ready personal portfolio built with **Nuxt 3**, **Vue.js**, and **Tailwind CSS**.

## Tech Stack

- **Framework**: Nuxt 3 (Vue 3 Composition API)
- **Styling**: Tailwind CSS + custom CSS variables
- **Fonts**: Syne (display) · Fraunces (serif/italic) · DM Mono (monospace)
- **Animations**: CSS transitions, IntersectionObserver for scroll reveals
- **Deployment**: Ready for Vercel, Netlify, or any Node host

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero, featured projects, CTA |
| `/about` | Bio, education, certifications |
| `/experience` | Timeline of work history |
| `/projects` | Filterable project grid |
| `/skills` | Tech stack with proficiency bars |
| `/contact` | Contact info + contact form |

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Generate static site
npm run generate
```

## Customization Checklist

### Personal Info
- [ ] Update LinkedIn URL in `TheNavbar.vue`, `TheFooter.vue`, and `contact.vue`
- [ ] Add GitHub profile link to `TheFooter.vue`
- [ ] Add your resume PDF to `/public/Resume_Ashiq.pdf`
- [ ] Update phone/email in `contact.vue`

### Content
- [ ] Add real project screenshots (replace placeholder cards in `/projects`)
- [ ] Add a profile photo in `/about` — replace the stat cards area with a photo component
- [ ] Adjust skill proficiency percentages in `skills.vue`

### Contact Form
The form in `contact.vue` is UI-only. Connect it to one of:

**Option A — Formspree (easiest, free tier)**
```bash
# In contact.vue, replace submitForm():
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

**Option B — Netlify Forms**
Add `data-netlify="true"` attribute to the `<form>` tag and deploy to Netlify.

**Option C — EmailJS**
```bash
npm install @emailjs/browser
# Then call emailjs.send() inside submitForm()
```

### Deployment

**Vercel (recommended)**
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm run generate
# Upload /dist folder to Netlify
```

**Custom server**
```bash
npm run build
node .output/server/index.mjs
```

## Project Structure

```
portfolio/
├── app.vue               # Root app with cursor glow
├── nuxt.config.ts        # Nuxt configuration
├── tailwind.config.js    # Tailwind theme
├── assets/css/main.css   # Global styles
├── composables/
│   └── useReveal.js      # Scroll-reveal utility
├── components/
│   ├── TheNavbar.vue     # Fixed navigation
│   └── TheFooter.vue     # Footer
└── pages/
    ├── index.vue         # Home / Hero
    ├── about.vue         # About me
    ├── experience.vue    # Work timeline
    ├── projects.vue      # Project grid
    ├── skills.vue        # Skills & expertise
    └── contact.vue       # Contact form
```

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--ink` | `#0a0a0a` | Background |
| `--paper` | `#f5f0e8` | Primary text |
| `--accent` | `#c8f04a` | Highlights, CTAs |
| `--muted` | `#6b6b6b` | Secondary text |
| Font Display | Syne | Headings, nav |
| Font Serif | Fraunces | Italic accents |
| Font Mono | DM Mono | Labels, code, tags |
