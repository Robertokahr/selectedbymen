# Selected by Men

Sitio estático de recomendaciones de productos para hombres.

Stack: **Astro 7** + **Tailwind CSS 4** + **TypeScript** + **Content Collections** (MDX). Pensado para SEO, Core Web Vitals y despliegue en Hostinger.

- Sitio: [selectedbymen.com](https://selectedbymen.com)
- Contenido en inglés
- Enlaces a productos de Amazon (`/dp/ASIN`, sin tag de afiliado por ahora)

## Requisitos

- Node.js **22.12+**
- npm 10+

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321).

```bash
npm run build      # genera dist/
npm run preview    # previsualiza el build estático
```

## Cómo agregar un post

1. Crea un archivo `.mdx` en `src/content/posts/`.
2. El nombre del archivo es la URL: `mi-guia.mdx` → `/blog/mi-guia/`.
3. Copia este frontmatter y rellena los campos:

```mdx
---
title: The title readers will see
description: One or two sentences for SEO and cards.
pubDate: 2026-08-26
updatedDate: 2026-08-26          # opcional
heroImage: /posts/grooming.jpg
heroAlt: Describe the photo for accessibility.
category: grooming                 # grooming | style | tech | fitness | home | everyday
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

Write the article in English. Use `##` headings. Product cards from `products`
render automatically in the sidebar.
```

4. Pon las fotos en `public/posts/` (portada) y `public/products/` (fichas), y apunta a ellas con `/posts/...` y `/products/...`.
5. `draft: true` oculta el post en producción y lo deja visible en `npm run dev`.
6. Vuelve a generar el sitio (`npm run build`) y sube `dist/`.

Categorías: se definen en `src/data/categories.ts`. El correo se cambia en `src/data/site.ts` (`email`). Cuando el programa de afiliados esté activo, se puede añadir el tag en `amazonTag`.

## Estructura

```
src/
  assets/            imágenes (hero, posts, productos)
  components/        Header, Footer, PostCard, ProductCard, SEO…
  content/posts/     artículos MDX
  content.config.ts  schema de la colección `posts`
  data/              site.ts y categories.ts
  layouts/           BaseLayout.astro
  lib/               posts + affiliate helpers
  pages/             rutas (/, /blog, /blog/[id], /category/[slug], /about, /contact)
  styles/global.css  tokens de diseño + Tailwind
```

SEO incluido: Open Graph, Twitter cards, JSON-LD, canonical, `sitemap-index.xml`, `robots.txt` y RSS en `/rss.xml`.

## Formulario de contacto

Por defecto el formulario abre el cliente de correo (`mailto:contact@selectedbymen.com`).

Para enviarlo sin backend, crea un formulario en [Formspree](https://formspree.io), copia el id y crea un `.env`:

```
PUBLIC_FORMSPREE_ID=tu_id
```

Luego `npm run build` otra vez.

## Desplegar en Hostinger

El sitio es 100% estático. No necesitas Node en el servidor.

1. En `src/data/site.ts` confirma `url` y `email`.
2. `npm run build`
3. El contenido publicable está en `dist/`.
4. En hPanel → **File Manager** (o FTP), abre `public_html`.
5. Borra el placeholder de WordPress / `index.html` anterior.
6. Sube **todo** lo que hay dentro de `dist/` (no la carpeta `dist` en sí).
7. Comprueba:
   - `https://selectedbymen.com/`
   - `https://selectedbymen.com/blog/`
   - `https://selectedbymen.com/sitemap-index.xml`
   - `https://selectedbymen.com/robots.txt`

`public/.htaccess` se copia al build: gzip, cache de assets y `ErrorDocument 404`.

Si Hostinger te pide un documento raíz, es `index.html`. El dominio debe apuntar a `public_html`.

### Actualizar el sitio

Cada vez que publiques posts o cambies diseño:

```bash
npm run build
```

Vuelve a subir `dist/` (puedes sincronizar solo los archivos cambiados).

## Personalización rápida

| Qué | Dónde |
| --- | --- |
| Nombre, email, tag de Amazon | `src/data/site.ts` |
| Categorías | `src/data/categories.ts` |
| Paleta y tipografías | `src/styles/global.css` |
| Navegación | `src/data/site.ts` + `Header.astro` |
| Logo | `src/components/Logo.astro` |

Dark mode: el sitio arranca en modo claro. El botón del header guarda la preferencia en `localStorage`.

## Licencia

Contenido y marca © Selected by Men. El código del sitio puede reutilizarse para este proyecto.
