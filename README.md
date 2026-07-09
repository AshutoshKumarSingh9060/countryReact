# 🌍 Country Explorer — React App
<div align="center">
![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-7.x-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=for-the-badge&logo=css3&logoColor=white)
A beautiful, responsive **Country Explorer** web app built with **React + Vite**.  
Browse, search, and explore detailed information about countries around the world — with full **Dark / Light mode** support and smooth client-side navigation.
[🐛 Report Bug](https://github.com/AshutoshKumarSingh9060/countryReact/issues) · [✨ Request Feature](https://github.com/AshutoshKumarSingh9060/countryReact/issues)
</div>
---
## 📸 Preview
> A clean, card-based layout displaying country flags, population, region, and capital city. Toggle between **Dark Mode** and **Light Mode** using the header button. Click any country card to navigate to its full details page.
---
## ✨ Features
|
 Feature 
|
 Description 
|
|
---
|
---
|
|
 🔍 
**
Live Country Search
**
|
 Type any country name to filter results in real-time 
|
|
 🌙 
**
Dark / Light Mode
**
|
 Theme toggled via React Context API and persisted using 
`localStorage`
|
|
 📄 
**
Country Detail Page
**
|
 Dedicated page per country showing flag, population, languages, borders & more 
|
|
 🗺️ 
**
Region Filter
**
|
 Filter countries by region (Africa, Americas, Asia, Europe, Oceania) 
|
|
 📦 
**
Offline-Ready Data
**
|
 Country data served from a local 
`data.js`
 utility — no external API required 
|
|
 🔗 
**
Client-Side Routing
**
|
 Smooth SPA navigation via React Router DOM 
|
|
 ⚡ 
**
Vite Dev Server
**
|
 Blazing-fast development experience with Hot Module Replacement (HMR) 
|
---
## 🛠️ Tech Stack
|
 Technology 
|
 Version 
|
 Purpose 
|
|
---
|
---
|
---
|
|
[
React
](
https://react.dev/
)
|
 19.x 
|
 UI component library 
|
|
[
Vite
](
https://vitejs.dev/
)
|
 6.x 
|
 Build tool & dev server 
|
|
[
React Router DOM
](
https://reactrouter.com/
)
|
 7.x 
|
 Client-side routing 
|
|
 React Context API 
|
 Built-in 
|
 Global theme state management 
|
|
 Vanilla CSS 
|
 — 
|
 Custom styling with dark/light themes 
|
|
 localStorage 
|
 Browser API 
|
 Persist theme preference across sessions 
|
---
## 📁 File Structure
```
countryReact/
├── index.html                  # HTML entry point (mounts React app)
├── package.json                # Project metadata & npm scripts
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint rules for code quality
├── public/                     # Static public assets
│   └── vite.svg
└── src/
    ├── main.jsx                # React DOM root — wraps app in Router + ThemeProvider
    ├── App.jsx                 # Root component — manages search state & page layout
    ├── App.css                 # Global application styles (dark/light variables)
    │
    ├── Components/             # Reusable UI components
    │   ├── index.js            # Barrel export for all components & hooks
    │   ├── Header.jsx          # Navbar with app title and Dark/Light toggle
    │   ├── Main.jsx            # Renders filtered grid of Country cards
    │   ├── Country.jsx         # Individual country card (flag, name, stats)
    │   └── Search.jsx          # Search input + region dropdown filter
    │
    ├── pages/                  # Route-level page components
    │   └── countrypages.jsx    # Country detail page — full info + border list
    │
    ├── Contexts/               # React Context providers
    │   └── ThemeContext.jsx    # Creates ThemeContext & ThemeProvider
    │
    ├── hooks/                  # Custom React hooks
    │   └── useTheme.js         # useTheme() — consumes ThemeContext cleanly
    │
    └── util/                   # Utility data
        └── data.js             # Static dataset for 250+ countries
```
---
## 🚀 Getting Started
### ✅ Prerequisites
Ensure the following are installed on your system:
- **Node.js** `>= 18.x` → [Download](https://nodejs.org/)
- **npm** `>= 9.x` (bundled with Node.js)
- **Git** → [Download](https://git-scm.com/)
Verify your environment:
```bash
node --version    # Expected: v18.x or higher
npm --version     # Expected: 9.x or higher
git --version     # Expected: 2.x or higher
```
---
### 📥 Installation
**Step 1 — Clone the repository**
```bash
git clone https://github.com/AshutoshKumarSingh9060/countryReact.git
```
**Step 2 — Navigate into the project directory**
```bash
cd countryReact
```
**Step 3 — Install all dependencies**
```bash
npm install
```
> This installs React, Vite, React Router DOM, and all other dependencies listed in `package.json`.
---
### ▶️ Running the Development Server
```bash
npm run dev
```
The application will start and be available at:
```
http://localhost:5173
```
> Vite supports **Hot Module Replacement (HMR)** — any file change is reflected in the browser instantly without a full reload.
---
### 🏗️ Building for Production
```bash
npm run build
```
Compiles and bundles the entire app into the `dist/` folder, optimised for deployment.
**Preview the production build locally:**
```bash
npm run preview
```
---
### 🧹 Linting
Check your code for quality issues:
```bash
npm run lint
```
---
## 🗂️ Component Architecture
```
BrowserRouter
  └── ThemeProvider  (React Context — global dark/light state)
        └── App.jsx  (search state via useState)
              ├── Header.jsx       → useTheme() toggle button
              ├── Search.jsx       → setSearch callback (live filter)
              └── Main.jsx         → renders Country cards grid
                   └── Country.jsx → links to /countrypages?name=<name>
Route: /countrypages?name=<Country>
  └── countrypages.jsx   → reads URL param, shows full country detail
```
---
## 🔄 Routing Table
|
 URL Path 
|
 Component 
|
 Description 
|
|
---
|
---
|
---
|
|
`/`
|
`App`
 → 
`Main`
|
 Home page — browse & search all countries 
|
|
`/countrypages?name=India`
|
`Countrypages`
|
 Country detail page — full info 
|
---
## 🌱 Suggested Future Improvements
- [ ] 🌐 **Live REST Countries API** — replace static data with [restcountries.com](https://restcountries.com/v3.1/all)
- [ ] 🔽 **Region dropdown filter** — filter countries by continent
- [ ] 🔗 **Clickable border countries** — navigate between neighbouring countries on the detail page
- [ ] 📌 **Favourites / Bookmarks** — save favourite countries with `localStorage`
- [ ] 📊 **Sorting options** — sort by population (asc/desc), area, or country name A–Z
- [ ] 🧩 **Pagination / Infinite Scroll** — improve performance when rendering all 250+ countries
- [ ] 🔒 **Error Boundaries** — graceful error handling for unknown country names in URL
- [ ] ♿ **Accessibility** — ARIA labels, keyboard navigation, focus management
---
## 📜 License
This project is open source and available under the [MIT License](LICENSE).
---
## 👨‍💻 Author
**Ashutosh Kumar Singh**
[![GitHub](https://img.shields.io/badge/GitHub-AshutoshKumarSingh9060-181717?style=for-the-badge&logo=github)](https://github.com/AshutoshKumarSingh9060)
---
<div align="center">
⭐ **If you found this project helpful, please give it a star!** ⭐
Made with ❤️ using React + Vite
</div>

