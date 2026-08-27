# Log de actualizaciones SEO

Fecha: 27 de agosto de 2026  
Referencia: `seobygoogle.md` (SEO Starter Guide de Google Search Central)  
Sitio: https://selectedbymen.com

Cada entrada describe un cambio aplicado, los archivos tocados y por qué.

---

## 1. Enlaces de afiliado marcados como `sponsored`

**Qué pedía Google:** calificar los enlaces de programas de afiliados con `rel="sponsored"` (o `nofollow`).

**Qué se hizo:** todos los enlaces a Amazon de las fichas de producto usan `rel="sponsored noopener noreferrer"`.

**Archivos:**
- `src/lib/affiliate.ts` — constante `productLinkRel`
- `src/components/ProductCard.astro` — imagen, nombre y botón “View on Amazon”

**Por qué:** Google no debe tratar un enlace de comisión como un voto editorial normal. `noopener noreferrer` se mantiene por seguridad en pestañas nuevas.

---

## 2. Categorías vacías fuera del índice

**Qué pedía Google:** no gastar crawl en URLs que no te importan; una URL por pieza de contenido útil.

**Qué se hizo:**
- Fitness, Home y Everyday (sin guías publicadas) envían `noindex` y **siguen permitiendo follow**, para que Google pueda salir hacia las páginas reales.
- Esas URLs se excluyen del sitemap. Cuando se publique un post en esa categoría, el siguiente build las vuelve a incluir y quita el `noindex`.
- El 404 sigue con `noindex, nofollow`.

**Archivos:**
- `src/lib/publishedCategories.ts` — detecta categorías con posts no-draft
- `astro.config.mjs` — filtro del sitemap
- `src/pages/category/[slug].astro` — `noindex` si `posts.length === 0`
- `src/components/Seo.astro` y `src/layouts/BaseLayout.astro` — `noindex` y `nofollow` por separado
- `src/pages/404.astro` — pasa ambos

---

## 3. Redirect 301 de `www` al dominio canónico

**Qué pedía Google:** una sola URL canónica; si hay duplicados, redirigir.

**Qué se hizo:** middleware de Cloudflare Pages que responde 301 de `https://www.selectedbymen.com/...` a `https://selectedbymen.com/...`.

`_redirects` de Pages **no admite** reglas a nivel de dominio (está documentado por Cloudflare), por eso el redirect vive en Functions.

**Archivos:**
- `functions/_middleware.js`

**Pendiente en el dashboard de Cloudflare (no se puede hacer desde el repo):**
1. Pages → Custom domains → marcar `selectedbymen.com` como dominio principal (así `www` redirige también a nivel de plataforma).
2. Opcional: Redirect Rule / Bulk Redirect `www.selectedbymen.com` → `selectedbymen.com`.

El HTML ya tenía `<link rel="canonical">` al apex; el 301 evita que Google rastree dos hosts.

---

## 4. Titles y descriptions alineados con búsquedas reales

**Qué pedía Google:** titles únicos, claros, que describan la página; anticipar cómo busca la gente (`charcuterie` vs `cheese board`).

**Qué se hizo:**

| Página | Title en HTML |
|---|---|
| Home | Product recommendations for men · Selected by Men |
| Blog | Buying guides and product recommendations · Selected by Men |
| Grooming | Grooming recommendations for men · Selected by Men |
| Style | Capsule wardrobe and style for men · Selected by Men |
| Tech | Everyday carry tech for men · Selected by Men |
| Fitness / Home / Everyday | Fitness gear / Home essentials / Everyday carry for men · Selected by Men |

Los H1 de marca no se cambiaron (“Buy fewer things…”, “Grooming”). El title es lo que Google usa para el title link.

Descriptions de home, archivo y categorías ahora mencionan de forma natural: grooming routine, capsule wardrobe, everyday carry, safety razor, merino, headphones, Kindle.

**Archivos:**
- `src/data/site.ts`
- `src/data/categories.ts` — campo `seoTitle`
- `src/pages/index.astro`
- `src/pages/blog/index.astro`
- `src/pages/category/[slug].astro`

---

## 5. Enlaces internos y a fuentes de apoyo en los artículos

**Qué pedía Google:** enlazar recursos relevantes; anchor text que describa el destino; no dejar el sitio como un callejón de enlaces de afiliado.

**Qué se hizo:** cada guía enlaza a las otras dos, y a la ficha oficial (o Wikipedia) del producto, con texto de ancla descriptivo.

| Artículo | Internos | Externos (no afiliado) |
|---|---|---|
| Grooming | capsule wardrobe, everyday carry tech | Merkur, Parker, CeraVe |
| Style | grooming routine, everyday carry tech | adidas Stan Smith, Icebreaker |
| Tech | capsule wardrobe, grooming routine | Sony WH-1000XM5, Anker 737, Kindle (Wikipedia) |

Los Amazon de las tarjetas siguen siendo el enlace de compra, ahora con `sponsored`.

También se añadió `updatedDate: 2026-08-27` en el frontmatter (Google pide contenido al día).

**Archivos:**
- `src/content/posts/the-only-grooming-routine-you-need.mdx`
- `src/content/posts/a-capsule-wardrobe-that-actually-works.mdx`
- `src/content/posts/everyday-carry-tech-that-earns-its-place.mdx`

---

## 6. Redes en el footer

**Qué pedía Google:** promover el sitio (social, comunidad) para que otras páginas enlacen y Google descubra el contenido.

**Qué se hizo:** Instagram, X y Pinterest (ya definidos en `site.socials`) visibles en el footer, en pestaña nueva, `rel="noopener noreferrer"`.

**Archivos:**
- `src/components/Footer.astro`

La promoción fuera del sitio (publicar, comunidades, Search Console) no se puede automatizar en código.

---

## 7. Search Console — no automatizable

**Qué pedía Google:** crear la cuenta, enviar el sitemap, usar URL Inspection.

**Qué no se hizo (hace falta tu cuenta de Google):**
1. [Search Console](https://search.google.com/search-console) → añadir `https://selectedbymen.com`.
2. Verificar (DNS TXT o archivo HTML).
3. Sitemaps → `https://selectedbymen.com/sitemap-index.xml`.
4. Inspección de URL en home y en las tres guías; pedir indexación si el snippet sigue siendo de una versión vieja del sitio.
5. Comprobar `site:selectedbymen.com` cuando Google haya recrawleado.

---

## Archivos nuevos

| Archivo | Rol |
|---|---|
| `src/lib/publishedCategories.ts` | Categorías con contenido, para el sitemap |
| `functions/_middleware.js` | 301 www → apex |
| `seo-updates-log.md` | Este log |
