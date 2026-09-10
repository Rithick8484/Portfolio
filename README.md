# Personal Developer Portfolio — Rithick P

A modern, high-performance, responsive Developer Portfolio built with **React.js (Vite)**, styled with an ultra-premium **Midnight Obsidian & Electric Violet / Warm Amber** Bento-Grid aesthetic. Designed for early-career software engineering roles, internships, and technical recruiter evaluations.

---

## 🎨 New Visual Identity & Color Palette

- **Canvas**: Midnight Obsidian (`#08090e`, `#0e1018`, `#141622`) with an ambient radial mesh
- **Primary Accent**: Electric Violet & Neon Indigo (`#8b5cf6`, `#a78bfa`, `#6366f1`)
- **Warm Highlight**: Sunset Amber & Tangerine (`#f59e0b`, `#fb923c`)
- **Success Accent**: Luminous Emerald (`#10b981`, `#34d399`)
- **Card Architecture**: High-tech Bento-Grid cards with frosted glass borders and subtle gradient reflections

---

## ✨ Features & Sections

1. **Floating Capsule Navbar**: Glassmorphic capsule navbar with smooth scrolling, active section tracking, and mobile drawer.
2. **Hero Section**:
   - Bold positioning: **Rithick P — Java Full-Stack Developer**
   - Interactive Java code inspector with switchable tabs (`Controller.java`, `Security.java`, `Predictor.java`)
   - Quick CTA buttons ("View Projects", "Contact Me", "Download Resume") and tech chips
3. **Bento About Me**: Framed profile photo, career objective, core competency checklist, and dynamic statistics grid.
4. **Skills Bento Grid**: Categorized cards (Languages, Frameworks, Tools, Technologies, Core Concepts) with modern icons and glowing pill badges.
5. **Interactive Projects Showcase**:
   - Filter tabs: **All Projects**, **Java & Backend**, **Security**, **Full Stack & Web**
   - Accurate project records: *Employee Management System*, *SHIELD – Secure Web Platform*, and *Bin Overflow Predictor API*
   - Detailed modal popup with Problem Statement, Solution, Architecture Flow, Feature checklists, and repository links
6. **Experience & Education Roadmap**: Luminous timeline cards for YELKOM TECHNOLOGIES Internship, B.Tech IT at Sri Krishna College of Technology (CGPA 7.96/10), HSC (64%), and SSLC (85%).
7. **Achievements & Coding (DSA)**:
   - Spotlight on **110+ Day LeetCode streak** with warm amber flame glow
   - 4 Problem solving pillars (Java, DSA, Algorithms, SQL)
   - Hackathon milestones (SIH 2025, DevHack 2026, MSME Hackathon, Statathon)
8. **Professional Certifications**: Accredited credential cards for Infosys Springboard, Meta, NPTEL, AWS, and Google.
9. **Instant Contact Section**: Form validation, simulated dispatch animation, local storage persistence, and one-click email copy button.
10. **Resume Download**: Direct access to downloadable resume (`/resume.pdf`).

---

## 📁 Project Structure

```
portfolio/
├── frontend/                     # Standalone React Application
│   ├── public/
│   │   ├── profile.jpg          # Profile photo
│   │   └── resume.pdf           # Downloadable resume
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectModal.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── Coding.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── BrandIcons.jsx
│   │   ├── config/
│   │   │   └── profile.js       # Centralized personal info & data
│   │   ├── App.jsx              # Main application
│   │   ├── index.css            # Midnight Obsidian & Electric Violet theme
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## 🚀 Running Locally

```bash
cd frontend
npm install
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 🌐 Instant Deployment (Vercel / Netlify / GitHub Pages)

Because the portfolio is standalone and self-contained:
1. Push the repository to GitHub.
2. Import the project on [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
3. Set Root Directory to `frontend`.
4. Deploy in 1 click!

---

## ⚙️ Content Customization

Update your social links (`LinkedIn`, `GitHub`, `LeetCode`) or details in:
- `frontend/src/config/profile.js`
- Profile photo: replace `frontend/public/profile.jpg`
- Resume: replace `frontend/public/resume.pdf`

---

## 📄 License & Ownership
Copyright © 2026 **Rithick P**. All rights reserved.
