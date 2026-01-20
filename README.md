# 🖼️ Web-Based Image Editor

A modern, responsive **client-side image editor** built using **Vanilla JavaScript**, **HTML5 Canvas**, and **CSS**.  
The application allows users to apply real-time image filters, use predefined presets, and download edited images — all directly in the browser with **no backend required**.

🔗 **Live Demo:** https://arghyawebdev.github.io/Web-Based-Image-Editor/

---

## ✨ Features

- 📷 Upload and preview images instantly  
- 🎚️ Real-time image adjustments using sliders  
- 🎨 Multiple predefined filter presets (Vintage, Cinematic, Black & White, etc.)  
- 🔄 Reset filters to default values  
- 💾 Download edited images as PNG  
- 🖥️ Responsive layout for desktop, tablet, and mobile  
- 🎯 Sticky presets panel for better usability  
- 🧠 Clean UI with focus on visual hierarchy and UX polish  

---

## 🛠️ Tech Stack

- **HTML5** — Semantic structure  
- **CSS3** — Flexbox, custom properties (CSS variables), media queries  
- **JavaScript (Vanilla)** — DOM manipulation, Canvas API  
- **HTML5 Canvas API** — Image rendering and filter processing  

> No frameworks. No libraries. Fully client-side.

---

## 📐 Application Architecture

- **Canvas-based rendering**  
  All filters are applied using the native `canvas` and `context.filter` API.

- **Config-driven filters**  
  Filters are defined using structured objects for scalability and maintainability.

- **Dynamic UI generation**  
  Sliders and preset buttons are generated programmatically.

- **Responsive UI**  
  Layout adapts across screen sizes using CSS media queries.

---

## 📱 Responsiveness

- **Desktop:** Split layout with image preview and control panel  
- **Tablet:** Adjusted panel proportions for better readability  
- **Mobile:** Stacked layout with scrollable filters and accessible presets  

The design prioritizes **layout stability**, **usability**, and **clean interaction patterns**.


