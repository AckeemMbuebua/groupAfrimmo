# Groupe Afrimmo S.A.

Site vitrine officiel de Groupe Afrimmo S.A., développé avec Angular 21, TailwindCSS et SSR Angular pour un déploiement Vercel.

## Prérequis

- Node.js compatible Angular 21
- pnpm 10

## Commandes

```bash
pnpm install
pnpm start
pnpm exec vitest run
pnpm lint
pnpm build
```

## Structure

- `src/app/content` : contenus de la page d’accueil par locale.
- `src/app/i18n` : contenus globaux, navigation, SEO, pages secondaires et références projets.
- `src/app/sections` : sections de la landing page.
- `src/app/pages` : pages routées.
- `public` : assets servis tels quels par Angular.

## Livraison

Le build de production génère l’application SSR dans `dist/afrimmo.com`.
