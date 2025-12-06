import { writeFileSync, copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const distDir = resolve(process.cwd(), 'dist')
const indexPath = resolve(distDir, 'index.html')
const notFoundPath = resolve(distDir, '404.html')
const twoHundredPath = resolve(distDir, '200.html')

if (!existsSync(indexPath)) {
  console.warn('dist/index.html not found; skipping 404/200 generation')
  process.exit(0)
}

// SPA redirect 404 per https://github.com/rafgraph/spa-github-pages
const spa404 = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      // Redirect to index.html preserving the path in query params
      (function(l) {
        var p = l.pathname;
        var s = l.search;
        var h = l.hash;
        var q = s && s !== '?' ? s.substring(1) : '';
        var newSearch = '?p=' + encodeURIComponent(p) + (q ? '&q=' + encodeURIComponent(q) : '') + (h ? '&h=' + encodeURIComponent(h.substring(1)) : '');
        l.replace('/' + newSearch);
      })(window.location)
    </script>
  </head>
  <body></body>
  </html>`

writeFileSync(notFoundPath, spa404, 'utf8')
console.log('Wrote dist/404.html SPA redirect')

// Also include 200.html for hosts that use it (harmless on Pages)
copyFileSync(indexPath, twoHundredPath)
console.log('Copied dist/200.html for SPA fallback (optional)')
