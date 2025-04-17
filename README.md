# 🧱 Monolithic Repository — Vite + TypeScript + Biome + i18n + Vitest + Express

This repository is a modern **monolithic fullstack application**, combining frontend and backend in a single codebase. It leverages a modern toolchain to ensure fast development, consistent code quality, type safety, and internationalization support.

---

## 📁 Project Structure
```
📁 template
├── 📁 .vscode
├── 📁 backend
│   ├── 📁 node_modules
│   ├── 📁 src
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.node.json
├── 📁 frontend
│   ├── 📁 coverage
│   ├── 📁 dist
│   ├── 📁 node_modules
│   ├── 📁 public
│   ├── 📁 src
│   ├── .env
│   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.json
│   ├── tsconfig.tsbuildinfo
│   ├── vite.config.ts
│   └── vitest.config.ts
├── .gitignore
├── biome.json
├── README.md
└── tsconfig.json
```

🌍 Internationalization (i18n)

We use i18next to support multiple languages. Translation files are stored in the locales folder using the following structure:

/locales
  ├── en/
  │   └── translation.json
  └── es/
      └── translation.json

✅ Testing with Vitest

The project uses Vitest to write unit and integration tests. Tests can live inside the tests/ folder or alongside the code they’re testing. You can run all tests with:

```bash
npm run test
```

🧼 Code Quality with Biome & TS

Biome is used as the all-in-one linter and formatter. It ensures consistent code style across the project and replaces ESLint + Prettier. The configuration lives in .biome.json.

Run formatting and linting with:

```bash
npm run lint
```

🙌 Credits

Crafted with ❤️ using modern fullstack tools to enable fast, scalable web application development.