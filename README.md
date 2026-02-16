# Tailwind Design System Gallery

A React + Vite playground that demonstrates how Tailwind CSS utilities translate into polished UI patterns. Each component in `src/` shows a specific technique (hover states, responsive grids, dark mode toggles, etc.) so you can copy/paste ideas into your own projects.

## Why Tailwind CSS?

- **Utility-first workflow** – compose designs with semantic class names like `flex`, `gap-4`, and `text-brand-600` directly in JSX for instant feedback.
- **Theme tokens** – customize colors, spacing, and animations in [tailwind.config.js](tailwind.config.js) to match your brand without touching component code.
- **Dark mode variants** – toggle the `dark` class at the document root (see [src/context/DarkModeContext.jsx](src/context/DarkModeContext.jsx)) and Tailwind automatically swaps styles via `dark:` modifiers.
- **Production-ready builds** – Vite + Tailwind purge unused classes, keeping shipping CSS tiny.

## Gallery Highlights

| Section | Techniques |
| ------- | ---------- |
| Buttons ([src/components/Buttons.jsx](src/components/Buttons.jsx)) | Focus-visible outlines, group hover interactions, disabled states. |
| Cards ([src/components/Cards.jsx](src/components/Cards.jsx)) | Glassmorphism, responsive grids, `group-hover` transitions. |
| Forms ([src/components/Forms.jsx](src/components/Forms.jsx)) | Peer-based validation, brand-colored focus rings, accessible inputs. |
| Feature Cards ([src/components/FeatureCard.jsx](src/components/FeatureCard.jsx)) | `group-hover`, backdrop blur, gradient overlays. |
| Tailwind Lab ([src/pages/TailwindLab.jsx](src/pages/TailwindLab.jsx)) | Typography scales, tracking/leading utilities, Flexbox vs Grid patterns. |

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Run the dev server with hot reloading:
   ```sh
   npm run dev
   ```
3. Open the URL Vite prints (usually http://localhost:5173) and experiment with the examples.

## Tailwind Tips from this Repo

- Use `transition-*` utilities (`transition-all duration-300`) to smooth hover/active states.
- Pair `group` on wrappers with `group-hover:*` on children for cohesive interactions.
- Scope responsive behavior with mobile-first breakpoints like `md:grid-cols-2` and `lg:grid-cols-3`.
- Prefer semantic color tokens (`text-brand-600`) over raw hex values so future palette tweaks happen in a single place.

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vite.dev/guide/)
