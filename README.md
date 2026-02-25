# Waste & Recycling Globe

An interactive, dark-themed web app that promotes waste reduction and recycling. Explore a 3D globe with nodes in different regions; click a node to see waste stats and recycling tips for that area.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy on Vercel

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com), click **Add New Project** and import the GitHub repository.
3. Vercel will detect the Vite app; use the default build command (`vite build`) and output directory (`dist`).
4. Deploy. Future pushes to the main branch will trigger automatic deployments.

## Stack

- **Vite** + **React** (TypeScript)
- **react-globe.gl** for the 3D globe and clickable nodes
- **Three.js** (peer dependency of react-globe.gl)

No backend or environment variables required.
