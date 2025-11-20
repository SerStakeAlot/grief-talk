import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const distDir = resolve(process.cwd(), 'dist')
const indexPath = resolve(distDir, 'index.html')
const notFoundPath = resolve(distDir, '404.html')

if (!existsSync(indexPath)) {
  console.warn('dist/index.html not found; skipping 404 copy')
  process.exit(0)
}

copyFileSync(indexPath, notFoundPath)
console.log('Created dist/404.html for GitHub Pages routing fallback')
