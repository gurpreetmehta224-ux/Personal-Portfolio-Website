# Developer Portfolio Website (Task 2)
### Full Stack Web Development — Group 5 | Problem Statement 41

> **Student Assignment Details:**
> - **Student Name:** Gurpreet Singh Mehta
> - **Degree:** B.Tech Computer Science and Engineering (3rd Year)
> - **Institution:** SRM Institute of Science and Technology
> - **Problem Statement:** Group 5 – Problem Statement 41 (Personal Portfolio Website)
> - **Requirement:** Create responsive About, Skills, Projects, and Contact sections with form validation.

---

## 📌 1. Project Overview & Objective

This project is a modern, responsive Single Page Application (SPA) built using **ReactJS**, **Vite**, and **Vanilla CSS3**. It serves as an interactive professional portfolio showcasing technical competencies, academic milestones, curated machine learning/full-stack projects, and an interactive contact form with client-side validation and browser `localStorage` persistence.

The application has been engineered to be clean, modular, and easy to explain during a live academic viva evaluation.

---

## 🚀 2. Key Features

- **Single Page Application (SPA) Routing:** Seamless client-side navigation powered by `react-router-dom` across 5 dedicated views (`/`, `/about`, `/skills`, `/projects`, `/contact`) and a custom 404 page with zero browser reloads.
- **Centralized Profile Configuration:** All personal information, academic timelines, statistics, and social links are managed in a single file (`src/data/profile.js`), making personalization effortless.
- **Dynamic Skills Filter:** Interactive category filtering (`All`, `Programming`, `Frontend`, `Backend`, `Database`, `AI / ML`, `Tools`) driven by React `useState` and JavaScript `filter()`.
- **Project Search & Multi-Tag Filtering:** Real-time text search (querying project titles and technology stacks) combined with category tabs and result counter feedback.
- **Controlled Contact Form & Validation:**
  - Full Name: Required, minimum length validation, alphabetical character check.
  - Email: Required, standard RFC-compliant regex validation.
  - Subject: Required, minimum length check.
  - Message: Required, minimum length check (at least 10 characters).
  - Clear real-time field error indicators with accessible ARIA alerts.
- **LocalStorage Persistence:** Validated contact inquiries are saved to `localStorage` along with localized date/time stamps, demonstrated live in an expandable "Saved Submissions" history view.
- **Dark / Light Mode Toggle:** Smooth theme switcher utilizing CSS custom properties (`data-theme`) and synced automatically to `localStorage`.
- **Responsive Layout:** Tailored CSS Grid and Flexbox system supporting Desktop, Tablet, and Mobile screens with an animated hamburger drawer navigation.
- **Resume Modal Preview & File Generator:** An accessible modal displaying formatted resume highlights with a simulated resume download action.

---

## 🛠️ 3. Technology Stack

- **Core Library:** ReactJS (v19.x)
- **Tooling & Bundler:** Vite (v8.x)
- **Routing:** React Router (`react-router-dom` v7.x)
- **Styling:** Modern Vanilla CSS3 (CSS Variables, Flexbox, Grid, Glassmorphism, Transitions)
- **Icons:** SVG vector icons & Lucide Icons
- **State & Storage:** React Hooks (`useState`, `useEffect`) and HTML5 `localStorage`

---

## 📂 4. Project Directory Structure

```text
full stact task 2/
├── index.html                     # Application HTML5 shell with Google Fonts & SEO meta
├── package.json                   # Scripts, dependencies, and project metadata
├── vite.config.js                 # Vite build & plugin configuration
├── public/                        # Static assets
└── src/
    ├── main.jsx                   # Entry point mounting BrowserRouter and React root
    ├── App.jsx                    # Route definitions, layout structure & ScrollToTop effect
    ├── index.css                  # Design tokens, theme variables, and responsive styles
    ├── components/                # Reusable presentation and interactive components
    │   ├── Navbar.jsx             # Sticky navigation bar with theme toggle & mobile menu
    │   ├── Footer.jsx             # Reusable footer with socials, links, and copyright
    │   ├── Hero.jsx               # Landing hero banner with profile card and stats
    │   ├── SectionTitle.jsx       # Standardized section headings and tag pills
    │   ├── SkillCard.jsx          # Skill card with proficiency level & animated progress bar
    │   ├── ProjectCard.jsx        # Project showcase card with tags, metrics, and buttons
    │   ├── ProjectFilter.jsx      # Search input box and category filter pills
    │   ├── ContactForm.jsx        # Form handling, validation logic & localStorage storage
    │   ├── Button.jsx             # Universal button / router link component
    │   ├── ThemeToggle.jsx        # Dark/light theme switch button with localStorage sync
    │   ├── ResumeModal.jsx        # Resume preview modal and download trigger
    │   └── Icons.jsx              # Vector SVG icons for GitHub, LinkedIn, etc.
    ├── pages/                     # Routed view components
    │   ├── Home.jsx               # Landing page with hero, pillars, and featured projects
    │   ├── About.jsx              # Personal story, academic timeline, and interests
    │   ├── Skills.jsx             # Categorized technical competencies with filter tabs
    │   ├── Projects.jsx           # Data-driven project gallery with search and category filters
    │   ├── Contact.jsx            # Two-column contact layout with direct channels
    │   └── NotFound.jsx           # Styled 404 error page with return-to-home button
    └── data/                      # Centralized data sources
        ├── profile.js             # Personal details, education, stats, and objectives
        ├── skills.js              # Technical skills array with proficiency & categories
        └── projects.js            # Projects dataset with technologies, metrics, and links
```

---

## ⚡ 5. How to Install and Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18 or newer recommended)
- `npm` (Node Package Manager)

### Step 1: Install Dependencies
Open your terminal inside the project directory and run:
```bash
npm install
```

### Step 2: Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```text
http://localhost:5173/
```

### Step 3: Build for Production
To compile and bundle the optimized static distribution:
```bash
npm run build
```
The output files will be created in the `dist/` directory.

### Step 4: Preview Production Build
```bash
npm run preview
```

---

## 🧠 6. React & JavaScript Concepts Demonstrated

| Concept | File / Implementation Reference | Explanation |
| :--- | :--- | :--- |
| **Functional Components** | All components in `src/components/` & `src/pages/` | Modern React paradigm using pure JavaScript functions returning JSX. |
| **JSX (JavaScript XML)** | All `.jsx` files | Syntax extension allowing HTML-like markup inside JavaScript. |
| **Props** | `SectionTitle.jsx`, `ProjectCard.jsx`, `Button.jsx` | Unidirectional data flow passing configuration and callbacks down to children. |
| **`useState` Hook** | `ContactForm.jsx`, `ProjectFilter.jsx`, `ThemeToggle.jsx` | Encapsulates component-level reactive state (e.g. form inputs, active filters). |
| **`useEffect` Hook** | `App.jsx`, `ContactForm.jsx`, `ThemeToggle.jsx`, Pages | Manages side effects: document title updates, scroll resets, and reading `localStorage`. |
| **React Router** | `src/App.jsx`, `Navbar.jsx` | Declarative client-side routing (`Routes`, `Route`, `NavLink`, `useLocation`). |
| **Array `map()`** | `Skills.jsx`, `Projects.jsx`, `Hero.jsx` | Transforms raw data arrays into dynamic UI elements with unique `key` props. |
| **Array `filter()`** | `Projects.jsx`, `Skills.jsx`, `Home.jsx` | Evaluates multi-attribute criteria to dynamically filter items without mutating source data. |
| **Controlled Inputs** | `ContactForm.jsx` | Input values bounded directly to React state (`value={formData.field}` + `onChange`). |
| **Form Validation** | `ContactForm.jsx` | Pure JavaScript regex tests and validation functions checking boundary lengths. |
| **`localStorage` API** | `ThemeToggle.jsx`, `ContactForm.jsx` | Browser web storage API for persisting user theme preference and form submissions. |
| **Conditional Rendering**| `ProjectCard.jsx`, `Projects.jsx`, `ContactForm.jsx` | Ternary operators (`? :`) and logical AND (`&&`) for alert banners and award badges. |

---

## 📋 7. How to Personalize Your Information

To customize this portfolio with your own details:
1. Open [`src/data/profile.js`](src/data/profile.js).
2. Update:
   - `name`: Your full name
   - `email`: Your email address
   - `github`: Your GitHub profile link
   - `linkedin`: Your LinkedIn profile link
   - `institution`: Your university/campus details
   - `education`: Your marks, CGPA, and schooling timeline
3. Save the file. Vite hot module replacement (HMR) will update the page instantly without restarting the server!

---

## 🎤 8. Faculty Evaluation & Live Demonstration Walkthrough

When presenting this project to your professor or examiner, follow this 5-minute demonstration sequence:

1. **Homepage & Architecture:**
   - Show the responsive navbar and click the **Theme Toggle** to show instant dark/light transition.
   - Explain that all information flows from a central data file (`profile.js`), promoting separation of concerns.
2. **Skills Dynamic Filtering:**
   - Navigate to `/skills`. Click category buttons (`Frontend`, `Backend`, `AI / ML`).
   - Explain how `useState` triggers a re-render and JavaScript's `filter()` method extracts only the matching items.
3. **Projects Showcase & Real-Time Search:**
   - Navigate to `/projects`. Type `"Python"` or `"React"` in the search bar.
   - Show that search simultaneously checks titles and technology arrays.
   - Combine search with category pills to show compound filtering.
4. **Contact Form Validation & LocalStorage:**
   - Navigate to `/contact`.
   - Click **Submit Message** with empty inputs. Point out the red validation borders and descriptive error messages.
   - Type an invalid email (e.g. `alex@invalid`) to demonstrate regex pattern checking.
   - Fill in valid inputs and submit. Point to the green success banner with localized timestamp.
   - Expand the **Saved Submissions** accordion to prove the data is stored in `localStorage` and persists across browser reloads.
5. **Responsive & 404 Routing:**
   - Open Chrome DevTools (`F12`), switch to responsive mobile mode, and demonstrate the hamburger menu drawer.
   - Navigate to an invalid route like `http://localhost:5173/test-404` to showcase the custom 404 Not Found screen.

---

## ❓ 9. Frequently Asked Viva Questions & Answers

#### Q1: Why did you choose ReactJS over plain vanilla JavaScript?
> **Answer:** React allows declarative component-based architecture. Instead of manually querying and updating the DOM using `document.getElementById` and `innerHTML`, React uses a Virtual DOM and efficiently reconciles only the changed nodes when state changes (`useState`). This results in cleaner, modular, and maintainable code.

#### Q2: What is the difference between Props and State?
> **Answer:** 
> - **Props (Properties):** Immutable data passed downward from parent component to child component (e.g., passing project details into `ProjectCard`).
> - **State:** Mutable, local component memory managed via `useState`. When state changes, React triggers a re-render of that component and its children.

#### Q3: How does client-side routing work in React Router?
> **Answer:** Unlike traditional multi-page websites that request a new HTML document from the server on every link click, React Router intercepts anchor navigation via the browser's HTML5 History API (`pushState`). It conditionally renders the matching component for that URL path without refreshing the page.

#### Q4: How does your search and category filter work?
> **Answer:** We maintain two state variables: `activeCategory` and `searchQuery`. Whenever the user types or clicks a category tab, React updates the state. In the render pipeline, `projectsData.filter()` tests both conditions: whether the category matches and whether the title or technology array contains the search string. The filtered array is then passed to `map()` to produce the cards.

#### Q5: Why is `useEffect` used in this project?
> **Answer:** `useEffect` manages side effects outside React's pure rendering cycle:
> 1. Updating `document.title` when navigating between routes.
> 2. Reading and writing user theme preference and form submissions from/to browser `localStorage`.
> 3. Resetting window scroll position (`window.scrollTo`) when the URL pathname changes.

---

## 🚢 10. Deployment Instructions (GitHub Pages / Vercel / Netlify)

### Option A: Deploy to Vercel (Recommended)
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import your GitHub repository.
3. Keep default settings (Framework Preset: **Vite**, Root Directory: `./`).
4. Click **Deploy**. Vercel will build and assign a free HTTPS URL.

### Option B: Deploy to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `vite.config.js`, set `base: '/<repository-name>/'`.
3. In `package.json`, add:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

---

## 📄 License
Academic Coursework submission for SRM Institute of Science and Technology. Free for educational and learning purposes.
