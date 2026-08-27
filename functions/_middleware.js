/**
 * Apex is the canonical host. Cloudflare Pages `_redirects` cannot do
 * domain-level rules, so www is folded here.
 */
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'www.selectedbymen.com') {
    url.hostname = 'selectedbymen.com';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
