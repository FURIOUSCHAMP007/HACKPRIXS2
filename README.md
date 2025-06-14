# 🚨Drone-Powered Emergency Dispatch & Rescue Dashboard

A real-time, web-based dashboard to coordinate **drone missions**, monitor **live disaster feeds**, and manage **emergency dispatches** — purpose-built for the **National Disaster Response Force (NDRF)** and similar agencies.

![Project Banner](./src/assets/banner.jpg)

---

## 📌 Table of Contents
- [🔍 Problem It Solves](#-problem-it-solves)
- [🚀 Features](#-features)
- [🧩 Tech Stack](#-tech-stack)
- [📸 Screenshots](#-screenshots)
- [🌐 Open Innovation Theme](#-open-innovation-theme)
- [🏆 Best Use of GitHub](#-best-use-of-github)
- [🧠 Challenges I Ran Into](#-challenges-i-ran-into)
- [📈 Future Scope](#-future-scope)
- [🛠️ How to Run Locally](#️-how-to-run-locally)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🔍 Problem It Solves

Emergency response operations often lack:
- Real-time aerial views
- Centralized coordination of drones and teams
- Dynamic situational awareness

**VIGIL-EYE** solves this by integrating **live drone feeds**, **mission stats**, and a **dispatch panel** into one powerful dashboard.

---

## 🚀 Features

- 🛰️ Real-time drone mission overview
- 📍 Live location + mission data tracking
- 🧑‍🚒 Team deployment panel
- 📊 Rescue statistics dashboard
- ⚠️ Emergency alerts and banners
- 🌐 Responsive, modern UI with TailwindCSS

---

## 🧩 Tech Stack

| Technology      | Use Case                          |
|-----------------|------------------------------------|
| React.js        | Frontend Framework                 |
| React Router    | Page Routing                       |
| Tailwind CSS    | Modern Utility-based Styling       |
| Vite            | Lightning-fast bundler/dev server  |
| GitHub          | Version Control + Documentation    |

---

## 📸 Screenshots

> _(Add actual screenshots or gifs here)_

- `Home Page` – Overview of the mission & alerts  
- `Missions Page` – List of drone operations  
- `Stats Page` – Operational insights & data  
- `Live Feed` – Simulated or actual live camera stream  

---

## 🌐 Open Innovation Theme

This project fits the **Open Innovation** track by offering:
- Cross-domain utility (disaster response, urban safety, surveillance)
- Real-world social impact with scalable architecture
- Open-source friendliness for community-driven enhancements

[Read more →](#-open-innovation-theme)

---

## 🏆 Best Use of GitHub

- 🔁 Clear commit history with feature-based branches
- 📖 Well-documented code and structure
- ✅ Pull request-based workflow
- 📘 Markdown-rich `README.md`, complete with setup instructions, context, and challenges

---

## 🧠 Challenges I Ran Into

- 🧩 Module import collisions in React (resolved via proper file splitting)
- 🎨 TailwindCSS setup not rendering (fixed by ensuring correct CSS import)
- 🔁 Routing issues between pages (resolved with correct `<Routes>` config)
- 🔧 Mocking real-time data (used `useEffect` + `setInterval()` for dynamic feel)

---

## 📈 Future Scope

- 🧠 AI-based damage detection from drone imagery
- 📡 Integration with satellite data APIs (e.g., ISRO Bhuvan)
- 📲 Android-based remote field agent interface
- 🔒 Secure login panel for admins and pilots
- 📍 Integration with GIS & thermal cameras

---

## 🛠️ How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/ndrfdronerescue.git
cd ndrfdronerescue

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
