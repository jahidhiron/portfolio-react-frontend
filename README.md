# Portfolio React Frontend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Portfolio is a modern, scalable frontend application built with React 19, TypeScript, Redux Toolkit, and Vite. It supports internationalization (i18n), TailwindCSS, Redux-Saga, encrypted state persistence, and a robust CI-ready structure for scalable web systems.

---

## 📚 Table of Contents

- [Features](#-features)
- [Getting Started](#️-getting-started)
- [Project Structure](#-project-structure)
- [License](#license)

---

## 🚀 Features

- ⚛️ React 19 with TypeScript and Vite
- 📦 Redux Toolkit for global state management
- 🧩 Redux Saga for side effects and asynchronous flows
- 🔐 Redux Persist with encryption and compression
- 🌐 Internationalization (i18n) with i18next
- 📂 Folder-based modular structure
- 🧠 Helmet for head management
- 💨 TailwindCSS 4.x for rapid UI development
- 🧼 Linting & Formatting with ESLint + Prettier
- 📊 Logging with Redux Logger
- 🧪 Type checking with TypeScript and Vite Plugin Checker
- 🚦 Git hooks with lint-staged
- 🔁 Ready for CI/CD pipelines

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone git@github.com:jahidhiron/portfolio-react-frontend.git
cd portfolio-react-frontend
npm install --legacy-peer-deps # or npm install --force
npm run dev
```

## 📁 Project Structure

<pre> ``` . ├── public/ # Static files like i18n translation JSONs │ ├── en/ # English translations │ ├── bn/ # Bengali translations ├── src/ # Main application source code │ ├── assets/ # Static assets like images, icons, fonts │ ├── components/ # Reusable UI components │ │ ├── layout/ # Layout components │ │ │ ├── public/ # Layout for public (unauthenticated) pages │ │ │ ├── private/ # Layout for authenticated pages │ │ ├── helpers/ # Utility UI components and helpers │ ├── config/ # Configuration files │ │ ├── log/ # Custom logger configurations │ │ ├── env.ts # Environment variable helpers │ │ └── index.ts # Combined config exports │ ├── contexts/ # React context API for global state │ │ ├── interfaces/ # TypeScript interfaces for context │ │ ├── AuthContext.tsx # Authentication context provider │ │ └── index.ts # Context entry point │ ├── hooks/ # Custom React hooks │ ├── errors/ # Custom error handlers and boundary components │ ├── i18n/ # Internationalization (i18n) setup │ │ ├── config.ts # i18n configuration │ │ └── index.ts # i18n initialization │ ├── pages/ # Page-level components │ ├── routes/ # Application routes │ │ ├── index.tsx # Route configuration with router setup │ │ └── route-constant.ts # Centralized route paths │ ├── store/ # Redux store setup │ │ ├── actions/ # Redux actions │ │ ├── sagas/ # Redux-Saga side effects │ │ ├── services/ # API service functions │ │ ├── slices/ # Redux Toolkit slices │ │ └── index.ts # Root reducer and saga setup │ ├── types/ # Global TypeScript types │ ├── utils/ # General utility functions │ ├── App.tsx # App root component │ ├── index.css # Global styles │ ├── main.tsx # Entry point for React app │ └── vite-env.d.ts # Vite environment type declarations ├── .env.development # Development environment variables ├── .env.staging # Staging environment variables ├── .env.production # Production environment variables ├── .eslintignore # Ignore patterns for ESLint ├── .prettierignore # Ignore patterns for Prettier ├── .gitignore # Git ignore file ├── .prettierrc # Prettier configuration ├── eslint.config.js # ESLint configuration ├── index.html # HTML template for Vite ├── package.json # Project metadata and dependencies ├── tsconfig.app.json # TypeScript config for app files ├── tsconfig.json # Base TypeScript configuration ├── tsconfig.tsbuildinfo # TS build cache ├── vite.config.ts # Vite configuration └── README.md # Project documentation ``` </pre>


## License

This project is licensed under the MIT License.
