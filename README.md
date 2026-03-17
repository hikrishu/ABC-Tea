# ABC Tea & Cafe (Frontend)

Premium Nepali-vibe landing page built with **React + Vite + Tailwind CSS**.

## 1) Requirements

- **Node.js 18+** (recommended: Node 20 LTS)
- **npm 9+**

Check versions:

```bash
node -v
npm -v
```

---

## 2) Install dependencies

From project root:

```bash
npm install
```

---

## 3) Run on localhost

```bash
npm run dev
```

Vite will print a local URL in terminal (normally):

- `http://localhost:5173/`

Open that URL in your browser.

---

## 4) Build production files

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

---

## 5) If localhost preview is not working (quick fixes)

### A) Port already busy

Run with another port:

```bash
npm run dev -- --port 4173
```

Then open `http://localhost:4173/`.

### B) You see npm install errors (registry/proxy)

If your network has proxy/registry restrictions:

```bash
npm config set registry https://registry.npmjs.org/
npm config delete proxy
npm config delete https-proxy
npm install
```

### C) Node version issues

Use Node 20 LTS and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## Scripts

- `npm run dev` → start dev server
- `npm run build` → production build
- `npm run preview` → preview production build
