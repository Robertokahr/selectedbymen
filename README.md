```markdown
# Selected by Men

Sitio estático de recomendaciones de productos para hombres en EE.UU.

**Sitio:** [https://selectedbymen.com](https://selectedbymen.com)

Stack: **Astro 7** + **Tailwind CSS 4** + **TypeScript** + **Content Collections** (MDX).  
Despliegue: **Cloudflare Pages** (build automático en cada `git push` a `main`).

## Requisitos

- Node.js 22.12+
- npm 10+
- Git

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321).

```bash
npm run build      # genera dist/
npm run preview    # previsualiza el build
```

## Cómo publicar cambios

```bash
git add .
git commit -m "Describe el cambio"
git push
```

Cloudflare Pages construye el sitio y lo publica en 1–3 minutos.

## Cómo agregar un post

1. Crea un archivo `.mdx` en `src/content/posts/`.
2. El nombre del archivo es la URL: `mi-guia.mdx` → `/blog/mi-guia/`.
3. Frontmatter:

```mdx
---
title: The title readers will see
description: One or two sentences for SEO and cards.
pubDate: 2026-08-26
updatedDate: 2026-08-26
heroImage: /posts/grooming.jpg
heroAlt: Describe the photo for accessibility.
category: grooming
tags: [shave, routine]
featured: false
draft: false
author: Selected by Men
products:
  - name: Product name
    description: Why it made the list.
    image: /products/razor.jpg
    url: https://www.amazon.com/dp/ASIN
    price: "$45"
    rating: 4.6
    badge: Editor's pick
---

Write the article in English. Use ## headings.
```

4. Fotos en `public/posts/` (portada) y `public/products/` (fichas).
5. `draft: true` oculta el post en producción; se ve en `npm run dev`.
6. `git push` para publicar.

Categorías: `src/data/categories.ts`  
Datos del sitio (email, Amazon tag, URL): `src/data/site.ts`

## Antes de monetizar

1. Pon tu tag de Amazon en `src/data/site.ts` (`amazonTag`).
2. Revisa email y redes en el mismo archivo.
3. Opcional: Formspree en `.env` con `PUBLIC_FORMSPREE_ID` para el formulario de contacto.

## Estructura

```
src/
  assets/
  components/
  content/posts/
  data/              site.ts, categories.ts
  layouts/
  lib/
  pages/
  styles/global.css
```

SEO: Open Graph, Twitter cards, JSON-LD, canonical, sitemap, robots.txt, RSS en `/rss.xml`.

## Personalización

| Qué | Dónde |
| --- | --- |
| Nombre, email, tag Amazon | `src/data/site.ts` |
| Categorías | `src/data/categories.ts` |
| Paleta y tipografías | `src/styles/global.css` |
| Navegación | `src/data/site.ts` + `Header.astro` |
| Logo | `src/components/Logo.astro` |

## Licencia

Contenido y marca © Selected by Men.
```

Después:

```powershell
git add README.md
git commit -m "Update README for Cloudflare Pages"
git push
```

