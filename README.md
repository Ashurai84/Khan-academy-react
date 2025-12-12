# 🎓 Khan Academy React Clone

> A pixel-perfect, responsive reconstruction of the Khan Academy homepage, built to demonstrate modern React patterns and state management.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🚀 Overview

This project is a high-fidelity clone of the Khan Academy interface, crafted to showcase advanced frontend development skills. It goes beyond a static page by integrating a fully functional **Task Management System**, **Real-time Data Fetching**, and a **Component-Driven Architecture**.

It serves as a playground for mastering **Redux Toolkit**, **RTK Query**, and **Tailwind CSS** in a production-like environment.

## ✨ Key Features

### 🖥️ Immersive UI/UX
- **Responsive Design**: Flawlessly adapts to Mobile, Tablet, and Desktop screens using Tailwind's utility-first classes.
- **Component Architecture**: Modular, reusable components (Hero, Stats, Testimonials) mirroring industry best practices.
- **Modern Styling**: Clean, accessible, and pixel-perfect design implementation.

### ⚡ State Management & Logic
- **Redux Toolkit Integration**: robust global state management for application data.
- **Smart Todo App**: A fully functional Task Manager feature:
  - Add, Toggle, Delete, and Clear tasks.
  - Async fetching of initial data from simulated APIs.
  - CRUD operations managed via Redux slices.

### 🌐 Data Fetching & Async Patterns
- **Axios Demonstrations**: Real-world examples of handling HTTP requests, headers, and error states.
- **RTK Query**: Efficient data caching and fetching strategies implementation.
- **Async Thunks**: Handling complex asynchronous logic within Redux.

## 🛠️ Technology Stack

| Category | Technologies |
|----------|--------------|
| **Frontend Framework** | ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) **React 18+** |
| **Build Tool** | ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E) **Vite** |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) **Tailwind CSS** |
| **State Management** | ![Redux](https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white) **Redux Toolkit** |
| **HTTP Client** | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white) **Axios** |
| **Routing** | **React Router DOM** |

## 📂 Project Structure

```bash
src/
├── 📁 Components/    # Reusable UI Blocks (Hero, Stats, Footer, etc.)
├── 📁 features/      # Redux Slices & Logic (Todos, User State)
├── 📁 pages/         # Application Views/Routes
├── 📁 Axios-problem/ # API Interaction & Async Pattern Demos
├── 📄 store.js       # Central Redux Store Configuration
├── 📄 App.jsx        # Root Component & Layout
└── 📄 main.jsx       # Application Entry Point
```

## 🚀 Getting Started

Ready to explore? Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Ashurai84/Khan-academy-react.git
    cd Khan-academy-react
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in your browser:**
    Navigate to `http://localhost:5173` to see the app in action!

## 🧠 What I Learned

Building this project sharpened my skills in:
- **Structuring large React applications** for scalability.
- **Managing complex state** efficiently with Redux Toolkit.
- **Optimizing performance** using Vite and efficient re-rendering patterns.
- **Designing responsively** without relying on component libraries, using pure Tailwind CSS.

## 👤 Author

**Ashurai84**

---

*This project is for educational purposes and is not affiliated with Khan Academy.*
